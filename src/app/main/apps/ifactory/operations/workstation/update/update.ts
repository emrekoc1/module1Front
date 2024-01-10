import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from "devextreme/data/data_source";
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactoryService } from '../../../ifactory.service';
@Component({
    selector: 'app-add-update',
    templateUrl: './update.html',
    styleUrls: ['./update.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class UpdateWorkStationComponent implements OnInit {
    new_work_station_form: FormGroup;
    factory_informations: any;
    is_click: boolean = false;
    user_informations: any;
    all_stock: any;
    all_boms: any;
    selected_bom_information: any;
    work_station_list: any;
    selected_operator_values: any;
    selected_work_station_id: any;
    all_departmants: unknown;
    constructor(public ifactory_service: IFactoryService, private fb: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute) {
        this.factory_informations = JSON.parse(localStorage.getItem("factory"));
        this.user_informations = JSON.parse(localStorage.getItem("currentUser"));


        this.activatedRoute.params.subscribe(data => {
            this.selected_work_station_id = data.id;
            console.log(data);
        })
        this.ifactory_service.get_all_departmants().then(result => {
            console.log(result);
            this.all_departmants = result;
        });
        this.new_work_station_form = this.fb.group({
            "name": ['', Validators.required],
            "code": ['', Validators.required],
            "departmant": ['', Validators.required]      
          })

        this.ifactory_service.get_single_work_station_with_id(this.selected_work_station_id).then(result => {
            console.log(result);
            this.new_work_station_form.patchValue({
                "name": result['name'],
                "code": result['code'],
                "departmant": result['depID'],
                "is_completed": result['is_completed'],
            })
        }).catch(err => {
            alert(err);
        })

    }



    ngOnInit(): void { }


    update_work_stations() {
        this.is_click = true;
        console.log(this.new_work_station_form.value);

        console.log(this.new_work_station_form.value);

        const datas = {
            "wsID": this.selected_work_station_id,
            "data": {
                "name": this.new_work_station_form.value.name,
                "code": this.new_work_station_form.value.code,
                "createdUserID": this.user_informations._id,
                "facID": this.factory_informations._id,
                "depID": this.new_work_station_form.value.departmant
            }
        }

        console.log(datas);
        this.ifactory_service.update_work_station(datas).then(result => {
            console.log(result);

            this.router.navigate(["apps/ifactory/managament/w"])
        }).catch(err => {
            this.is_click = false;
            alert(err);
        })
    }

    delete_work_stations() {
      alert("veri güvenligi için iş istasyonu silme kapatılmıştır ")
    }
}

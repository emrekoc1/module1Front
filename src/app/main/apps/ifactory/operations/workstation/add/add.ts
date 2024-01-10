import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from "devextreme/data/data_source";
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactoryService } from '../../../ifactory.service';
@Component({
    selector: 'app-add-operation',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AddWorkStationComponent implements OnInit {
    new_work_station_form: FormGroup;
    factory_informations: any;
    is_click: boolean = false;
    user_informations: any;
    all_departmants: unknown;

    constructor(public ifactory_service: IFactoryService, private fb: FormBuilder, public router: Router) {
        this.factory_informations = JSON.parse(localStorage.getItem("factory"));
        this.user_informations = JSON.parse(localStorage.getItem("currentUser"));
        this.ifactory_service.get_all_departmants().then(result=>{
            console.log(result);
            this.all_departmants = result;
        });
        this.new_work_station_form = this.fb.group({
            "name": ['', Validators.required],
            "code": ['', Validators.required],
            "departmant": ['', Validators.required]
        })
    }




    ngOnInit(): void { }


    add_new_operation() {
        this.is_click = true;
        console.log(this.new_work_station_form.value);

        const datas = {
            "name": this.new_work_station_form.value.name,
            "code": this.new_work_station_form.value.code,
            "createdUserID":this.user_informations._id,
            "facID":this.factory_informations._id,
            "depID":this.new_work_station_form.value.departmant
        }

        console.log(datas);
        this.ifactory_service.add_work_station(datas).then(result=>{
            console.log(result);
           
            this.router.navigate(["apps/ifactory/managament/w"])
        }).catch(err=>{
            this.is_click=false;
            alert(err);
        })
    }
}

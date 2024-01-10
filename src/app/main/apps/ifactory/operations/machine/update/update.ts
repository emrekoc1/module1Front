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
export class UpdateMachineComponent implements OnInit {

    new_machine_form: FormGroup;
    factory_informations: any;
    is_click: boolean = false;
    user_informations: any;
    all_stock: any;
    all_boms: any;
    selected_bom_information: any;
    work_station_list: any;
    selected_operator_values: any;
    selected_machine_id: any;
    constructor(public ifactory_service: IFactoryService, private fb: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute) {
        this.factory_informations = JSON.parse(localStorage.getItem("factory"));
        this.user_informations = JSON.parse(localStorage.getItem("currentUser"));

        this.ifactory_service.get_all_work_stations().then(result => {
            this.work_station_list = result;
            console.log(result);
        }).catch(err => {
            alert(err);
        })

        this.activatedRoute.params.subscribe(data => {
            this.selected_machine_id = data.id;
            console.log(data);
        })
        this.ifactory_service.get_all_work_stations().then(result => {
            this.work_station_list = result;
            console.log(result);
        }).catch(err => {
            alert(err);
        })



        this.new_machine_form = this.fb.group({
            "name": ['', Validators.required],
            "machineNumber": ['', Validators.required],
            "machineDeviceNumbers": 0,
            "productionDevice": 0,
            "speedLineMax": ['', Validators.required],
            "speedLineMin": ['', Validators.required],
            "stopPeriodMin": ['', Validators.required],
            "stopPeriodMax": ['', Validators.required],
            "description": ['', Validators.required],
            "createdUserId": this.user_informations.id,
            "is_completed": ['', Validators.required]

        })

        this.ifactory_service.get_single_machine_with_id(this.selected_machine_id).then(result => {
            console.log(result);
            this.new_machine_form.patchValue({
                "name": result['name'],
                "machineNumber": result['machineNumber'],
                "machineDeviceNumbers": 0,
                "productionDevice": 0,
                "speedLineMax": result['speedLineMax'],
                "speedLineMin": result['speedLineMin'],
                "stopPeriodMin": result['stopPeriodMin'],
                "stopPeriodMax": result['stopPeriodMax'],
                "description": result['description']
            })
        }).catch(err => {
            alert(err);
        })

    }


    get OPERATORVALUES() {
        return this.new_machine_form.get('values') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
    }
    ADDOPERATORVALUE() {
        this.OPERATORVALUES.push(this.fb.group({
            name: ['', Validators.required],
            unite: ['', Validators.required],
            normalValue: [null, Validators.required],
            minValue: [null, Validators.required],
            maxValue: [null, Validators.required],
            isOptional: false
        }));
    }
    DELETEOPERATORVALUE(index) {
        if (index != 0) {
            this.OPERATORVALUES.removeAt(index); // birşeyi silmek istiyorsak onu ifade ediyor 

        } else {
            alert("alert")
        }

    }


    ngOnInit(): void { }

    update_machine() {
        const datas = {

            "machineID": this.selected_machine_id,
            "data": {
                "name": this.new_machine_form.value.name,
                "machineNumber": this.new_machine_form.value.machineNumber,
                "createdUserId": this.user_informations._id,
                "facID": this.factory_informations._id,
                "speedLineMin": this.new_machine_form.value.speedLineMin,
                "speedLineMax": this.new_machine_form.value.speedLineMax,
                "stopPeriodMin": this.new_machine_form.value.stopPeriodMin,
                "stopPeriodMax": this.new_machine_form.value.stopPeriodMax,
                "description": this.new_machine_form.value.description,
                "machineDeviceNumbers": 0
            }

        }

        console.log(datas);

        this.ifactory_service.update_machine(datas).then(result => {
            console.log(result);

            this.router.navigate(["apps/ifactory/managament/m"])
        }).catch(err => {
            this.is_click = false;
            alert(err);
        })
    }

    delete_machine() {
        const datas = {
            "machineID": this.selected_machine_id,
        }

        console.log(datas);

        this.ifactory_service.delete_machine(datas).then(result => {
            console.log(result);

            this.router.navigate(["apps/ifactory/managament/m"])
        }).catch(err => {
            this.is_click = false;
            alert(err);
        })
    }
}

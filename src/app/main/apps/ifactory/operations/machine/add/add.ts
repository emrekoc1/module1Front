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
export class AddMachineComponent implements OnInit {
    new_machine_form: FormGroup;
    factory_informations: any;
    is_click: boolean = false;
    user_informations: any;
    all_stock: any;
    all_boms: any;
    selected_bom_information: any;
    work_station_list: any;
    selected_operator_values: any;
    all_departmants: any;
    all_work_stations: any;
    show_work_station_select: boolean;
    filtered_work_station: any;
    constructor(public ifactory_service: IFactoryService, private fb: FormBuilder, public router: Router) {
        this.factory_informations = JSON.parse(localStorage.getItem("factory"));
        this.user_informations = JSON.parse(localStorage.getItem("currentUser"));

        this.ifactory_service.get_all_work_stations().then(result => {
            this.work_station_list = result;
            console.log(result);
        }).catch(err => {
            alert(err);
        })
        this.ifactory_service.get_all_departmants().then(result=>{
            console.log(result);
            this.all_departmants = result;
        });
        this.ifactory_service.get_all_work_stations().then(result=>{
            console.log(result);
            this.all_work_stations = result;
        })


        this.new_machine_form = this.fb.group({
            "name": ['', Validators.required],
            "machineNumber": ['', Validators.required],
            "machineDeviceNumbers": 0,
            "productionDevice": 0,
            "speedLineMax": ['', Validators.required],
            "departmant": ['', Validators.required],
            "workstation": ['', Validators.required],
            "speedLineMin": ['', Validators.required],
            "stopPeriodMin": ['', Validators.required],
            "stopPeriodMax": ['', Validators.required],
            "description": ['', Validators.required],
            "createdUserId":this.user_informations.id,

        })
    }



    ngOnInit(): void { }

    select_departman(value){
        console.log(value);
        this.new_machine_form.controls['workstation'].reset()
        this.show_work_station_select=true;
        this.filtered_work_station = this.all_work_stations.filter(a=>a.depID === value) 
    }

    add_new_machine() {
        this.is_click = true;
        console.log(this.new_machine_form.value);
        
        const datas = {
            "name": this.new_machine_form.value.name,
            "machineNumber": this.new_machine_form.value.machineNumber,
            "createdUserId": this.user_informations._id,
            "workStationID":this.new_machine_form.value.workstation,
            "facID": this.factory_informations._id,
            "depID": this.new_machine_form.value.departmant,
            "speedLineMin": this.new_machine_form.value.speedLineMin,
            "speedLineMax": this.new_machine_form.value.speedLineMax,
            "stopPeriodMin": this.new_machine_form.value.stopPeriodMin,
            "stopPeriodMax": this.new_machine_form.value.stopPeriodMax,
            "description": this.new_machine_form.value.description,
            "machineDeviceNumbers":0
        }

        console.log(datas);
        
        this.ifactory_service.add_machine(datas).then(result=>{
            console.log(result);
           
            this.router.navigate(["apps/ifactory/managament/m"])
        }).catch(err=>{
            this.is_click=false;
            alert(err);
        })
        
    }
}

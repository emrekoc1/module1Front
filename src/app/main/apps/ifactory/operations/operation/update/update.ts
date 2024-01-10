import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
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
export class UpdateOperationComponent implements OnInit {
    newOperationForm: FormGroup;
    factoryInformations: any;
    isClick = false;
    userInformations: any;
    workStationList: any;
    selectedOperationId: any;
    constructor(public ifactoryService: IFactoryService, private fb: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute) {
        this.factoryInformations = JSON.parse(localStorage.getItem('factory'));
        this.userInformations = JSON.parse(localStorage.getItem('currentUser'));

        this.ifactoryService.get_all_work_stations().then(result => {
            this.workStationList = result;
            console.log(result);
        }).catch(err => {
            alert(err);
        });

        this.activatedRoute.params.subscribe(data => {
            this.selectedOperationId = data.id;
            console.log(data);
        });

        this.newOperationForm = this.fb.group({
            name: ['', Validators.required],
            code: ['', Validators.required],
            workstation: [0, Validators.required],
            type: ['', Validators.required],
            values: this.fb.array([
                this.fb.group({
                    name: ['', Validators.required],
                    unite: ['', Validators.required],
                    normalValue: [null, Validators.required],
                    minValue: [null, Validators.required],
                    maxValue: [null, Validators.required],
                    isOptional: false
                })
            ]),
            operator_entery: ['0', Validators.required],
            time: this.fb.group({
                day: [0, Validators.required],
                hour: [0, Validators.required],
                minute: [0, Validators.required],
            }),


        });

        this.ifactoryService.get_single_operation_with_id(this.selectedOperationId).then(result => {
            console.log(result);
            const value = parseInt(result['time'], 10);

            const day = value / (24 * 60 * 60 * 1000);
            const hour = value / (60 * 60 * 1000) % 24;
            const minute = (value / (60 * 1000)) % 60;
            console.log(Math.floor(day), Math.floor(hour), Math.floor(minute));
            let operatorEntery;
            if (result['operationValues'].length === 0){
                operatorEntery = '0';
            }else{
                if (result['operationValues'][0].name.length > 1) {
                    operatorEntery = '1';
                    this.OperatorValues.removeAt(0);
                } else {
                    operatorEntery = '0';
                }
            }   

            console.log( result['operationValues']);
            for (let index = 0; index < result['operationValues'].length; index++) {
                const element = result['operationValues'][index];
                this.OperatorValues.push(this.fb.group({ 
                    name: [element.name, Validators.required],
                    unite: [element.unite, Validators.required], 
                    normalValue: [element.normalValue, Validators.required], 
                    minValue: [element.minValue, Validators.required], 
                    maxValue: [element.maxValue, Validators.required], 
                    isOptional: element.isOptional }));
            }
           
            this.newOperationForm.patchValue({
                name: result['name'],
                code: result['code'],
                workstation: result['workStationID'],
                type: result['type'],
                operator_entery: operatorEntery,
                time: {
                    day: Math.floor(day),
                    hour: Math.floor(hour),
                    minute:  Math.floor(minute)
                },
            });
        }).catch(err => {
           console.log(err);
        });

    }


    get OperatorValues(): FormArray {
        return this.newOperationForm.get('values') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
    }
    AddOperatorValue(): void {
        this.OperatorValues.push(this.fb.group({
            name: ['', Validators.required],
            unite: ['', Validators.required],
            normalValue: [null, Validators.required],
            minValue: [null, Validators.required],
            maxValue: [null, Validators.required],
            isOptional: false
        }));
    }
    DeleteOperatorValue(index): void {
        if (index !== 0) {
            this.OperatorValues.removeAt(index); // birşeyi silmek istiyorsak onu ifade ediyor 

        } else {
            alert('alerts');
        }

    }


    ngOnInit(): void { }


    updateOperations(): void {
        this.isClick = true;
        console.log(this.newOperationForm.value);

        const datas = {
            name: this.newOperationForm.value.name,
            code: this.newOperationForm.value.code,
            createdUserID: this.userInformations._id,
            facID: this.factoryInformations._id,
            workStationID: this.newOperationForm.value.workstation,
            type: this.newOperationForm.value.type,
            values: this.newOperationForm.value.values,
            operationID: this.selectedOperationId,
            time: (parseInt(this.newOperationForm.value.time.day, 10) * 24 * 60 * 60 * 1000 + 
            parseInt(this.newOperationForm.value.time.hour, 10) * 60 * 60 * 1000 + 
            parseInt(this.newOperationForm.value.time.minute, 10) * 60 * 1000)
        };

        console.log(datas);
        this.ifactoryService.update_operation(datas).then(result => {
            console.log(result);

            this.router.navigate(['apps/ifactory/managament/o']);
        }).catch(err => {
            this.isClick = false;
            alert(err);
        });
    }

    deleteOperations(): void {
        this.isClick = true;
        console.log(this.newOperationForm.value);

        const datas = {
            operationID: this.selectedOperationId,
        };

        console.log(datas);
        this.ifactoryService.delete_operation(datas).then(result => {
            console.log(result);

            this.router.navigate(['apps/ifactory/operations/o']);
        }).catch(err => {
            this.isClick = false;
            alert(err);
        });
    }
}

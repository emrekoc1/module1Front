import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
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
export class AddOperationComponent implements OnInit {
    newOperationForm: FormGroup;
    factoryInformations: any;
    isClick = false;
    userInformations: any;
    workStationList: any;
    constructor(public ifactoryService: IFactoryService, private fb: FormBuilder, public router: Router) {
        debugger;
        this.factoryInformations = JSON.parse(localStorage.getItem('factory'));
        this.userInformations = JSON.parse(localStorage.getItem('currentUser'));

        this.ifactoryService.get_all_work_stations().then(result => {
            this.workStationList = result;
            console.log(result);
        }).catch(err => {
            alert(err);
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
                minute: [0, Validators.required]
            })


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


    addNewOperation(): void {
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
            time: (parseInt(this.newOperationForm.value.time.day, 10) * 24 * 60 * 60 * 1000 +
                parseInt(this.newOperationForm.value.time.hour, 10) * 60 * 60 * 1000 +
                parseInt(this.newOperationForm.value.time.minute, 10) * 60 * 1000)
        };

        console.log(datas);
        this.ifactoryService.add_operation(datas).then(result => {
            console.log(result);

            this.router.navigate(['apps/ifactory/managament/o']);
        }).catch(err => {
            this.isClick = false;
            alert(err);
        });
    }
}

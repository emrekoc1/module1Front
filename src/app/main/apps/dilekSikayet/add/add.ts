import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from '../dilekSikayet.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { DialogComponent } from '../dialog';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-add-duyrular',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AddduyruComponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    isactive: boolean
    user_type

    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public duyruservice: duyrularService, // duyrularService hizmetini enjekte edin
        private fb: FormBuilder,
        public router: Router) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type

        console.log(JSON.parse(localStorage.getItem("currentUser")))
        this.batchForm = this.fb.group({
            baslik: [null, Validators.required],
            aciklama: [null, Validators.required],
            isactive: [false, Validators.required],

        });
    }
    customPanelClass: string = 'custom-snackbar';
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    openSnackBar(mesage:any) {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5 * 1000;

        this._snackBar.open(mesage, '', config);
    }
   ngOnInit(): void {
    }
    element: any
    addBatch() {

        const forms = {
            aciklama: this.batchForm.value.aciklama,
            baslik: this.batchForm.value.baslik,
            departman: JSON.parse(localStorage.getItem("currentUser")).depID,
            user_id: JSON.parse(localStorage.getItem("currentUser")).telephone,
            okundu: this.batchForm.value.isactive,
        };
    
        this.duyruservice.dilekSikayetKutusu(forms).then(result => {
            if (result['status'] == 200) {
                this.openSnackBar("Kayıt Yapılmıştır.")
                this.router.navigate(['/apps/home']);
            }else{
                this.openSnackBar("Kayıt Yapılamamıştır.")
            }


        }).catch(err => {
            alert(err);
        });

    }
}
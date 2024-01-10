import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from '../duyrular.service';
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
    selector: 'app-duzenle',
    templateUrl: './duzenle.html',
    styleUrls: ['./duzenle.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class DuzenleduyruComponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    isactive: boolean
    anket_id: any
    user_id: any
    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public duyruservice: duyrularService,
        private fb: FormBuilder, private route: ActivatedRoute,
        public router: Router) {
        this.anket_id = this.route.snapshot.paramMap.get('id');
        this.user_id = JSON.parse(localStorage.getItem("currentUser"))._id,
            this.batchForm = this.fb.group({
                baslik: [null, Validators.required],
                aciklama: [null, Validators.required],
                isactive: [null, Validators.required],

            });
            this.goruntule()
    
        }

    icerik: any
    baslik:any
aciklama:any
    goruntule() {
        const id = this.route.snapshot.paramMap.get('id');
        const data = {
            id: id,
        }
        this.duyruservice.getanketicerikDuzenle(data).then(result => {
            console.log(result)
            this.icerik = result["data"].recordset
            console.log(this.icerik)
           
                this.baslik= this.icerik[0].duyru_basligi
                this.aciklama=this.icerik[0].duyru_aciklama
               
                this.isactive= this.icerik[0].is_active

         
        }).catch(err => {
            alert(err);
        });

    }

    customPanelClass: string = 'custom-snackbar';

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    openSnackBar() {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5 * 1000;

        this._snackBar.open('Kayıt Yapıldı!!', '', config);
    }


    onValueChanged(e) {
        console.log(e)
    }


    ngOnInit(): void {

    }


    get sellingPoints() {
        return this.batchForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor

    }




    element: any
    addBatch() {
       
       
        const data = {
            aciklama: this.batchForm.value.aciklama,
            baslik: this.batchForm.value.baslik,
            is_activite: this.batchForm.value.isactive,
        };



        this.duyruservice.put_all_duyrular(data).then(result => {
            if (result['status'] == 200) {
                this.openSnackBar()
                this.router.navigate(['/apps/duyru']);
            }


        }).catch(err => {
            alert(err);
        });

    }
}
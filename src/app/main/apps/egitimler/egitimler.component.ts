import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { EgitimlerService } from './egitimler.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OkunduComponent } from './okundu';
import {Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
    selector: 'app-egitimler',
    templateUrl: './egitimler.component.html',
    styleUrls: ['./egitimler.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class EgitimlerComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    user_id :any
    constructor(
        public duyrularervice: EgitimlerService,
        public dialog: MatDialog,
        private fb: FormBuilder, private _snackBar: MatSnackBar,
        public router: Router
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.user_id =  JSON.parse(localStorage.getItem("currentUser")).telephone
        this.duyrugetir()
        // this.searchanket()
    }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []
    box = {
        "id":1,
        "created": "8 Mayıs, 2023", 
        "extention": "",
        "location": "My Files > Documents",
        "modified": "8 Mayıs, 2023",
        "name": "EĞİTİM KİŞİSEL",
        "offline": true,
        "opened": "8 Mayıs, 2023",
        "owner": "İnsan Kaynakları",
        "size": "",
        "type": "folder",
        "video":"assets/1-Etkili İletişim, Diksiyon ve Beden Dili - Giriş.mp4"
    }

    egitimler = []

    customPanelClass: string = 'custom-snackbar';
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin: any = "";
    openSnackBar(message: string, action: string, id: number, type: number) {
        const snackBarRef = this._snackBar.open(message, action, {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'my_snackbar_class',

        });
        snackBarRef.onAction().subscribe(() => {

            this.duyrularervice.egitimDelete(id)
                .then(result => {
                    if (result["status"] === 200) {
                        alert("Silme işlemi yapıldı");
                        this.calismaDuzelt = []
                        this.duyrugetir()
                    } else {
                        alert("Silme işlemi Yapılamadı");
                    }
                })
                .catch(err => {
                    alert(err);
                });

        });
    }
    egitimSil(id:any){
        this.openSnackBar("Eğitim Silinecektir.", "ONAYLA", id, 0)
    }
    egitimDuzenle(id:any){
        this.duyrularervice.egitimDelete(id).then(result => {
           
        }).catch(err => {
            console.log("err,", err)
        })
    }




 
    ngOnInit(): void {
    }
    yenile:boolean = true
    urlDetail
    egitimAc(id:any){

        window.location.href = `http://10.0.0.35:56940/egitim/${id}/${this.user_id}`;
    }
    preventPlayback(event: MouseEvent): void {
        event.preventDefault();
    }
    async duyrugetir() {


        let statusbul;

        this.duyrularervice.get_all_egitim(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
            this.dataget = result;
            if (this.dataget["status"]= 200) {

                this.egitimler=this.dataget.postUserNot
             

               
            }
            console.log(this.egitimler)
        }).catch(err => {
            console.log("err,", err)
        })


    }










}

 
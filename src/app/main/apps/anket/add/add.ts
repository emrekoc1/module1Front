import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AnketService } from '../anket.service';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
@Component({
    selector: 'app-add-anket',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,


})
export class AddAnketComponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    isactive: boolean

    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public duyruservice: AnketService,
        private fb: FormBuilder,
        public router: Router) {




        this.batchForm = this.fb.group({
            baslik: [null, Validators.required],
            aciklama: [null, Validators.required],
            isactive:[true,Validators.required],
            oncelik: [null, Validators.required],
            departman: [null, Validators.required],
            soruType: [null, Validators.required],
            radioSecim: [null, Validators.required],
            cokluText: [null, Validators.required],
            soruText: [null, Validators.required],
            tekilText: [null, Validators.required]
        });
    }



    soruTipi: string;
    sayiDegeri: number;
    metinDegeri: string;
    radioSecenekler: string[] = [];
    seciliRadio = 0;
    soruBaslik = ""
    soruCevabi: ""
    soruTipiDegisti() {
        this.sayiDegeri = null;
        this.metinDegeri = null;
        this.radioSecenekler = [];
        this.seciliRadio = null;
    }

    radioSecildi() {

        for (let i = 1; i <= this.sayiDegeri; i++) {
            this.label.push({ id: this.label.length, value: i.toString() });
        }
        this.seciliRadio = 1
        console.log(this.label);
    }
    label = []
    multiKayit() {
        this.label.push({ id: this.label.length, value: this.soruCevabi })
        console.log(this.soruCevabi)

        this.soruCevabi = ""
    }

    onValueChanged(e) {

    }
    anketBasligi: any
    anketAciklama: any
    soruArray = []
    soruKayit() {
        let calisma
        if (this.soruTipi == '4' || this.soruTipi == '1' || this.soruTipi == '2') {
            if (this.soruTipi == '2') {
                this.radioSecildi()
            }
            calisma = {
                sorubasligi: this.soruBaslik,
                soruType: this.soruTipi,
                soruIcerik: this.label
            }

        } else {
            calisma = {
                sorubasligi: this.soruBaslik,
                soruType: this.soruTipi,
                soruIcerik: ""
            }
        }
        alert("Sorunuz Kadedildi")
        this.soruArray.push(calisma)
        console.log(this.soruArray)
        this.soruBaslik = ""
        this.label = []
        this.soruTipi = ""

    }

    customPanelClass: string = 'custom-snackbar';
    onChangeDepartman(event: any): void {
        console.log(this.batchForm.value.departman)
      }
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin:any = "";
    openSnackBar(text:any) {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5*1000;
        
        this._snackBar.open(text, '', config);
      }


    ngOnInit(): void {
        this.getDepartman()
    }
    departman: any
    getDepartman(): void {
        this.duyruservice.getDepartman().then(result => {
           if(result['status']==200){
           
            this.departman = result["data"]
           
        }else{
           
        }

        }).catch(err => {
            alert(err);
        });

    }
    get sellingPoints() {
        return this.batchForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor

    }


    element: any;
    addBatch() {
        this.is_click = true;
        this.element = []
        const varMi = this.batchForm.value.departman.includes("0");
        if (!varMi) {
            console.log("burası gelen değeri gösteriyor",this.batchForm.value.departman )
            this.element = this.batchForm.value.departman.map(subArray => parseInt(subArray));
            
        } else {
            
            const selectedDepartman = this.batchForm.get('departman');
            selectedDepartman.setValue([...this.departman.map(item => item.id)]);
            this.element = selectedDepartman.value
            alert("TÜM DEPARTMANLARA GÖNDERİLECEKTİR.")
            
        }
        const data = {
             aciklama: this.batchForm.value.aciklama,
            baslik: this.batchForm.value.baslik,
            is_activite : this.batchForm.value.isactive,
            departman: this.element,
            soruType: this.batchForm.value.soruType,
            cokluText: this.batchForm.value.cokluText,
            soruText: this.batchForm.value.soruText,
            tekilText: this.batchForm.value.soruText,
            soruArray: this.soruArray
        };



        this.duyruservice.post_all_anket(data).then(result => {
            if(result['status']==200){
                this.openSnackBar("Kayıt Gerçekleşmiştir.")
                this.router.navigate(['/apps/anket']);
                
            }else{
                this.openSnackBar("Kayıt Yapılamadı Tekrar Deneyiniz")
            }
    
            
            
        }).catch(err => {
            alert(err);
        });

    }
}


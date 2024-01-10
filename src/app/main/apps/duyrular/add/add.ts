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

    
    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public duyruservice: duyrularService,
        private fb: FormBuilder,
        public router: Router) {
       
            
              
       
        this.batchForm = this.fb.group({
            baslik: [null, Validators.required],
            aciklama: [null, Validators.required],
            oncelik: [null, Validators.required],
            departman: [null, Validators.required],
            isactive:[true,Validators.required],

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
        config.duration = 5*1000;
        
        this._snackBar.open('Kayıt Yapıldı!!', '', config);
      }

  
    onValueChanged(e) {
       console.log(e)
    }

  

 


    ngOnInit(): void { 
        this.getDepartman()
    }
departman:any 
    getDepartman():void {
        this.duyruservice.getDepartman().then(result => {
         this.departman = result["data"]
         console.log(this.departman)
            
         }).catch(err => {
             alert(err);
         });

    }
    get sellingPoints() {
        return this.batchForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
        
    }

    onChangeDepartman(event: any): void {
        // const selectedDepartman = this.batchForm.get('departman');

        // if(event.value)
        // {
        //     selectedDepartman.setValue([...this.departman.map(item => item.id)]);
        //     this.element = selectedDepartman.value
          
        // }
        console.log(event)
   
      }

    check_code(code) {

    }
    element :any
    addBatch() {
        this.is_click = true;
       
        console.log(this.batchForm.value.departman)
        const varMi = this.batchForm.value.departman.includes("0");
        console.log(varMi)
        if (!varMi) {
           
        
                this.element=this.batchForm.value.departman.map(subArray => parseInt(subArray));
               
               
               
        }else{
            this.element = []
            const selectedDepartman = this.batchForm.get('departman');
            selectedDepartman.setValue([...this.departman.map(item => item.id)]);
            this.element = selectedDepartman.value
            alert("TÜM DEPARTMANLARA GÖNDERİLECEKTİR.")
            console.log(this.element)
        }
       
       console.log(this.element)
        const data = {
            
            
            
            aciklama: this.batchForm.value.aciklama,
            baslik: this.batchForm.value.baslik,
            oncelik: this.batchForm.value.oncelik,
            departman: this.element,
            is_activite : this.batchForm.value.isactive,

        };
        console.log(data);


        this.duyruservice.post_all_duyrular(data).then(result => {
            if(result['status']==200){
                this.openSnackBar()
                this.router.navigate(['/apps/duyru']);
            }
      
           
        }).catch(err => {
            alert(err);
        });

    }
}
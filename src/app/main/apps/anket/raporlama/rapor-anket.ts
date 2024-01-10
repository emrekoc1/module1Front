import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AnketService } from '../anket.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';

@Component({
    selector: 'app-rapor-anket',
    templateUrl: './rapor-anket.html',
    styleUrls: ['./rapor-anket.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class RaporAnketomponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    dataSource:any

    onFocusedRowChanged(e) {  
        console.log("focus row changed")  
  }  
  users = [];
  questions = [];
    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public AnketService: AnketService,
        private fb: FormBuilder,
        public router: Router) {   
    }

    openDialog(): void {
      
      }
     operator_id:any
  anket_id:any
  
    onChangeOperator(e) {
        console.log(e.value)
        this.operator_id=e.value
        this.dataSource2 = []
        this.getAnketUserID()
     }
     onChangeAnket(e) {
        console.log(e.value)
        this.anket_id =e.value
        this.getNotifUser(e.value)
     }

     onChangeAnketUser(e) {
        console.log(e.value)
        this.anket_id =e.value
        this.dataSource3 = []
        this.getAnketUsers(this.anket_id)
     }
    getNotifUser(data):void {
        this.AnketService.getUserAnket(data).then(result => {
         this.dataSource = result['data']

         console.log(this.dataSource)
            
         }).catch(err => {
             alert(err);
         });

    }
    dataSource2:any
    getAnketUserID():void {
       let user_id = this.operator_id
       let anket_id = this.anket_id 
        this.AnketService.getUserAnketID(anket_id,user_id).then(result => {
         this.dataSource2 = result['data']

         console.log(this.dataSource2)
            
         }).catch(err => {
             alert(err);
         });

    }
    dataSource3
    getAnketUsers(data:any):void {
        
        let anket_id = data 
         this.AnketService.getUsersAnket(anket_id).then(result => {
          this.dataSource3 = result['data']
 
          console.log("bunu çektik mi ",this.dataSource3)
          this.users = Array.from(new Set(this.dataSource3.map(item => item.user_name)));
          this.questions = Array.from(new Set(this.dataSource3.map(item => item.soru_aciklama)));
          }).catch(err => {
              alert(err);
          });
 
     }
     getResponse(user, question) {
        
        const responseObj = this.dataSource3.find(item => item.user_name === user && item.soru_aciklama === question);
        console.log(this.dataSource3,responseObj)
        return responseObj ? responseObj.response : '';
      }
    ngOnInit(): void { 
        this.getDepartman()
       
    }
    duyruData:any
departman:any 
okunanDuyru:any = 0

    getDepartman():void {
        this.AnketService.getAllAnket().then(result => {
           if (result['status']==200) {
            this.duyruData = result['data']
          console.log(result['data'])
           }else{
                alert("Veri Bulunamamıştır.")
           }
        
         }).catch(err => {
             alert(err);
         });

    }
    get sellingPoints() {
        return this.batchForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
        
    }

  

   
 
}
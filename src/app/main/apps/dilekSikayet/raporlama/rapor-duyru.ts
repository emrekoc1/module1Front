import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from '../dilekSikayet.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { DialogComponent } from '../dialog';
import { OkunduComponent } from '../okundu';

@Component({
    selector: 'app-rapor-duyrular',
    templateUrl: './rapor-duyru.html',
    styleUrls: ['./rapor-duyru.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class RaporDuyruComponent implements OnInit {
    
    factory_informations: any;
    is_click = true;
    dataSource:any

    onFocusedRowChanged(e) {  
        console.log("focus row changed")  
  }  
 
    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public duyruservice: duyrularService,
        private fb: FormBuilder,
        public router: Router) {
       
            this.addBatch()
              
       
       
    }

   
    openDialog(): void {
      
      }
   

  
      onChangeDepartman(e) {
       console.log(e.value)
    //    this.getNotifUser(e.value)
    }

    readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];
    // getNotifUser(data):void {
    //     this.okunanDuyru= 0
    //     this.duyruservice.getUsernotif(data).then(result => {
    //      this.dataSource = result['data']
    //      this.dataSource.forEach(element => {
    //         this.okunanDuyru = this.okunanDuyru+1
    //      });
    //      console.log(this.okunanDuyru,this.dataSource)
            
    //      }).catch(err => {
    //          alert(err);
    //      });

    // }


    ngOnInit(): void { 
        // this.getDepartman()
    }
    duyruData:any
departman:any 
okunanDuyru:any = 0
datageldi : any = false
    // getDepartman():void {
    //     this.duyruservice.getallnotif().then(result => {
    //        if (result['status']==200) {
    //         this.duyruData = result['data']
    //         let okunan =result['data2']
    //          okunan.forEach(element => {
    //             this.okunanDuyru = this.okunanDuyru+element.okunan 
    //          });
    //          this.datageldi=true
    //        }else{
    //             alert("Veri Bulunamamıştır.")
    //        }
        
    //      }).catch(err => {
    //          alert(err);
    //      });

    // }
    
  

   
    element :any
    addBatch() {
        this.duyruservice.getDilekSikayet().then(result => {
            this.dataSource = result['data'][0]
            console.log(this.dataSource[0])
           
               
            }).catch(err => {
                alert(err);
            }); 
    }
}
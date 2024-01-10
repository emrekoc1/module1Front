import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { TalepService } from './talep.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import moment, { Moment } from 'moment';
@Component({
    selector: 'app-talep',
    templateUrl: './talep.component.html',
    styleUrls: ['./talep.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class talepComponent implements OnInit {
    dataSource: DataSource;
    user_type:any;
    dataget:any;
    calisma:any;
    constructor(
        public TalepService: TalepService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {
      this.user_type =   JSON.parse(localStorage.getItem("currentUser")).user_type
      this.bordagetir();
      
      // this.user_type = JSON.parse(localStorage.getItem("currentUser"))
      // console.log(this.user_type)
    }

    ngOnInit(): void {
      this.bordagetir()
      
    }

    async bordagetir(){
     
      console.log("init");
    
    
      this.TalepService.get_all_talep(JSON.parse(localStorage.getItem("currentUser"))).then(result=>{
      this.dataget = result;
      this.calisma = this.dataget.data
      console.log(this.calisma)
      }).catch(err=>{
        console.log("err,", err)
      })


  }
    searchbodro():void{
    
     this.TalepService.mailSend( JSON.parse(localStorage.getItem("currentUser"))).then(result => {
     
      if (result[0].status != '200') {
        
         
      } else {
          console.log("danana",result[0].id)
          const data2 = {
            
          };
         
          
      }

  }).catch(err => {
      alert(err);
  });
    }
    

    
   


 


  
}

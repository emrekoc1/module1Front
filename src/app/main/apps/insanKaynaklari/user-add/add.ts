import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { InsanKaynaklariService } from '../ik.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-haber',
  templateUrl: './add.html',
  styleUrls: ['./add.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class UserAddComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  form: FormGroup
  sicil: any
  user_name: any
  pasword_: any
  isdelete: boolean
  isactive: boolean
  user_id: any
  phone: any
  user_type: any
  password_status: any
  constructor(public dialog: MatDialog,
    public homeService: InsanKaynaklariService,private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    
    this.form = this.formBuilder.group({
      sicil: ['', Validators.required],
      user_name: ['', Validators.required],
      pasword_: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      user_id: [null, Validators.required],
      departman: ['', Validators.required],
      isdelete:[false,Validators.required],
      isactive:[true,Validators.required],
    });
  }
  ngOnInit(): void {
    this.getDepartman()
  }
  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  newUser() {
  
    let data = {
      sicil: this.form.value.sicil,
      user_name: this.form.value.user_name,
      phone: this.form.value.phone,
      user_id: this.form.value.user_id,
      departman_id : this.form.value.departman
    }
    this.homeService.newPostUser(data).then(result => {
      if(result['status']==0){
        this.openSnackBar() 
      }

    }).catch(err => {
      console.log("err,", err)
    })
 
   }
   departman1:any
   getDepartman():void {
    this.homeService.getDepartman().then(result => {
     this.departman1 = result["data"]
        
     }).catch(err => {
         alert(err);
     });

}



}
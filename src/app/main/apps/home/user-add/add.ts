import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { HomeService } from '../home.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { DialogComponent } from '../dialog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    MatSnackBar,
    MatSnackBarConfig,
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

 
  form: FormGroup
  sicil: any
  user_name: any
  pasword_: any
  isdelete: boolean
  isactive: boolean
  mail: any
  phone: any
  user_type: any
  password_status: any
  constructor(public dialog: MatDialog,
    public homeService: HomeService,private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    
    this.form = this.formBuilder.group({
      sicil: ['', Validators.required],
      user_name: ['', Validators.required],
      pasword_: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      user_type: [null, Validators.required],
      departman: ['', Validators.required],
      isdelete:[false,Validators.required],
      isactive:[true,Validators.required],
    });
  }
  ngOnInit(): void {
    this.getDepartman()
  }
   customPanelClass: string = 'custom-snackbar';
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
  newUser() {
  
 
   let data = { 
    departman : this.form.value.departman,
    email : this.form.value.mail,
    is_active : this.form.value.isactive,
    is_delete : false,
    password_ : this.form.value.pasword_,
    sicil : this.form.value.sicil,
    user_name : this.form.value.user_name,
    user_type :this.form.value.user_type,
   // user_typename :this.user_typename,
    password_status: false
  }
    this.homeService.newPostUser(data).then(result => {
      if(result['status'] == 200){
        this.openSnackBar("Kullanıcı Başarıyla Eklenmiştir.")}
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
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { baslik: this.form.value.baslik, aciklama: this.form.value.aciklama } // İsteğe bağlı olarak veri geçebilirsiniz
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog kapandı:', result);
    });
  }


}
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
  selector: 'app-user-admin',
  templateUrl: './user-admin.html',
  styleUrls: ['./user-admin.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class UserAdminComponent implements OnInit {
  form: FormGroup
  sicil: any
  user_name: any
  pasword_: any
  isdelete: boolean
  isactive: boolean
  mail: any
  phone: any

  displayedColumns = ['sicil', 'user_name', 'islem', 'islem2']
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar,
    public homeService: HomeService,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {

  }
  customPanelClass: string = 'custom-snackbar';

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  metin: any = "";
  openSnackBar(text: any) {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = this.horizontalPosition;
    config.verticalPosition = this.verticalPosition;
    config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
    config.duration = 5 * 1000;

    this._snackBar.open(text, '', config);
  }
  user_typename: any
  password_status: any
  filteredData: any[] = [];
  formGor: boolean = false
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.filteredData = this.dataget.filter(item =>
      item.user_name.toLowerCase().includes(filterValue) ||
      item.sicil.toString().includes(filterValue)
    );

  }
  select_id: any
  selectedItemKeys: any[] = [];
  update(data: any) {
    console.log(data)
    this.formGor = true
    this.sicil = data.sicil
    this.select_id = data.user_id
    this.isactive = data.is_active
    this.user_name = data.user_name
    this.pasword_ = data.password_
    this.mail = data.email
    this.phone = data.phone
    this.isdelete = data.is_delete
    this.user_typename = data.user_typename
    this.password_status = data.password_status
    this.form = this.formBuilder.group({
      sicil: [this.sicil, Validators.required],
      user_name: [this.user_name, Validators.required],
      pasword_: [this.pasword_, Validators.required],
      mail: [this.mail, Validators.required],
      phone: [this.phone, Validators.required],
      isdelete: [this.isdelete, Validators.required],
      isactive: [this.isactive, Validators.required],
    });


  }
  updateUser() {
    let data = {
      sicil: this.form.value.sicil,
      is_active: this.form.value.isactive,
      user_name: this.form.value.user_name,
      password_: this.form.value.pasword_,
      email: this.form.value.mail,
      phone: this.phone,
      user_id: this.select_id,
      is_delete: this.form.value.isdelete,
      user_typename: this.user_typename,
      password_status: this.password_status
    }
    this.homeService.updateUser(data).then(result => {
      if (result['status'] == 200) {
        this.openSnackBar("Kullanıcı Günceleme İşlemi Gerçekleşmiştir.")

        this.habergetir()
      }else{
        this.openSnackBar("Kullanıcı Günceleme İşlemi Başarısız.")

        this.habergetir()
      }


    }).catch(err => {
      console.log("err,", err)
    })
  }
  deleteUser(data: any) {
    this.homeService.deleteUser(data).then(result => {
      if (result['status'] == 200) {
        this.openSnackBar("Kullanıcı Silme İşlemi Gerçekleşmiştir.")

        this.habergetir()
      }else{
        this.openSnackBar("Kullanıcı Silme İşlemi Başarısız.")

        this.habergetir()
      }


    }).catch(err => {
      console.log("err,", err)
    })
  }

  saleAmountHeaderFilter: any;
  selectedItem: any | null = null;
  applyFilterTypes: any;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;

  ngOnInit(): void {
    this.habergetir()
  }
  dataget: any
  async habergetir() {
    this.filteredData=[]
    this.homeService.getUser(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
      this.dataget = result['postUserNot'];
      this.filteredData = this.dataget

    }).catch(err => {
      console.log("err,", err)
    })
  }
}
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import {UlastirmaService } from './ulastirma.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',

  templateUrl: './ulastirma.component.html',
  styleUrls: ['./ulastirma.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,

})


export class UlastirmaComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  form: FormGroup
  sicil: any
  user_name: any
  pasword_: any
  isdelete: boolean
  isactive: boolean
  mail: any
  phone: any
  user_type:any
  displayedColumns = ['sicil', 'user_name','phone', 'islem', 'islem2','islem3']
  displayedColumns2 = ['sicil', 'user_name','phone']
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,
    public homeService: UlastirmaService,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
this.habergetir()
  }

  user_typename: any
  password_status: any
  filteredData: any[] = [];
  formGor: boolean = false
  departmanFiltre:any
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.filteredData = this.dataget.filter(item =>
      item.user_name.toLowerCase().includes(filterValue) ||
      item.sicil.toString().includes(filterValue)
    );

  }

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  goruntule(data: any): void {
    let rows = data.departman_id;
    this.showForm = true;
    this.formGor = false;
    this.selectedRow = data;
    this.sicil = data.sicil
    this.select_id = data.user_id
    this.user_name = data.user_name
    this.phone = data.phone
    this.form = this.formBuilder.group({
      sicil: [this.sicil, Validators.required],
      user_name: [this.user_name, Validators.required],
      pasword_: [this.pasword_, Validators.required],
     
      phone: [this.phone, Validators.required],
     
    });
    this.departmanFiltre = this.dataget.filter(item =>
      item.departman_id === rows
    );
  }
  select_id: any
  selectedItemKeys: any[] = [];
  user_id:any
  departman_id:any
  update(data: any) {
    console.log(data)
    this.formGor = true
    this.showForm = false;

    this.sicil = data.sicil
    this.select_id = data.id
    this.user_name = data.user_name
    this.user_id = data.user_id
    this.phone = data.phone
    this.departman_id = data.departman_id
    this.form = this.formBuilder.group({
      sicil: [this.sicil, Validators.required],
      user_name: [this.user_name, Validators.required],
      user_id: [this.user_id, Validators.required],
      phone: [this.phone, Validators.required],
      id: [this.select_id, Validators.required],
    });


  }
  updateUser() {
    console.log("danee")



    let data = {
      sicil: this.form.value.sicil,
      user_name: this.form.value.user_name,
      phone: this.form.value.phone,
      user_id: this.form.value.user_id,
      rehber_id:this.select_id,
      departman_id : this.departman_id
    }
    this.homeService.updateUser(data).then(result => {
      console.log(result)

    }).catch(err => {
      console.log("err,", err)
    })
  }
  delete(data:any) {
    console.log(data)
this.homeService.deleteUser(data).then(result => {
      console.log(result)
      if(result['status'] == 200){
        this.openSnackBar()
        this.filteredData=[]
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
  selectedRow:any
  showForm:boolean=false

  ngOnInit(): void {
    this.habergetir()
  }
  dataget: any
  async habergetir() {
    this.homeService.getUser(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
      this.dataget = result['postUserNot'];
      this.filteredData = this.dataget
     

    }).catch(err => {
      console.log("err,", err)
    })
  }
}


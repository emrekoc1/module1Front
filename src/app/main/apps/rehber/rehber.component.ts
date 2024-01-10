import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { RehberService } from './rehber.service';
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

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',

  templateUrl: './rehber.component.html',
  styleUrls: ['./rehber.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,

})


export class RehberComponent implements OnInit {
 

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
    public homeService: RehberService,
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
  turkceBuyukHarf(str) {
    var upperCaseStr = "";
    var turkceChars = {
      "i": "İ",
      "ı": "I",
      "ğ": "Ğ",
      "ü": "Ü",
      "ş": "Ş",
      "ö": "Ö",
      "ç": "Ç"
    };
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      upperCaseStr += turkceChars[char.toLowerCase()] || char.toUpperCase();
    }
  
    return upperCaseStr;
  }
  applyFilter(filterValue: string) {
    
    filterValue = filterValue.trim();
    filterValue = this.turkceBuyukHarf(filterValue)
    this.filteredData = this.dataget.filter(item =>
      item.user_name.toUpperCase().includes(filterValue) ||
      item.sicil.toString().includes(filterValue)
    );

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



    let data = {
      sicil: this.form.value.sicil,
      user_name: this.form.value.user_name,
      phone: this.form.value.phone,
      user_id: this.form.value.user_id,
      rehber_id:this.select_id,
      departman_id : this.departman_id
    }
    this.homeService.updateUser(data).then(result => {
       
      if(result['status'] == 200){
        this.openSnackBar("Telefon Rehberi Güncelemesi Yapılmıştır.")
        this.filteredData=[]
        this.habergetir()
      }

    }).catch(err => {
      console.log("err,", err)
    })
  }
  openSnackBarDelete(message: string, confirmAction: string, rejectAction: string, id: number, type: number) {
    const snackBarRef = this._snackBar.open(message, confirmAction, {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'my_snackbar_class',
        duration: 5000, // Snackbar'ın ne kadar süre görüntüleneceğini belirleyebilirsiniz.
        // Bu süre sonunda otomatik olarak kapanacaktır.
    });

    snackBarRef.onAction().subscribe(() => {
        // Onaylama işlemi
        this.homeService.deleteUser(id)
            .then(result => {
                if (result["status"] === 200) {
                    alert("Silme işlemi yapıldı");
                    this.filteredData = [];
                    this.habergetir();
                } else {
                    alert("Silme işlemi Yapılamadı");
                }
            })
            .catch(err => {
                alert(err);
            });
    });

    // Reddetme işlemi
    snackBarRef.afterDismissed().subscribe(() => {
        // Snackbar otomatik olarak kapatıldığında veya kullanıcı reddettiğinde yapılacak işlemler
        alert("Silme işlemi reddedildi veya otomatik olarak kapatıldı");
        // Burada istediğiniz başka bir işlemi gerçekleştirebilirsiniz.
    });
}
  delete(id:any) {
    this.openSnackBarDelete("Rehbreden Silinecektir.", "ONAYLA", "REDDET", id, 0);

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


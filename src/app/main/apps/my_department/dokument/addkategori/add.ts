import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { MyDepartmentService } from '../../mydepartment.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { DialogComponent } from '../dialog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {
  
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
    selector: 'app-add-evrak',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EvrakKategoriAddComponent implements OnInit {
    form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  depID:any
  multipleImages = [];
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,
    public evrakService : MyDepartmentService,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    this.depID = JSON.parse(localStorage.getItem("currentUser")).depID

    this.form = this.formBuilder.group({
              
      kategori_baslik: ['', Validators.required],          
      kategori_aciklama: [null, Validators.required],   
      
  });
  }
    ngOnInit(): void {
      this.getDepartman()
    }

   
    
      onChangeDepartman(event: any): void {
      
      }
 
      openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '250px',
          data: { baslik: this.form.value.baslik, aciklama : this.form.value.aciklama } // İsteğe bağlı olarak veri geçebilirsiniz
        });
      
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog kapandı:', result);
        });
      }
      departman:any 
    getDepartman():void {
        this.evrakService.getDepartman().then(result => {
         this.departman = result["data"]
         console.log(this.departman)
            
         }).catch(err => {
             alert(err);
         });

    }
    formData = new FormData();
        
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
    onMultipleSubmit() {
     console.log(this.form.value)
      let birim = '0'
      this.formData.append('kategori_baslik', this.form.value.kategori_baslik);
      this.formData.append('kategori_aciklama', this.form.value.kategori_aciklama);
      this.formData.append('kategori_aciklama', this.form.value.kategori_aciklama);

      let data= {
        kategori_baslik:this.form.value.kategori_baslik,
        kategori_aciklama:this.form.value.kategori_aciklama,
        birim:this.depID
      }
      this.evrakService.KategoriOlustur(data).then(result => {
        if (result['status'] === 200) {
          this.openSnackBar()
          this.router.navigate(['/apps/evrak']);
        }
    }).catch(err => {
        alert(err);
    });
  }
   
 
 
}
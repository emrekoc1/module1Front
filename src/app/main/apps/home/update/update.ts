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
    selector: 'app-update-haber',
    templateUrl: './update.html',
    styleUrls: ['./update.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class HomeUpdateComponent implements OnInit {
  form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  haberId:any
  multipleImages = [];
  constructor(public dialog: MatDialog,private route: ActivatedRoute,
    public homeService : HomeService,private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    this.haberId = this.route.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({
      baslik: ['', Validators.required],
      aciklama: ['', Validators.required],
      file: [null, Validators.required]
    });
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
  baslik:any;
  aciklama:any;
  imgase :any;
  dataGet :any
    ngOnInit(): void {
        this.haberSingle()
    }
    haberSingle(){
      this.homeService.singleHaber(this.haberId).then(result => {
            this.dataGet = result
            this.baslik = this.dataGet.postUserNot[0].header
            this.aciklama = this.dataGet.postUserNot[0].description
            this.images = this.dataGet.postUserNot[0].photo
           
            const gelenVeriler = { baslik: this.baslik, aciklama:this.aciklama,photo:this.images };
            console.log(gelenVeriler)
            this.form.patchValue(gelenVeriler);

      }).catch(err => {
          alert(err);
      });
    }
   
    
      selectMultipleImage(event){
        if (event.target.files.length > 0) {
          this.multipleImages = event.target.files;
          this.images = URL.createObjectURL(event.target.files[0]);
        }
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
      onMultipleSubmit(){
        const formData = new FormData();
       
        for(let img of this.multipleImages){
          formData.append('files', img);
        }
        formData.append('id', this.haberId);
        formData.append('aciklama', this.form.value.aciklama);
        formData.append('baslik', this.form.value.baslik);
        this.homeService.updateHaber(formData).then(result => {
          if (result['status'] == 'ok') {
            this.openSnackBar("Kullanıcı Günceleme İşlemi Gerçekleşmiştir.")
            this.router.navigate(['/apps/home']);

          }else{
            this.openSnackBar("Kullanıcı Günceleme İşlemi Başarısız.")
    
          
          }
        }).catch(err => {
            alert(err);
        });
        // this.http.post<any>('http://localhost:3212/multipleFiles',formData).subscribe(
        //   (res) => this.openDialog(),
        //   (err) => console.log(err)
        // );
      }

}
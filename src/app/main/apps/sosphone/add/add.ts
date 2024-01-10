import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from '../sosPhone.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { DialogComponent } from '../dialog';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarConfig,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
  import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-add-duyrular',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AddduyruComponent implements OnInit {
    form: FormGroup;
    selectedFile: File | undefined;
    title = 'fileUpload';
    images;
    haberId:any
    multipleImages = [];
    constructor(public dialog: MatDialog,private route: ActivatedRoute,
      public homeService : duyrularService,private _snackBar: MatSnackBar,
      private formBuilder: FormBuilder, public router: Router,
      private http: HttpClient // HttpClient enjekte edildi
    ) {
      this.haberId = this.route.snapshot.paramMap.get('id');
      this.form = this.formBuilder.group({
     
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
        
      }
    
     
      
        selectMultipleImage(event){
          if (event.target.files.length > 0) {
            this.multipleImages = event.target.files;
            this.images = URL.createObjectURL(event.target.files[0]);
          }
        }
      
      
       
        onMultipleSubmit(){
          const formData = new FormData();
         
          for(let img of this.multipleImages){
            formData.append('files', img);
          }
          formData.append('id', '2');
          
          this.homeService.updateHizliMenu(formData).then(result => {
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
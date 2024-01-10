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
export class EvrakAddComponent implements OnInit {
    form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  multipleImages = [];
  constructor(public dialog: MatDialog,
    public evrakService : MyDepartmentService,private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    this.form = this.formBuilder.group({
      belge_no: ['', Validators.required],           
      belge_adi: ['', Validators.required],          
      belge_aciklama: [null, Validators.required],   
      revizyon_no: ['', Validators.required],  
      kategori: [null, Validators.required],       
     // revizyon_tarihi: ['', Validators.required],    
      is_active: [true, Validators.required],
      file: [null, Validators.required]              
  });
  }
    ngOnInit(): void {
      this.getDepartman()
    }

    selectImage(event) {
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.images = file;
        }
      }
    
      selectMultipleImage(event){
        if (event.target.files.length > 0) {
          this.multipleImages = event.target.files;
        }
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
      kategoriData:any 
    getDepartman():void {
        this.evrakService.getKategori().then(result => {
         this.kategoriData = result["data"]
         console.log(this.kategoriData)
            
         }).catch(err => {
             alert(err);
         });

    }
    formData = new FormData();
    uploadProgress: number = 0;
    onMultipleSubmit() {
     
      for (let img of this.multipleImages) {
          this.formData.append('files', img);
      }
      this.formData.append('belge_no', this.form.value.belge_no);
      this.formData.append('belge_adi', this.form.value.belge_adi);
      this.formData.append('belge_aciklama', this.form.value.belge_aciklama);
      this.formData.append('revizyon_no', this.form.value.revizyon_no);
      this.formData.append('kategori', this.form.value.kategori);
     // this.formData.append('revizyon_tarihi', this.form.value.revizyon_tarihi);
      this.formData.append('is_active',this.form.value.is_active);
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
              this.uploadProgress = (event.loaded / event.total) * 100;
          }
      });

      xhr.addEventListener('load', () => {
          this.uploadProgress = 100;
          this.uploadComplete();
      });

      xhr.addEventListener('error', (error) => {
          console.error('Upload error:', error);
      });

      xhr.open('POST', 'your-upload-endpoint-url');
      xhr.send(this.formData);
  }
    updateUploadProgress(progress: number) {
      this.uploadProgress = progress;
  }
     
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


onValueChanged(e) {
   console.log(e)
}
  uploadComplete() {
      // Upload is complete, you can trigger any necessary actions here
      this.evrakService.evrakOlustur(this.formData).then(result => {
          if (result['status'] === 200) {
            this.openSnackBar()
            this.router.navigate(['/apps/evrak']);
          }
      }).catch(err => {
          alert(err);
      });
  }
 
}
import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { EgitimlerService } from '../egitimler.service';
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

@Component({
    selector: 'app-add-haber',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EgitimAddComponent implements OnInit {
    form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  multipleImages = [];
  constructor(public dialog: MatDialog,
    public egitimService : EgitimlerService,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    this.form = this.formBuilder.group({
      baslik: ['', Validators.required],
      aciklama: ['', Validators.required],
      kategori: [null, Validators.required],
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
      onSubmit(){
        const formData = new FormData();
        formData.append('file', this.images);

        const data = {
            
            
            
              aciklama: this.form.value.aciklama,
              baslik: this.form.value.baslik,
           
          }
          this.egitimService.resimUpdate(formData).then(result => {
            if(result['status'] = "ok"){
            this.openDialog()
             this.router.navigate(['/apps/home']);
            }
          }).catch(err => {
              alert(err);
          });
        // this.http.post<any>('http://localhost:3212/file', formData).subscribe(
        //   (res) => this.openDialog(),
        //   (err) => console.log(err)
        // );
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
        this.egitimService.getDepartman().then(result => {
         this.departman = result["data"]
         console.log(this.departman)
            
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
      this.formData.append('aciklama', this.form.value.aciklama);
      this.formData.append('baslik', this.form.value.baslik);
      this.formData.append('kategori', this.form.value.kategori);

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
  uploadComplete() {
      // Upload is complete, you can trigger any necessary actions here
      this.egitimService.resimUpdate(this.formData).then(result => {
          if (result['status'] === 'ok') {
              this.openDialog();
          }
      }).catch(err => {
          alert(err);
      });
  }
 
}
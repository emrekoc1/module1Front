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
  selector: 'app-egitim-detail',
  templateUrl: './egitim-add.html',
  styleUrls: ['./egitim-add.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class EgitimDetailAddComponent implements OnInit {
  form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  courseId: any;
  multipleImages = [];
  uploadProgress: number = 0;
  constructor(public dialog: MatDialog,
    public egitimService: EgitimlerService, private route: ActivatedRoute,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {

    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    })
    this.form = this.formBuilder.group({
      baslik: ['', Validators.required],

      file: [null, Validators.required]
    });
  }
  ngOnInit(): void {

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
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
  formData = new FormData();
  onMultipleSubmit() {

    const totalFiles = this.multipleImages.length;
    let uploadedFiles = 0;

    for (let img of this.multipleImages) {
      this.formData.append('files', img);
    }

    this.formData.append('baslik', this.form.value.baslik);
    this.formData.append('egitim_id', this.courseId);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const loadedMB = (event.loaded / (1024 * 1024)).toFixed(2); // Yüklenen veriyi MB cinsinden hesapla
    const totalMB = (event.total / (1024 * 1024)).toFixed(2); // Toplam veriyi MB cinsinden hesapla
    const progressMB = loadedMB + ' MB / ' + totalMB + ' MB'; // İlerleme durumunu MB cinsinden oluştur
    console.log(progressMB); // İlerleme durumunu konsola yazdır
    this.updateUploadProgresss(progressMB);
        const progress = (event.loaded / event.total) * 100;
        this.updateUploadProgress(progress);
      }
    });

    xhr.addEventListener('load', () => {
      uploadedFiles++;
      if (uploadedFiles === totalFiles) {
        this.uploadComplete();
      }
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
  uploadProgress1:any
  updateUploadProgresss(progress: any) {
    this.uploadProgress1 = progress;
  }

  uploadComplete() {
    // Upload is complete, you can trigger any necessary actions here
    this.egitimService.kategoriVideoEkle(this.formData).then(result => {
      if (result['status'] === 'ok') {
        this.openDialog();
      }
    }).catch(err => {
      alert(err);
    });
  }


}
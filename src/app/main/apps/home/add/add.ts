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
export class HomeAddComponent implements OnInit {
  form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  multipleImages = [];
  constructor(public dialog: MatDialog,
    public homeService: HomeService,
    private formBuilder: FormBuilder, public router: Router,private _snackBar: MatSnackBar,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
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

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    const data = {



      aciklama: this.form.value.aciklama,
      baslik: this.form.value.baslik,

    }
    this.homeService.resimUpdate(formData).then(result => {
      if (result['status'] = "ok") {
        this.openSnackBar("Haber Eklenmiştir.")
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
      data: { baslik: this.form.value.baslik, aciklama: this.form.value.aciklama } // İsteğe bağlı olarak veri geçebilirsiniz
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog kapandı:', result);
    });
  }
  onMultipleSubmit() {
    const formData = new FormData();

    for (let img of this.multipleImages) {
      formData.append('files', img);
    }
    let birim = '0'
    formData.append('aciklama', this.form.value.aciklama);
    formData.append('baslik', this.form.value.baslik);
    formData.append('birim',birim)
    this.homeService.resimUpdate(formData).then(result => {
      if (result['status'] = "ok") {
        this.openSnackBar("Haber Eklenmiştir.")
        this.router.navigate(['/apps/home']);
      }
    }).catch(err => {
      alert(err);
    });
    // this.http.post<any>('http://localhost:3212/multipleFiles',formData).subscribe(
    //   (res) => this.openDialog(),
    //   (err) => console.log(err)
    // );
  }

  // OnClick of button Upload

  //   onFileSelected(event: any): void {
  //     console.log(event)
  //     this.selectedFile = event.target.files[0];
  //     console.log(this.selectedFile)
  //   }

  //   onSubmit(): void {
  //     console.log(this.selectedFile)


  // const data = {



  //     aciklama: this.form.value.aciklama,
  //     baslik: this.form.value.baslik,
  //     file:`assets/images/haber/${this.selectedFile.name}`,

  // };
  //     if ( this.selectedFile) {

  //         console.log(data)

  //       this.homeService.post_all_home(data).then(result => {

  //       }).catch(err => {
  //           alert(err);
  //       });
  //     }
  //   }
}
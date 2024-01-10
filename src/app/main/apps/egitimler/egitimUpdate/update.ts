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
    selector: 'app-egitim-update',
    templateUrl: './update.html',
    styleUrls: ['./update.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EgitimUpdateComponent implements OnInit {
    form: FormGroup;
  selectedFile: File | undefined;
  title = 'fileUpload';
  images;
  egitimId:any
  multipleImages = [];
  constructor(public dialog: MatDialog,
    public egitimService : EgitimlerService,
    private formBuilder: FormBuilder, public router: Router,private route: ActivatedRoute,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
   
    this.egitimId = this.route.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({
      baslik: ['', Validators.required],
      aciklama: ['', Validators.required],
      kategori: [null, Validators.required],
      file: [null, Validators.required]
    });
  }
    ngOnInit(): void {
      this.EgitimSingle()
    }

    // selectImage(event) {
    //     if (event.target.files.length > 0) {
    //       const file = event.target.files[0];
    //       this.images = file;
    //     }
    //   }
    
      selectMultipleImage(event){
        if (event.target.files.length > 0) {
          this.multipleImages = event.target.files;
        }
      }
    
      // onSubmit(){
      //   const formData = new FormData();
      //   formData.append('file', this.images);

      //   const data = {
            
            
            
      //         aciklama: this.form.value.aciklama,
      //         baslik: this.form.value.baslik,
           
      //     }
      //     this.egitimService.resimUpdate(formData).then(result => {
      //       if(result['status'] = "ok"){
      //       this.openDialog()
      //        this.router.navigate(['/apps/home']);
      //       }
      //     }).catch(err => {
      //         alert(err);
      //     });
      //   // this.http.post<any>('http://localhost:3212/file', formData).subscribe(
      //   //   (res) => this.openDialog(),
      //   //   (err) => console.log(err)
      //   // );
      // }
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
        formData.append('aciklama', this.form.value.aciklama);
        formData.append('baslik', this.form.value.baslik);
        formData.append('kategori', this.form.value.kategori);
        formData.append('id',this.idBaslik);
        this.egitimService.egitimUpdate(formData).then(result => {
          if(result['status'] = "ok"){
            this.openDialog()
          }
        }).catch(err => {
            alert(err);
        });
        // this.http.post<any>('http://localhost:3212/multipleFiles',formData).subscribe(
        //   (res) => this.openDialog(),
        //   (err) => console.log(err)
        // );
      }
      dataGet
      baslik
      kategori
      idBaslik
      EgitimSingle(){
        this.egitimService.singleEgitim(this.egitimId).then(result => {
              this.dataGet = result
              this.baslik = this.dataGet.postUserNot[0].Name
              this.kategori = this.dataGet.postUserNot[0].kategori
              this.images = this.dataGet.postUserNot[0].Video
             this.idBaslik = this.dataGet.postUserNot[0].id
              const gelenVeriler = { baslik: this.baslik, aciklama:this.kategori,Video:this.images };
              console.log(gelenVeriler)
              this.form.patchValue(gelenVeriler);
  
        }).catch(err => {
            alert(err);
        });
      }
     
 
}
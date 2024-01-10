import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { EvrakDokumanService } from '../evrak-dokuman.service';
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
    selector: 'app-evrak-update',
    templateUrl: './update.html',
    styleUrls: ['./update.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EvrakUpdateComponent implements OnInit {
    form: FormGroup;
    selectedFile: File | undefined;
    title = 'fileUpload';
    images;
    evrakId: any
    multipleImages = [];
    constructor(public dialog: MatDialog,
        public evrakService: EvrakDokumanService,
        private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute,
        private http: HttpClient
    ) {

        this.evrakId = this.route.snapshot.paramMap.get('id');
        this.evrakSingle()
        this.form = this.formBuilder.group({
            belge_no: ['', Validators.required],
            belge_adi: ['', Validators.required],
            belge_aciklama: [null, Validators.required],
            revizyon_no: ['', Validators.required],
            revizyon_tarihi: ['', Validators.required],
            file: [null, Validators.required]
        });
    }
    ngOnInit(): void {
        this.evrakSingle()
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


        for (let img of this.multipleImages) {
            this.formData.append('files', img);
        }
        this.formData.append('id', this.evrakId);
        this.formData.append('belge_no', this.form.value.belge_no);
        this.formData.append('belge_adi', this.form.value.belge_adi);
        this.formData.append('belge_aciklama', this.form.value.belge_aciklama);
        this.formData.append('revizyon_no', this.form.value.revizyon_no);
        this.formData.append('revizyon_tarihi', this.form.value.revizyon_tarihi);
        this.evrakService.egitimUpdate(this.formData).then(result => {
            if (result['status'] = "ok") {
                this.openDialog()
            }
        }).catch(err => {
            alert(err);
        });

    }
    dataGet
    belge_no
    belge_adi
    belge_aciklama
    revizyon_no
    revizyon_tarihi
    evrakSingle() {
        this.evrakService.singleEvrak(this.evrakId).then(result => {
            this.dataGet = result["data"]

            this.belge_no = this.dataGet.belge_no
            this.belge_adi = this.dataGet.belge_adi
            this.revizyon_no = this.dataGet.revizyon_no
            this.belge_aciklama = this.dataGet.belge_aciklama
            this.revizyon_tarihi = this.dataGet.revizyon_tarihi
            this.images = this.dataGet.belge_url
            const gelenVeriler = { belge_no: this.belge_no, belge_adi: this.belge_adi, belge_aciklama: this.belge_aciklama, revizyon_tarihi: this.revizyon_tarihi, revizyon_no: this.revizyon_no, images: this.images };
            console.log(gelenVeriler)
            this.form.patchValue(gelenVeriler);

        }).catch(err => {
            alert(err);
        });
    }


}
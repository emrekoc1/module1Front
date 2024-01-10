import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from './yemekList.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OkunduComponent } from './okundu';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-yemekList',
    templateUrl: './yemekList.component.html',
    styleUrls: ['./yemekList.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class YemekListComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    constructor(
        public duyrularervice: duyrularService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {
        let pdfUrl
        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.duyrularervice.getGuzergah(4).then(result => {
            if (result['status'] == 'ok') {
              
                let pdfUrl = result['data']
                window.open(pdfUrl, '_blank');
                console.log(pdfUrl)
            }
          }).catch(err => {
              alert(err);
          });


    }

    ngOnInit(): void {
        let pdfUrl
        this.duyrularervice.getGuzergah(4).then(result => {
            if (result['status'] == 'ok') {
              
                pdfUrl = result['data']
                window.open(pdfUrl, '_blank');
                console.log(pdfUrl)
            }
          }).catch(err => {
              alert(err);
          });
       

    }
  

    openPdf(data) {
      window.open(data, '_blank');
    }



}
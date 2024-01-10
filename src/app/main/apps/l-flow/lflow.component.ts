import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { LFlowService } from './lflow.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
@Component({
    selector: 'app-lflow',
    templateUrl: './lflow.component.html',
    styleUrls: ['./lflow.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class LFlowComponent implements OnInit {
    dataSource: DataSource;
    user_type: any;
    sicil:any
    facID:any
    constructor(
        public LFlowService: LFlowService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router, private _snackBar: MatSnackBar,
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.facID = JSON.parse(localStorage.getItem("currentUser")).facID
        this.sicil = JSON.parse(localStorage.getItem("currentUser")).telephone
        // this.searchanket()

        console.log("burada token bilgisi mevcut",this.facID )
    }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []
    oncelik: number = 3;

    ngOnInit(): void {
        // Power BI raporunuzu göstermek için gerekli ayarları yapın
       
      }
   

  
    
    customPanelClass: string = 'custom-snackbar';
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    openSnackBar(mesage:any) {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5 * 1000;

        this._snackBar.open(mesage, '', config);
    }
    async flowToken() {
        try {
          const result = await this.LFlowService.lflowToken(this.sicil);
      
          if (result['status'] === 200) {
            this.openSnackBar("Kayıt Yapılmıştır.");
            console.log(result)
            window.open('https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/Dashboard.aspx?qstoken='+this.facID, '_blank');

          } else {
            this.openSnackBar("Kayıt Yapılamamıştır.");
          }
        } catch (error) {
          console.error(error);
          this.openSnackBar("Hata oluştu: " + error);
        }
      }
      sehirDisi() {
        const firstPageURL = 'https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/Dashboard.aspx?qstoken=' + this.facID;
      
        // İlk web sayfasını yeni bir sekmede aç
        const firstPageWindow = window.open(firstPageURL, '_blank');
      
        // İlk sayfanın kapanmasını 5 saniye sonra ayarlayın
        setTimeout(() => {
          firstPageWindow.close();
      
          // İkinci web sayfasını açma işlemi
          this.sehirDisiLink();
        }, 1000);
      }
      
      // İkinci web sayfasını açma işlemi
      sehirDisiLink() {
        const secondPageURL = 'https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/PendingWorkflow.aspx?WfId=219&publish=1&lwfid=243';
      
        // İkinci web sayfasını yeni bir sekmede aç
        window.open(secondPageURL, '_blank');
      }
      sehirIci() {
        const firstPageURL = 'https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/Dashboard.aspx?qstoken=' + this.facID;
      
        // İlk web sayfasını yeni bir sekmede aç
        const firstPageWindow = window.open(firstPageURL, '_blank');
      
        // İlk sayfanın kapanmasını 5 saniye sonra ayarlayın
        setTimeout(() => {
          firstPageWindow.close();
      
          // İkinci web sayfasını açma işlemi
          this.sehirIciLink();
        }, 1000);
      }
      
      // İkinci web sayfasını açma işlemi
      sehirIciLink() {
        const secondPageURL = 'https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/PendingWorkflow.aspx?WfId=226&publish=1&lwfid=239';
      
        // İkinci web sayfasını yeni bir sekmede aç
        window.open(secondPageURL, '_blank');
      }

 



}


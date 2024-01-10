import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { InsanKaynaklariService } from './ik.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',

  templateUrl: './ik.component.html',
  styleUrls: ['./ik.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,

})


export class InsanKaynaklariComponent implements OnInit {
  is_id: any
  user_type: any;
  sicil:any
  facID:any
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar,
    public homeService: InsanKaynaklariService,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.is_id = this.route.snapshot.paramMap.get('talep');
    this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
    this.facID = JSON.parse(localStorage.getItem("currentUser")).facID
    this.sicil = JSON.parse(localStorage.getItem("currentUser")).telephone
    console.log(this.is_id)
    if (this.is_id == 3) { this.sehirIci() }
    if (this.is_id == 4) { this.sehirDisi() }
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
    this.router.navigate(['/apps/home']);
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
    this.router.navigate(['/apps/home']);
    // İkinci web sayfasını yeni bir sekmede aç
    window.open(secondPageURL, '_blank');
    
  }

  ngOnInit(): void {

  }

}


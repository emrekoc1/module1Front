import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { BakimOnarimService } from './bakim.service';
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

  templateUrl: './bakim.component.html',
  styleUrls: ['./bakim.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,

})


export class BakimOnarimComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  is_id: any

  user_type: any;
  sicil:any
  facID:any
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,
    public homeService: BakimOnarimService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
    this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
    this.is_id = this.route.snapshot.paramMap.get('talep');
    this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
    this.facID = JSON.parse(localStorage.getItem("currentUser")).facID
    this.sicil = JSON.parse(localStorage.getItem("currentUser")).telephone
    
    this.bakimOnarim()
  }

  ngOnInit(): void {

  }
  bakimOnarim() {
    const firstPageURL = 'https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/Dashboard.aspx?qstoken=' + this.facID;
  
    // İlk web sayfasını yeni bir sekmede aç
    const firstPageWindow = window.open(firstPageURL, '_blank');
  
    // İlk sayfanın kapanmasını 5 saniye sonra ayarlayın
    setTimeout(() => {
      firstPageWindow.close();
  
      // İkinci web sayfasını açma işlemi
      this.bakimOnarimLink();
    }, 1000);
  }
  
  // İkinci web sayfasını açma işlemi
  bakimOnarimLink() {
    const secondPageURL = 'https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/PendingWorkflow.aspx?WfId=272&publish=1&lwfid=272';
    this.router.navigate(['/apps/home']);
    // İkinci web sayfasını yeni bir sekmede aç
    window.open(secondPageURL, '_blank');
    
  }




  
}


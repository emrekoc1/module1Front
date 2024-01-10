import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { BilgiIslemService } from './bilgiIslem.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',

  templateUrl: './bilgiIslem.component.html',
  styleUrls: ['./bilgiIslem.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,

})


export class BilgiIslemComponent  {
 
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,
    public homeService: BilgiIslemService,
    private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient // HttpClient enjekte edildi
  ) {
  }

  
}


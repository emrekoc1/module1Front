import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from './dilekSikayet.service';
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
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
@Component({
    selector: 'app-dilekSikayet',
    templateUrl: './dilekSikayet.component.html',
    styleUrls: ['./dilekSikayet.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class DilekSikayetComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    constructor(
        public duyrularervice: duyrularService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router, private _snackBar: MatSnackBar,
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
     
        // this.searchanket()
    }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []
    oncelik: number = 3;

    ngOnInit(): void {
    }

 
    customPanelClass: string = 'custom-snackbar';

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin:any = "";
    openSnackBar(text:any) {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5*1000;
        
        this._snackBar.open(text, '', config);
      }


  
    openDialog(): void {
        const dialogRef = this.dialog.open(OkunduComponent, {
            width: '250px',
            data: { name: 'John', age: 30 } // İsteğe bağlı olarak veri geçebilirsiniz
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog kapandı:', result);
        });
    }


 



}


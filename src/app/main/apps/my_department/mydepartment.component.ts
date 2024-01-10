import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { MyDepartmentService } from './mydepartment.service';
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
    selector: 'app-mydepartment',
    templateUrl: './mydepartment.component.html',
    styleUrls: ['./mydepartment.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class MyDepartmentComponent implements OnInit {
    dataSource: DataSource;
    user_type: any;
    telepHone: any


    anaSayfaEkle: boolean = true
    dokumanlar: boolean = true
    anketler: boolean = true
    Personel: boolean = true
    constructor(
        public mydepartmentService: MyDepartmentService,
        public dialog: MatDialog,
        private fb: FormBuilder, private _snackBar: MatSnackBar,
        public router: Router
    ) {

        this.telepHone = JSON.parse(localStorage.getItem("currentUser")).telephone
        console.log(this.telepHone)
        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type

        // this.searchanket()
    }
secilenMenu:any = "Home"
    menuSecilen(event:any){
        this.secilenMenu = event
    }
    ngOnInit(): void {

    }

}







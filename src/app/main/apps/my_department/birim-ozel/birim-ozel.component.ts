import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyDepartmentService } from './../mydepartment.service';
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
import { filter } from 'lodash';
@Component({
    selector: 'app-birim-ozel',
    templateUrl: './birim-ozel.component.html',
    styleUrls: ['./birim-ozel.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class BirimOzelComponent implements OnInit {
    user_type: any
    constructor(
        public evrakService: MyDepartmentService,
        public dialog: MatDialog,
        private fb: FormBuilder, private _snackBar: MatSnackBar,
        public router: Router
    ) {

    
        // this.searchanket()
    }
  
    iconsBakim = [ 'domain_disabled','pan_tool', 'domain','storefront', 'build', 'settings', 'vpn_key', 'build_circle'];
    iconsPlan = [ 'domain_disabled', 'domain', 'done_all', 'done_outline','done','donut_large','donut_small'];
    iconsMekanik = ['filter_8', 'done_all', 'done_outline','done', 'build', 'settings','query_builder','error', 'domain_disabled', 'domain'];
    currentIconPlan: string = this.iconsPlan[0];
    currentIconBakim: string = this.iconsBakim[0];
    currentIconMekanik: string = this.iconsMekanik[0];
    interval: any;
    customPanelClass: string = 'custom-snackbar';
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin: any = "";
    openSnackBar(message: string, action: string, id: number, type: number) {
        const snackBarRef = this._snackBar.open(message, action, {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'my_snackbar_class',

        });
    
    }
    planlamayaGit(){
        let url = "https://planlama.aho.com"
        window.open(url)
    }
    bakimOnarimGit(){
        let url = "https://bakim.aho.com"
        window.open(url)
    }
    mekanikAtolyeGit(){
        let url = "https://uretim.aho.com"
        window.open(url)
    }
    ngOnInit(): void {
        let indexPlan = 0;
        let indexBakim = 0;
        let indexMekanik = 0;

        this.interval = setInterval(() => {
            indexPlan = (indexPlan + 1) % this.iconsPlan.length;
            indexBakim = (indexBakim + 1) % this.iconsBakim.length;
            indexMekanik = (indexMekanik + 1) % this.iconsMekanik.length;
            this.currentIconPlan = this.iconsPlan[indexPlan];
            this.currentIconMekanik = this.iconsMekanik[indexMekanik];
            this.currentIconBakim = this.iconsBakim[indexBakim];
          }, 500);
    }
  
}


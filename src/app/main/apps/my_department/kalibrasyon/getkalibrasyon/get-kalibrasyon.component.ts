import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { MyDepartmentService } from '../../mydepartment.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
    selector: 'app-getkalibrasyon',
    templateUrl: './get-kalibrasyon.component.html',
    styleUrls: ['./get-kalibrasyon.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class GetKalibrasyonComponent implements OnInit {
    dataSource: DataSource;
    form: FormGroup
    showFilterRow: boolean;
    data: any
  
    @Input() key: any;

    constructor(
        public mydepartmentService: MyDepartmentService,
        public dialog: MatDialog,
        private fb: FormBuilder, private _snackBar: MatSnackBar,
        public router: Router
    ) {
        this.showFilterRow = true;
    

        // this.searchanket()
    }
  
 



    ngOnInit() {


        console.log(this.key)
        this.mydepartmentService.getDetailKalibrasyon(this.key).then(result => {

            if (result['status'] == 200) {
                this.dataSource = result['data']
             console.log(this.dataSource)
            }

        }).catch(err => {
            alert(err);
        });

    }

}







import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
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
import { DataService } from 'app/services/data.service';

@Component({
    selector: 'app-quit',
    templateUrl: './quit.component.html',
    styleUrls: ['./quit.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class QuitComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    constructor(
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router, dataservice:DataService
    ) {

        dataservice.logout()
    }

    ngOnInit(): void {
        
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('factory');
        localStorage.removeItem('dept_with_work_and_machine');
        this.router.navigateByUrl('/pages/auth/login-2');
    }


}


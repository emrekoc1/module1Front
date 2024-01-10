import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    selector: 'app-add',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class AddComponent implements OnInit {
    dataSource: DataSource;
    form: FormGroup
    user_type: any
    showFilterRow: boolean;
    data: any
    ekipman_no: any
    ekipman_name: any
    ekipman_type: any
    birimi: any
    sorumlusu: any
    durumu: any
    son_kalibrasyon: any
    gonderme_tarihi: any

    constructor(
        public mydepartmentService: MyDepartmentService,
        public dialog: MatDialog,
        private fb: FormBuilder, private _snackBar: MatSnackBar,
        public router: Router
    ) {
        this.showFilterRow = true;
        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.form = this.fb.group({
            ekipman_no: ['', Validators.required],
            ekipman_name: ['', Validators.required],
            ekipman_type: ['', Validators.required],
            birimi: ['', Validators.required],
            sorumlusu: ['', Validators.required],
            durumu: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            son_kalibrasyon: ['', Validators.required],
            gonderme_tarihi: ['', Validators.required],
        });


        this.mydepartmentService.getStatusAndDepartment().then(result => {

            if (result['status'] == 200) {
                this.status = result['quality_status']
                this.department = result['quailty_departman']
            }

        }).catch(err => {
            alert(err);
        });
        // this.searchanket()
    }
    customPanelClass: string = 'custom-snackbar';

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin: any = "";
    status: any
    department: any
    openSnackBar(text: any) {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5 * 1000;

        this._snackBar.open(text, '', config);


    }
    postMaterial() {
        const tarih = this.form.value.son_kalibrasyon;

        const gun = ("0" + tarih.getDate()).slice(-2);
        const ay = ("0" + (tarih.getMonth() + 1)).slice(-2);
        const yil = tarih.getFullYear(); 

        const son_kalibrasyon = `${gun}/${ay}/${yil}`;
        const tarih2 = this.form.value.gonderme_tarihi;

        const gun2 = ("0" + tarih2.getDate()).slice(-2);

        const ay2 = ("0" + (tarih2.getMonth() + 1)).slice(-2);
        const yil2 = tarih2.getFullYear(); 

        const gonderme_tarihi = `${gun2}/${ay2}/${yil2}`; // Formatlı tarih oluştur
        console.log(son_kalibrasyon)
        let formData = {
            'ekipman_no': this.form.value.ekipman_no,
            'ekipman_name': this.form.value.ekipman_name,
            'ekipman_type': this.form.value.ekipman_type,
            'birimi': this.form.value.birimi,
            'sorumlusu': this.form.value.sorumlusu,
            'durumu': this.form.value.durumu,
            'son_kalibrasyon': son_kalibrasyon,
            'gonderme_tarihi': gonderme_tarihi,
        }

        console.log(formData)
        this.mydepartmentService.postKalibrasyonMetarial(formData).then(result => {
            console.log(result)
            if (result['status'] == 200) {
                this.openSnackBar("Envanter Eklenmiştir..")
                this.router.navigate(['/apps/mydepartment']);
            } if (result['status'] == 205) {
                this.openSnackBar("Bu envanter daha önce eklenmiştir. Tekrar ekleyemezsiniz!!!")
                //this.router.navigate(['/apps/mydepartment']);
            }

        }).catch(err => {
            alert(err);
        });
    }



    ngOnInit() {



    }

}







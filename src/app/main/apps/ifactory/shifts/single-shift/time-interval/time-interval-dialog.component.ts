import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-time-interval-dialog',
    templateUrl: './time-interval-dialog.component.html',
    styleUrls: ['./time-interval-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TimeIntervalDialogComponent {

    timeIntervalForm: FormGroup;
    submitTitle: string;
    dialogTitle: string;

    constructor(
        public matDialogRef: MatDialogRef<TimeIntervalDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private _formBuilder: FormBuilder) {

        if (data.timeIntervalForm) {
            this.submitTitle = 'Kaydet';
            this.dialogTitle = 'Düzenleme';
            this.timeIntervalForm = data.timeIntervalForm;
        }
        else {
            this.submitTitle = 'Ekle';
            this.dialogTitle = 'Ekleme';
            this.timeIntervalForm = this.createForm();
        }

    }

    private createForm(): FormGroup {
        return this._formBuilder.group({
            _id: [undefined],
            starttime: [null, Validators.required],
            endtime: [null, Validators.required],
            name: [null, Validators.required]
        });
    }
}

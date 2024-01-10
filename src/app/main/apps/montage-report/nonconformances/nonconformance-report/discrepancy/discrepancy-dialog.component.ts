import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-discrepancy-dialog',
    styleUrls: ['./discrepancy-dialog.scss'],
    templateUrl: './discrepancy-dialog.html',
    encapsulation: ViewEncapsulation.None
})
export class DiscrepancyDialog {

    discrepancyForm: FormGroup;
    submitTitle: string;
    dialogTitle: string;

    constructor(
        public matDialogRef: MatDialogRef<DiscrepancyDialog>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private _formBuilder: FormBuilder) {

        if (data.discrepancyForm) {
            this.submitTitle = 'Kaydet';
            this.dialogTitle = 'Düzenleme';
            this.discrepancyForm = this._formBuilder.group({
                no: [{ value: data.discrepancyForm.no, disabled: true }, Validators.required],
                traveler: [data.discrepancyForm.traveler, Validators.required],
                operator: [data.discrepancyForm.operator],
                inspector: [data.discrepancyForm.inspector],
                defectCode: [data.discrepancyForm.defectCode, Validators.required],
                quantity: [data.discrepancyForm.quantity, Validators.required],
                defectDescription: [data.discrepancyForm.defectDescription, Validators.required]
            });
        }
        else {
            this.submitTitle = 'Ekle';
            this.dialogTitle = 'Ekleme';
            this.discrepancyForm = this.createForm();
        }

    }

    private createForm(): FormGroup {
        return this._formBuilder.group({
            no: [null, Validators.required],
            traveler: [null, Validators.required],
            operator: [null],
            inspector: [null],
            defectCode: [null, Validators.required],
            quantity: [null, Validators.required],
            defectDescription: [null, Validators.required]
        });
    }
}

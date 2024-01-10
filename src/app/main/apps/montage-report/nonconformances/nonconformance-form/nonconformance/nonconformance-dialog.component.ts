import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-nonconformance-dialog',
    templateUrl: './nonconformance-dialog.html',
    styleUrls: ['./nonconformance-dialog.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NonConformanceDialog {

    nonconfForm: FormGroup;
    submitTitle: string;
    dialogTitle: string;

    constructor(
        public matDialogRef: MatDialogRef<NonConformanceDialog>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private _formBuilder: FormBuilder) {

        if (data.dataForm) {
            this.submitTitle = 'Kaydet';
            this.dialogTitle = 'Düzenleme';
            this.nonconfForm = this._formBuilder.group({
                reworkOrderNumber: [{ value: data.dataForm.reworkOrderNumber, disabled: true }, Validators.required],
                discrepancyCode: [data.dataForm.discrepancyCode, Validators.required],
                description: [data.dataForm.description, Validators.required],
                operations: [data.dataForm.operations, Validators.required],
                operatingUser: [data.dataForm.operatingUser, Validators.required],
                responsibleUserForQuality: [data.dataForm.responsibleUserForQuality, Validators.required],
            });
        }
        else {
            this.submitTitle = 'Ekle';
            this.dialogTitle = 'Ekleme';
            this.nonconfForm = this.createForm();
        }

    }

    private createForm(): FormGroup {
        return this._formBuilder.group({
            reworkOrderNumber: [null, Validators.required],
            discrepancyCode: [null, Validators.required],
            description: [null, Validators.required],
            operations: [null, Validators.required],
            operatingUser: [null, Validators.required],
            responsibleUserForQuality: [null, Validators.required],
        });
    }
}

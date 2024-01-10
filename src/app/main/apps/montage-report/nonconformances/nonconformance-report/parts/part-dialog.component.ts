import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-part-dialog',
    templateUrl: './part-dialog.html',
    styleUrls: ['./part-dialog.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PartDialog {

    partForm: FormGroup;
    submitTitle: string;
    dialogTitle: string;

    constructor(
        public matDialogRef: MatDialogRef<PartDialog>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private _formBuilder: FormBuilder) {

        if (data.partForm) {
            this.submitTitle = 'Kaydet';
            this.dialogTitle = 'Düzenleme';
            console.log(data.partForm)
            this.partForm = this._formBuilder.group({
                partNo: [{ value: data.partForm.partNo, disabled: true }, Validators.required],
                partName: [data.partForm.partName, Validators.required],
                partType: [data.partForm.partType],
                status: [data.partForm.status],
                description: [data.partForm.description, Validators.required],
                inputSerialNo: [data.partForm.inputSerialNo, Validators.required],
                outputSerialNo: [data.partForm.outputSerialNo, Validators.required]
            });
        }
        else {
            this.submitTitle = 'Ekle';
            this.dialogTitle = 'Ekleme';
            this.partForm = this.createForm();
        }

    }

    private createForm(): FormGroup {
        return this._formBuilder.group({
            partNo: [null, Validators.required],
            partName: [null, Validators.required],
            partType: [null],
            status: [null],
            description: [null, Validators.required],
            inputSerialNo: [null, Validators.required],
            outputSerialNo: [null, Validators.required]

        });
    }
}

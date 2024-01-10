import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-quality-control-operation-dialog',
    templateUrl: './quality-control-operation-dialog.component.html',
    styleUrls: ['./quality-control-operation-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QualityControlOperationDialogComponent {
    loading = true;
    
    action: string;
    qualityControlOperationForm: FormGroup;
    dialogTitle: string;

    operations: any;
    filteredOperations: any;

    index: any;

    constructor(
        public matDialogRef: MatDialogRef<QualityControlOperationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    ) {
        this.action = _data.action;
        this.operations = _data.operations;
        this.filteredOperations = _data.operations;

        if (_data.qualityControlOperation) {
          this.dialogTitle = 'Düzenleme';
          this.qualityControlOperationForm = _data.qualityControlOperation;
          this.index = _data.index;
        }
        else {
          this.dialogTitle = 'Ekleme';
          this.qualityControlOperationForm = this.createForm();
        }
    
        this.loading = false;

    }

    createForm(): FormGroup {
        return this._formBuilder.group({
            operation: ['', Validators.required]
        });
    }

    save(): void {
      this.matDialogRef.close([this.qualityControlOperationForm, this.action, this.index]);
    }

    getFilteredOperations(event) {
      this.filteredOperations = event;
    }
}

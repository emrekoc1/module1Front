import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { tr } from 'date-fns/locale';
import { isNaN } from 'lodash';

@Component({
    selector: 'app-test-operation-dialog',
    templateUrl: './test-operation-dialog.component.html',
    styleUrls: ['./test-operation-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TestOperationDialogComponent {
    loading = true;

    action: string;
    testOperationForm: FormGroup;
    dialogTitle: string;

    operations: any;
    filteredOperations: any;

    index: any;

    constructor(
        public matDialogRef: MatDialogRef<TestOperationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    ) {
        this.action = _data.action;
        this.operations = _data.operations;
        this.filteredOperations = _data.operations;

        if (_data.testOperation) {
            this.dialogTitle = 'Düzenleme';
            this.testOperationForm = _data.testOperation;
            this.index = _data.index;
        }
        else {
            this.dialogTitle = 'Ekleme';
            this.testOperationForm = this.createForm();
        }

    }

    createForm(): FormGroup {
        return this._formBuilder.group({
            operation: ['', Validators.required],
            wait_time: ['', Validators.required],
            test_quantity_percentage: ['', Validators.required],
            wait_time_str: ['', Validators.required],
            day: [0, Validators.required],
            hour: [0, Validators.required],
            minute: [0, Validators.required]
        });
    }

    change(operationDay, operationHour, operationMinute): void {
        const waitTime = parseInt(operationDay, 10) * 86400 + parseInt(operationHour, 10) * 3600 + parseInt(operationMinute, 10) * 60;
        this.testOperationForm.patchValue({
            wait_time: waitTime,
            wait_time_str: (parseInt(operationDay, 10) > 0 ? operationDay + ' gün  ' : '') +
                (parseInt(operationHour, 10) > 0 ? operationHour + ' saat  ' : '') +
                (parseInt(operationMinute, 10) > 0 ? operationMinute + ' dakika  ' : '')
        });
    }

    save(): void {
        const operationTimeInMillis = this.testOperationForm.value.day * 86400000
            + this.testOperationForm.value.hour * 3600000 +
            this.testOperationForm.value.minute * 60000;


        const form = this._formBuilder.group({
            operation: {
                ...this.testOperationForm.value.operation,
                time: operationTimeInMillis
            },
            wait_time: this.testOperationForm.value.wait_time,
            test_quantity_percentage: this.testOperationForm.value.test_quantity_percentage,
            wait_time_str: this.testOperationForm.value.wait_time_str
        });

        this.matDialogRef.close([this.testOperationForm, this.action, this.index]);
    }

    getFilteredOperations(event) {
      this.filteredOperations = event;
    }
}

import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from './input-dialog/input-dialog.component';

@Component({
  selector: 'app-operation-dialog',
  templateUrl: './operation-dialog.component.html',
  styleUrls: ['./operation-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OperationDialogComponent {
  dialogRef: any;

  loading = true;
  operationForm: FormGroup;
  dialogTitle: string;

  operators: any;
  operations: any;
  filteredOperations: any;
  products: any;
  customData = [];

  action: any;
  routesIndex: any;
  operationIndex: any;

  constructor(
    public matDialogRef: MatDialogRef<OperationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.operators = _data.operators;
    this.operations = _data.operations;
    this.filteredOperations = _data.operations;
    this.products = _data.products;
    this.customData = _data.customData;

    this.action = _data.action;
    this.routesIndex = _data.routesIndex;
    this.operationIndex = _data.operationIndex;

    if (_data.operation) {
      this.dialogTitle = 'Düzenleme';
      this.operationForm = _data.operation;
    }
    else {
      this.dialogTitle = 'Ekleme';
      this.operationForm = this.createForm();
    }

    this.loading = false;
  }

  get operationFormGroup(): FormGroup { return this.operationForm ?? this.createForm(); }
  get operationFormControllers(): { [key: string]: AbstractControl; } { return this.operationFormGroup.controls; }
  get Inputs(): FormArray { return this.operationForm.get('inputs') as FormArray; }
  get InputsControllers(): AbstractControl[] { return this.Inputs.controls; }

  createForm(): FormGroup {
    this.operationForm = this._formBuilder.group({
      operationName: ['', Validators.required],
      operatorList: this._formBuilder.array([]),
      name: '',
      code: '',
      status: 0,
      inputs: this._formBuilder.array([]),
      outputs: '',
      operationTime: this._formBuilder.group({
        day: [0, Validators.required],
        hour: [0, Validators.required],
        minute: [0, Validators.required],
        waitTimeStr: ['', Validators.required],
        waitTime: 0
      })
    });
    return this.operationForm;
  }

  openInputDialog(action, input, inputIndex): void {
    this.dialogRef = this.dialog.open(InputDialogComponent, {
      panelClass: 'input-form-dialog',
      data: {
        products: this.products,

        input,
        action,
        inputIndex
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];
        const act: string = response[1];
        const inputI: number = response[2];
        if (formData) {
          switch (act) {
            case 'add':
              (this.operationForm.controls['inputs'] as FormArray).push(formData);
              break;
            case 'edit':
              (this.operationForm.controls['inputs'] as FormArray).setControl(inputI, formData);
              break;
          }
        }
      });
  }
  deleteInput(event, iRoutes, index): void {
    (this.operationForm.controls['inputs'] as FormArray).removeAt(index);
    if (event) {
      event.stopPropagation();
    }
  }

  change(operationDay, operationHour, operationMinute): void {
    if (parseInt(operationDay, 10) === 0 && parseInt(operationHour, 10) === 0 && parseInt(operationMinute, 10) === 0) {
      this.operationFormControllers['operationTime'].patchValue({
        waitTime: 0,
        waitTimeStr: ''
      });
      return;
    }

    const waitTime = parseInt(operationDay, 10) * 86400 + parseInt(operationHour, 10) * 3600 + parseInt(operationMinute, 10) * 60;
    this.operationFormControllers['operationTime'].patchValue({
      waitTime: waitTime,
      waitTimeStr: (parseInt(operationDay, 10) > 0 ? (operationDay + ' gün ') : '') +
        (parseInt(operationHour, 10) > 0 ? (operationHour + ' saat  ') : '') +
        (parseInt(operationMinute, 10) > 0 ? (operationMinute + ' dakika') : '')
    });
  }

  getInputTypeText(value): string {
    switch (value) {
      case '1': return 'Ana Parça';
      case '2': return 'Ekstra Parça';
      default: return '';
    }
  }

  save(): void {

    const operationTimeInMillis = this.operationFormGroup.value.operationTime.day * 86400000
      + this.operationFormGroup.value.operationTime.hour * 3600000 +
      this.operationFormGroup.value.operationTime.minute * 60000;
    
    this.operationForm.get('operationName').patchValue({
      ...this.operationFormGroup.value.operationName,
      time: operationTimeInMillis
    });
    this.operationForm.removeControl('operationTime');
    this.matDialogRef.close([this.operationFormGroup, this.action, this.routesIndex, this.operationIndex]);
  }

  getFilteredOperations(event) {
    this.filteredOperations = event;
  }
}

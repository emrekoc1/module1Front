import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { OperationDialogComponent } from './operation-dialog/operation-dialog.component';

@Component({
  selector: 'app-part-dialog',
  templateUrl: './part-dialog.component.html',
  styleUrls: ['./part-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartDialogComponent {
  dialogRef: any;

  loading = true;
  partForm: FormGroup;
  dialogTitle: string;

  operators: any;
  filteredOperators;

  operations: any;
  products: any;
  customData = [];

  action: any;
  index: any;

  constructor(
    public matDialogRef: MatDialogRef<PartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.operators = _data.operators;
    this.filteredOperators = _data.operators;
    this.operations = _data.operations;
    this.products = _data.products;
    this.customData = _data.customData;

    this.action = _data.action;

    if (_data.part) {
      this.dialogTitle = 'Düzenleme';
      this.partForm = _data.part;
      this.index = _data.index;
    }
    else {
      this.dialogTitle = 'Ekleme';
      this.partForm = this.createForm();
    }

    this.loading = false;
  }

  get partFormGroup(): FormGroup { return this.partForm ?? this.createForm(); }
  get partFormControllers(): { [key: string]: AbstractControl; } { return this.partFormGroup.controls; }
  get Routes(): FormArray { return this.partForm.get('routes') as FormArray; }
  get RoutesControllers(): AbstractControl[] { return this.Routes.controls; }

  GetOperationArray(index): FormArray { return (this.Routes.controls)[index].get('Operations') as FormArray; }
  GetInputFromOperation(index, index2): FormArray { return (this.GetOperationArray(index).controls[index2]).get('inputs') as FormArray; }

  createForm(): FormGroup {
    this.partForm = this._formBuilder.group({
      partName: ['', Validators.required],
      isAssinged: ['', Validators.required],
      partType: [0, Validators.required],
      status: 0,
      level: 0,
      id: 0,
      operatorList: this._formBuilder.array([]),
      routes: this._formBuilder.array([
        this._formBuilder.group({
          Operations: this._formBuilder.array([]),
          ConnectionParts: this._formBuilder.array(['', '']),
          ConnectionIDs: this._formBuilder.array([]),
          Output: '',
        })
      ])
    });
    return this.partForm;
  }

  // addOperation(event, iRoutes, index): void {
  openOperationDialog(action, operation, routesIndex, operationIndex): void {
    this.dialogRef = this.dialog.open(OperationDialogComponent, {
      panelClass: 'operation-form-dialog',
      data: {
        operators: this.operators,
        operations: this.operations,
        products: this.products,
        customData: this.customData,

        operation,
        action,
        routesIndex,
        operationIndex
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];
        const act: string = response[1];
        const routesI: number = response[2];
        const operationI: number = response[3];
        if (formData && typeof routesI !== 'undefined' && routesI !== null) {
          switch (act) {
            case 'add':
              (((this.partForm.controls['routes'] as FormArray).controls[routesI] as FormGroup).controls['Operations'] as FormArray).push(formData);
              break;
            case 'edit':
              (((this.partForm.controls['routes'] as FormArray).controls[routesI] as FormGroup).controls['Operations'] as FormArray).setControl(operationI, formData);
              break;
          }
        }
      });
  }
  deleteOperation(event, iRoutes, index): void {
    (((this.partForm.controls['routes'] as FormArray).controls[iRoutes] as FormGroup).controls['Operations'] as FormArray).removeAt(index);
    if (event) {
      event.stopPropagation();
    }
  }

  getInputTypeText(value): string {
    switch (value) {
      case '1': return 'Ana Parça';
      case '2': return 'Ekstra Parça';
      default: return '';
    }
  }

  save(): void {
    this.matDialogRef.close([this.partForm, this.action, this.index]);
  }

  getFilteredOperators(event) {
    this.filteredOperators = event;
  }
}

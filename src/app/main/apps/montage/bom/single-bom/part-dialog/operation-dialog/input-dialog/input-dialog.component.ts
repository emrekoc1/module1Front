import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputDialogComponent {
  loading = true;
  inputForm: FormGroup;
  dialogTitle: string;

  products: any;
  filteredProducts: any;

  action: string;
  inputIndex: any;

  constructor(
    public matDialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder
  ) {
    this.products = _data.products;
    this.filteredProducts = _data.products;

    this.action = _data.action;
    this.inputIndex = _data.inputIndex;

    if (_data.input) {
      this.dialogTitle = 'Düzenleme';
      this.inputForm = _data.input;
    }
    else {
      this.dialogTitle = 'Ekleme';
      this.inputForm = this.createForm();
    }

    this.loading = false;
  }

  get inputFormGroup(): FormGroup { return this.inputForm ?? this.createForm(); }
  get inputFormControllers(): { [key: string]: AbstractControl; } { return this.inputFormGroup.controls; }

  createForm(): FormGroup {
    this.inputForm = this._formBuilder.group({
      p_name: [null, Validators.required],
      p_planned_quantity: [0, Validators.required],
      p_type: ['1', Validators.required],
      p_input_array: this._formBuilder.array([]),
      p_input_quantity: 0,
      p_wastageArray: this._formBuilder.array([]),
      p_wastage_quantity: 0
    });
    return this.inputForm;
  }

  save(): void {
    this.matDialogRef.close([this.inputForm, this.action, this.inputIndex]);
  }

  getFilteredProducts(event) {
    this.filteredProducts = event;
  }
}

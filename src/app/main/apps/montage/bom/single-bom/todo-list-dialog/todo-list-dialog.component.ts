import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-todo-list-dialog',
    templateUrl: './todo-list-dialog.component.html',
    styleUrls: ['./todo-list-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodoListDialogComponent {
    loading = true;

    action: string;
    todoListForm: FormGroup;
    dialogTitle: string;
    
    index: any;

    constructor(
        public matDialogRef: MatDialogRef<TodoListDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    ) {
        this.action = _data.action;

        if (_data.todo) {
          this.dialogTitle = 'Düzenleme';
          this.todoListForm = _data.todo;
          this.index = _data.index;
        }
        else {
          this.dialogTitle = 'Ekleme';
          this.todoListForm = this.createForm();
        }
    
        this.loading = false;

    }

    createForm(): FormGroup {
        return this._formBuilder.group({
            desc: ['', Validators.required]
        });
    }

    save(): void {
      this.matDialogRef.close([this.todoListForm, this.action, this.index]);
    }
}

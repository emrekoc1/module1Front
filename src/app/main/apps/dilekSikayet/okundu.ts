import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

import {MatDialog,   MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-okundu',
  
  template: `
    <h1 mat-dialog-title>duyru Okunuyor</h1>
    <div mat-dialog-content>
      Okuma Tamamlanmıştır.
    </div>
    <div mat-dialog-actions>
    <button mat-raised-button color = "accent" (click)="onNoClick()">Kapat</button>
    </div>
  `,
 
})
export class OkunduComponent {
  constructor(
    public dialogRef: MatDialogRef<OkunduComponent>, button:MatButtonModule,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
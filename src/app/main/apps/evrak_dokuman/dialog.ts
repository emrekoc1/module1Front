import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.baslik }}</h1>
    <div mat-dialog-content>
      <p>Duyru Açıklaması: {{ data.aciklama }}</p>

      Kayıt İşlemi gerçekleşmiştir. 
    </div>
    <div mat-dialog-actions>
    <button mat-raised-button color = "accent" (click)="onNoClick()">Kapat</button>
    </div>
  `
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,button:MatButtonModule,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
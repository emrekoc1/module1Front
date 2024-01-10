import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-birimsecim-content',
    template: `
    <div>
      <button mat-button class="custom-button" (click)="navigate('IK')">IK</button>
      <button mat-button class="custom-button" (click)="navigate('Planlama')">Planlama</button>
      <button mat-button class="custom-button" (click)="navigate('Satın alma')">Satın alma</button>
      <button mat-button class="custom-button" (click)="navigate('Gece Görüş')">Gece Görüş</button>
      <button mat-button class="custom-button" (click)="navigate('Mekanik Üretim')">Mekanik Üretim</button>
      <button mat-button class="custom-button" (click)="navigate('Optik Üretim')">Optik Üretim</button>
      <button mat-button class="custom-button" (click)="navigate('Gündüz Görüş')">Gündüz Görüş</button>

    </div>
  `,
  styles: [`
  .custom-button {
    width: 100px;
    height: 80px;
    margin: 5px;
    color:#f3f6f4;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 10%;
  }

  /* Her bir buton için farklı renkler */
  .custom-button:nth-child(1) {
    background-color: #a8d7df;
  }
  .custom-button:nth-child(2) {
    background-color: #1d9485;
  }
  .custom-button:nth-child(3) {
    background-color: #83c6d2;
  }
  .custom-button:nth-child(4) {
    background-color: #89c7bc;
  }
  .custom-button:nth-child(5) {
    background-color: #2098ae;
  }
  .custom-button:nth-child(6) {
    background-color: #a7d3ae;
  }
  .custom-button:nth-child(7) {
    background-color: #b7d5ec;
  }

`],
})
export class birimsecimContentComponent {

    constructor(private dialogRef: MatDialogRef<birimsecimContentComponent>) { }

    navigate(birim: string): void {
        // Burada, her bir butona tıklandığında yapılacak işlemleri tanımlayabilirsiniz
        // Örneğin:
        switch (birim) {
            case 'IK':
                this.redirectTo('/home/1');
                break;
            case 'Planlama':
                this.redirectTo('/home/2');
                break;
            case 'Satınalma':
                this.redirectTo('/home/3');
                break;
            case 'Gece Görüş':
                this.redirectTo('/home/4');
                break;
            case 'Mekanik Üretim':
                this.redirectTo('/home/5');
                break;
            case 'Optik Üretim':
                this.redirectTo('/home/6');
                break;
            case 'Gündüz Görüş':
                this.redirectTo('/home/7');
                break;
            // Diğer durumlar için aynı şekilde devam ettirin
        }
        this.dialogRef.close(); // Dialogu kapatmak için
    }

    redirectTo(url: string): void {
        // Yönlendirme işlemi burada gerçekleşir
        window.location.href =`http://10.0.0.35:5000/${url}`; // Yönlendirme yapılacak URL
    }
}
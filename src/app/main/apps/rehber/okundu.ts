import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-detail',
  template: `
    <h2>{{ data.aciklama }}</h2>
    <p>{{ data.icerik }}</p>
    <img [src]="data.photo" class="max-photo-size" />
  `,
})
export class NewsDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

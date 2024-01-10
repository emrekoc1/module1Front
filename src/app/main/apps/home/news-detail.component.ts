import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent {
  haber_id
  haber_basligi
  haber_aciklmasi
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public duyrularervice: HomeService) {
    this.haber_id = data.id
    this.haber_basligi = data.aciklama
    this.haber_aciklmasi = data.icerik
    this.habergetir()
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  };
  dataget: any
  currentIndex = 0;
  calismaKitabi: any
  
  async habergetir() {

    console.log("bu işlem bitmiş")


    this.duyrularervice.singleHaberDetail(this.haber_id).then(result => {
      this.dataget = result;
      this.calismaKitabi = this.dataget.postUserNot
      console.log(this.calismaKitabi)
    }).catch(err => {
      console.log("err,", err)
    })


  }


}

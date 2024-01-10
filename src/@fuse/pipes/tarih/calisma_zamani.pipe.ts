import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'worktime'})
export class worktime implements PipeTransform {
  transform(value: any,startedDate:any,finishDate:any): any {
    //"test pie den yazıyoru",startedDate,finishDate,value)
    var calisma_gunu = finishDate-startedDate;
    let gun    = (calisma_gunu / (24*60*60*1000)).toString();
    var saat   = (calisma_gunu / (60*60*1000)% 24).toString();
    let dakika = ((calisma_gunu / (60*1000))% 60).toString();
    let saniye = ((calisma_gunu / (1000))% 60).toString();
    var deger;
    if(parseInt(gun) < 1){
      if(parseInt(saat) < 1){
        deger = parseInt(dakika)+" Dakika " + parseInt(saniye)+" Saniye" ;
      }
      else{
        deger = parseInt(saat) +" Saat "+ parseInt(dakika)+" Dakika " + parseInt(saniye)+" Saniye" ;
      }
    }else{
      if(parseInt(saat) < 1){
        deger = parseInt(gun) +" Gün " +parseInt(saat) +" Saat "+ parseInt(dakika)+" Dakika " + parseInt(saniye)+" Saniye" ;
      }
      else{
        deger = parseInt(gun) +" Gün " +parseInt(saat) +" Saat "+ parseInt(dakika)+" Dakika " + parseInt(saniye)+" Saniye" ;
      }
      
    }


    return  deger;
  }
}
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: any): any {
    let gun    = (value / (24*60*60*1000)).toString();
    var saat   = (value / (60*60*1000)% 24).toString();
    let dakika = ((value / (60*1000))% 60).toString();
    let saniye = ((value / (1000))% 60).toString();
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
    if(saat.toString()=="NaN"){
      return "hesaplanmadı"
    }else{
      return  deger;
    }
  
  }
}



import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'machinePerformance2' })
export class machinePerformance2 implements PipeTransform {
  transform(value: any, produced: any, wastage: any): any {
    var val = (100*wastage) / produced
    if(val==0){
        var html = `
        <div class="zero">`+ val.toFixed(2)+`%
    ` 
    }else if(val>0 && val<1){
        var html = `
        <div class="perfect">`+ val.toFixed(2)+`%
    `
    }else if(val>1 && val<3){
        var html = `
        <div class="good">`+ val.toFixed(2)+`%
    `
    }else if(val>3 && val<5){
        var html = `
        <div class="normal">`+ val.toFixed(2)+`%
    `
    }
    else if(val>5 && val<9){
        var html = `
        <div class="low">`+ val.toFixed(2)+`%
    `
    }
    else if(val>9){
        var html = `
        <div class="veryLow">`+ val.toFixed(2)+`%
    `
    }
    
    
    return html
  }
}
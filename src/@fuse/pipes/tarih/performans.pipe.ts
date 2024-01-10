import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'testpipe' })
export class testpipe implements PipeTransform {
  transform(value: any, value1: any, maximum_deger: any): any {

    console.log(value, value1, maximum_deger);


    if (maximum_deger == value1) {
      var val = 100 - (100 * (maximum_deger - value1) / maximum_deger)
      var html =
        `
        <a style="float:left;color:red">
            100% 
        </a>


      `
    } else {

      var val = 100 - (100 * (maximum_deger - value1) / maximum_deger)
      var html =
        `
        <a style="float:left;color:black">
            `+ val.toFixed(2) + `%
        </a>
    `
    }

    return html
  }
}
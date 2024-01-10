import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'operator_calisma_zamani' })
export class operatorCalisma2version implements PipeTransform {
  transform(value: any, start: any, finish: any): any {
    //"geldii")
    //value);

    var now_date = new Date(start);
    var now_year = now_date.getFullYear();
    var now_month = now_date.getMonth() + 1;
    var now_day = now_date.getDate();
    var return_datas = "0 Saat 0 Dakika";

    var test_datas = 0;
    for (var key in value[now_year]) {

      if (!value[now_year].hasOwnProperty(key)) continue;

      var obj = value[now_year][key];
      for (var prop in obj) {
        obj[prop].forEach(element => {
          test_datas += parseInt(element.date)
        });
      }


    }
    var gun = (test_datas / (60 * 1000))
    var saat = (test_datas / (60 * 60 * 1000))
    var dakika = ((test_datas / (60 * 1000)) % 60)
    var saniye = ((test_datas / (1000)) % 60)
    //parseInt(saat.toString()),parseInt(dakika.toString()),parseInt(saniye.toString()))
    return_datas = gun+"gün"+parseInt(saat.toString()) + " Saat" + " " + parseInt(dakika.toString()) + "dakika"






    return return_datas;
  }
}
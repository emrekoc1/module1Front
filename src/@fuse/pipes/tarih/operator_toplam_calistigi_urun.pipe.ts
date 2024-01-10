import { PipeTransform, Pipe } from "@angular/core";
@Pipe({ name: 'calistigi_urun_toplam' })
export class calisma_toplam_urun implements PipeTransform {
  transform(value: any, start: any, finish: any): any {

    var now_date = new Date(start);
    var now_year = now_date.getFullYear();
    const gelen_start_date = parseInt(new Date(start).getTime().toString());
    const gelen_finish_date = parseInt(new Date(finish).getTime().toString());
    var working_time;
    for (var key in value[now_year]) {
      if (!value[now_year].hasOwnProperty(key)) continue;
      var calisma_saaati = 0;
      var obj = value[now_year][key];
      var calisma_gun = [];
      for (var prop in obj) {

        obj[prop].forEach(element => {
          if (gelen_start_date < parseInt(element.date)) {
            if (parseInt(element.date) < gelen_finish_date) {
              calisma_gun.push(element);

            }
          }


        });
      }
      let groups = calisma_gun.reduce((prev, next) => {
        prev[next.product_detail['code']] = prev[next.product_detail['code']] || [];
        prev[next.product_detail['code']].push(next);
        return prev;
      }, {});
      var myArray = Object.keys(groups).map(function (key) {
        return {
          code: groups[key][0].product_detail['code'],
          val: groups[key]
        };
      });
    }

    return myArray
  }
}
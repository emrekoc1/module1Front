import { PipeTransform, Pipe } from "@angular/core";

import getData from "./dateFunction";
@Pipe({ name: 'Operator_performance' })
export class Operator_performance implements PipeTransform {
    transform(value: any, startDate: any, finishDate: any): any {



        const gelen_start_date = parseInt(new Date(startDate).getTime().toString());
        const gelen_finish_date = parseInt(new Date(finishDate).getTime().toString());
        var now_date = new Date(gelen_start_date);
        var now_year = now_date.getFullYear();
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
            for (var i = 0; i < myArray.length; i++) {
                var xx = parseInt(myArray[i].val[myArray[i].val.length - 1].date) - parseInt(myArray[i].val[0].date);

                calisma_saaati += xx
            }
            working_time = calisma_saaati;
        }
        var uretilmis_toplam = 0;
        for (var key in value[now_year]) {

            if (!value[now_year].hasOwnProperty(key)) continue;

            var obj = value[now_year][key];
            for (var prop in obj) {
                obj[prop].forEach(element => {

                    if (gelen_start_date < parseInt(element.date)) {
                        if (parseInt(element.date) < gelen_finish_date) {
                            var deger;
                            if (element.product_detail.time) {
                                deger = parseInt(element.product_detail.time) * parseInt(element.produced);

                            } else {
                                deger = 0;
                            }
                            uretilmis_toplam += deger;
                        }
                    }
                });
            }
        }
        var hesap;
        if (uretilmis_toplam > working_time) {
            hesap = (uretilmis_toplam / working_time * 100).toFixed(2)+"%";
        } else {
            hesap = (working_time / uretilmis_toplam * 100).toFixed(2)+"%";
        }
        if (uretilmis_toplam == 0) {
            hesap = "hesaplanmadı"
        }

        return hesap

    }
}
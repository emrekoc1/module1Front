import { PipeTransform, Pipe } from "@angular/core";

import getData from "./dateFunction";
@Pipe({ name: 'toplam_calisma_operator' })
export class Operator_toplam_calisma implements PipeTransform {
    transform(value: any, id: any, startDate: any, finishDate: any): any {

  
        const gelen_start_date = parseInt(new Date(startDate).getTime().toString());
        const gelen_finish_date = parseInt(new Date(finishDate).getTime().toString());
   
        var now_date = new Date(gelen_start_date);
        var now_year = now_date.getFullYear();


        var test_datas = 0;
        var toplam_uretim = 0;
        var produced = 0;
        var rework = 0;
        var wastage = 0;
        for (var key in value[now_year]) {

            if (!value[now_year].hasOwnProperty(key)) continue;

            var obj = value[now_year][key];
            for (var prop in obj) {
                obj[prop].forEach(element => {
                    var a = parseInt(element.produced) + parseInt(element.rework) + parseInt(element.wastage);
                    if (gelen_start_date < parseInt(element.date)) {
                        if (parseInt(element.date) < gelen_finish_date) {
                            toplam_uretim += a;
                            produced+= parseInt(element.produced);
                            rework+= parseInt(element.rework);
                            wastage+= parseInt(element.wastage);
                        }
                    }

                });
            }


        }
        var return_data = 0;
        if(id=="sum"){
            return_data = toplam_uretim;
        }else if(id=="produced"){
            return_data = produced;
        }else if(id=="rework"){
            return_data = rework;
        }else if(id=="wastage"){
            return_data = wastage;
        }

        //id, return_value)
        return return_data

    }
}
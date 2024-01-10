import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'operator_performance' })
export class Operator_performans_hesapla implements PipeTransform {
    transform(value: any, id: any): any {
        //"toplam_calisma_operator ", value)
        var now_date = new Date();
        var now_year = now_date.getFullYear();
        var now_month = now_date.getMonth() + 1;
        var now_day = now_date.getDate();
        var produced = 0;
        var rework = 0;
        var wastage = 0;
        var return_value;

        if (value[now_year][now_month][now_day]) {
            var array = value[now_year][now_month][now_day];
            var toplam_uretim_suresi;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                produced += element.produced;
                rework += element.rework;
                wastage += element.wastage;
                toplam_uretim_suresi = element.date

            }
        }

        if (id == "sum") {
            return_value = produced + rework + wastage
        }

        else if (id == "produced") {
            return_value = produced
        }

        else if (id == "rework") {
            return_value = rework
        }

        else if (id == "wastage") {
            return_value = wastage
        }

        else if (id == "performance") {
            return_value = Math.random() * 100 + "%"
        }
        
        return return_value
    }
}
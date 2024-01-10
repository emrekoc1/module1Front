import { PipeTransform, Pipe } from "@angular/core";

import getData from "./dateFunction";
@Pipe({ name: 'makina_work_time' })
export class makina_work_time implements PipeTransform {
    transform(value: any, startDate: any, finishDate: any): any {


        var working_list = [];

        for (let index = 0; index < value.length; index++) {
            const box = value[index];
            for (let y = 0; y < box.logs.length; y++) {
                const log = box.logs[y];
                working_list.push(log.time)
            }
        }
        if (working_list.length != 0) {
            var first = Math.min.apply(Math, working_list);
            var last = (Math.max.apply(Math, working_list));
            var compare = last - first
            var saat = (compare / (60 * 60 * 1000))
            var dakika = ((compare / (60 * 1000)) % 60)

            return parseInt(saat.toString()) + " Saat" + " " + parseInt(dakika.toString()) + "dakika";

        } else {
            var first = Math.min.apply(Math, working_list);
            var last = (Math.max.apply(Math, working_list));
            var compare = last - first;
            var saat = (compare / (60 * 60 * 1000));
            var dakika = ((compare / (60 * 1000)) % 60);

            return "hesaplanmamış";
        }


    }
}
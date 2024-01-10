import { PipeTransform, Pipe } from "@angular/core";

import getData from "./dateFunction";
@Pipe({ name: 'Makina_performance' })
export class Makina_performance implements PipeTransform {
    transform(value: any, startDate: any, finishDate: any, factory_stok: any): any {

        var result_performance;

        var working_list = [];

        for (let index = 0; index < value.length; index++) {
            const box = value[index];
            for (let y = 0; y < box.logs.length; y++) {
                const log = box.logs[y];
                if (startDate < parseInt(log.time)) {
                    if (parseInt(log.time) < finishDate) {
                        working_list.push(log.time)

                    }
                }
               
            }
        }
        var compare;
        if (working_list.length == 0) {
            compare = 0
        } else {
            var first = Math.min.apply(Math, working_list);
            var last = Math.max.apply(Math, working_list);
            compare = last - first;
        }



        var produced_list = [];
        for (let index = 0; index < value.length; index++) {
            const box = value[index];
            var product_quantity = 0;
            var product_code;
            var product_id;
            for (let y = 0; y < box.logs.length; y++) {
                const log = box.logs[y];
                product_quantity += parseInt(log.value)
                product_code = log.productDetails.code;
                product_id = log.productDetails._id;
            }

            var global_product_time;
            for (let t = 0; t < factory_stok.length; t++) {
                if (factory_stok[t]._id === product_id) {
                    global_product_time = factory_stok[t].time;
                }
            }
            const data = {
                "product_id": product_id,
                "product_code": product_code,
                "quantity": product_quantity,
                "startDate": box.logs[0].time,
                "finishDate": box.logs[box.logs.length - 1].time,
                "global_product_time": global_product_time
            };
            produced_list.push(data);

            var sum_of_product = parseInt(data.global_product_time) * data.quantity;
            if (sum_of_product > compare) {
                result_performance = (sum_of_product / compare * 100).toFixed(2) + "%";
            } else {
                result_performance = (compare / sum_of_product * 100).toFixed(2) + "%";
            }
            if (compare == 0) {
                result_performance = "hesaplanmadı"
            }

        }
        return result_performance

    }
}
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'toplam_performance' })
export class toplamPerformans implements PipeTransform {
    transform(value: any, produced: any, en_iyi_produced: any, selected_machine: any): any {
        console.log("test")
        console.log(produced, en_iyi_produced, selected_machine)
        if (selected_machine != 0) {
            if (selected_machine == produced) {
                var deger = en_iyi_produced / produced * 100;
                var html =
                    `
            <a style="float:left;">
                pivot
            </a>
            <a style="float:right">
                <img src='../assets/img/check.png'>
            </a>
      
          `
            } else {
                if (selected_machine > produced) {
                    var deger = en_iyi_produced / produced * 100 - 100;
                    var html =
                        `
                <a style="float:left;">
                    %-`+ deger.toFixed(2) + `
                </a>
                <a style="float:right">
                    <img src='../assets/img/down-arrow.png'>
                </a>
          
              `
                } else {
                    var deger = produced / selected_machine * 100 - 100;
                    var html =
                        `
                <a style="float:left;">
                    %+`+ deger.toFixed(2) + `
                </a>
                <a style="float:right">
                    <img src='../assets/img/long-arrow-pointing-up.png'>
                </a>
          
              `
                }
            }
        } else {
            if (en_iyi_produced == produced) {
                var deger = en_iyi_produced / produced * 100;
                var html =
                    `
            <a style="float:left;">
                pivot
            </a>
            <a style="float:right">
                <img src='../assets/img/check.png'>
            </a>
      
          `
            } else {
                if (en_iyi_produced > produced) {
                    var deger = en_iyi_produced / produced * 100 - 100;
                    var html =
                        `
                <a style="float:left;">
                    %-`+ deger.toFixed(2) + `
                </a>
                <a style="float:right">
                    <img src='../assets/img/down-arrow.png'>
                </a>
          
              `
                } else {
                    var deger = produced / en_iyi_produced * 100 - 100;
                    var html =
                        `
                <a style="float:left;">
                    %+`+ deger.toFixed(2) + `
                </a>
                <a style="float:right">
                    <img src='../assets/img/long-arrow-pointing-up.png'>
                </a>
          
              `
                }
            }
        }



        console.log(html);
        return html
    }
}
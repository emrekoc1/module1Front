import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'operationSetting' })
export class operationSetting implements PipeTransform {
    transform(value: any, bomList: any, current_operation: any): any {
        //"operations Settings Pipe");
        //bomList);
        //current_operation);
        var html ;
        var liste = [];
        for (let index = 0; index < bomList.length; index++) {
            const element = bomList[index];
            liste.push(element.operation);
            if(element.operation.id === current_operation){
                break;
            }
        }
        //liste);
    
        return liste
    }
}
import { Component, OnInit } from '@angular/core';
import { getThisMonthDateISO, getTodayDateISO } from 'app/utils/TimeUtils';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { includes } from 'lodash';
import { MontageReportService, ReportUrls } from '../montage-report.service';

@Component({
  selector: 'app-durbunDetail',
  templateUrl: './durbunDetail.html'
})
export class DurbunDetail implements OnInit {
  public selectedIndex: any;
  start_date: string;
  finish_date: string;

  dataSource: DataSource;
  pieDataSource: DataSource;
  chartDataSource: DataSource;
  dataStore: CustomStore;

  selected: any = "";
  handleKeyup(event: any): void{ 
    this.selected = event.target.value;
    
}
searchData(){
  this.tabloVardiyalar();
}
  constructor(public montageReportService: MontageReportService) {
    this.start_date = getThisMonthDateISO();
    this.finish_date = getTodayDateISO();
    this.tabloVardiyalar();
  }
  is_data_load:any = false;
  dataGet:any = []
  operasyonList:any = [];
  operasyonList1:any = []
inputArray : any =[]
  async tabloVardiyalar() {

    this.is_data_load = false;
    await this.montageReportService.get536data(this.selected).then(result => {
      this.dataGet = result;
      console.log("dürbün ", result)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })
    this.inputArray=[]
    // console.log("productionorders",this.dataGet[0].productionOrder);
    // console.log("durbunArray",this.dataGet[0].productionOrder.durbunArray);
    let parts
    for (let index = 0; index < this.dataGet[0].productionOrder.durbunArray.length; index++) {
        if(this.dataGet[0].productionOrder.durbunArray[index].markaNumber == this.selected){
          parts = this.dataGet[0].productionOrder.durbunArray[index].parts
                  index = this.dataGet[0].productionOrder.durbunArray.length;
        }
      
    }
    let operasyonDizi = []
    for (let index = 0; index < parts.length; index++) {
      for (let a = 0; a < parts[index].routes.length; a++) {
        for (let b = 0; b < parts[index].routes[a].Operations.length; b++) {
          operasyonDizi[operasyonDizi.length] = parts[index].routes[a].Operations[b];
          
        }
        
      }
      
      
    }
    let operasyonDizi1 = []
    for (let index = 0; index < parts.length; index++) {
      for (let a = 0; a < parts[index].routes.length; a++) {
        for (let b = 0; b < parts[index].routes[a].Operations.length; b++) {
           if(parts[index].routes[a].Operations[b].operationName.type == "1"){
           operasyonDizi1[operasyonDizi1.length] = parts[index].routes[a].Operations[b];
           }
         }
       }
      }
 
   this.operasyonList = operasyonDizi
   this.operasyonList1 = operasyonDizi1
  let kontrol = []
  for (let index = 0; index < this.operasyonList.length; index++) {
    let son =[]
    let deger =100
    let ilkarray = this.operasyonList[index].inputs
     for (let k = 0; k < ilkarray.length; k++) {
       for (let j = 0; j < ilkarray[k].p_input_array.length; j++) {
           if(ilkarray[k].p_input_array[j].serial_number  != ""){
            deger = index
           son[son.length]={urunName:ilkarray[k].p_name.name,serinumber:ilkarray[k].p_input_array[j].serial_number,operator:ilkarray[k].p_input_array[j].operatorName,tarih:ilkarray[k].p_input_array[j].createdDate}
           }
         }
      }
     if(deger != 100){
    kontrol[kontrol.length]={operasyon:this.operasyonList[deger].operationName.name,data:son}

     }
  }
this.inputArray = kontrol
  }
  ngOnInit() {
  }

  startdate(event): void {
    this.start_date = event;
  }

  finishdate(event): void {
    this.finish_date = event;
  
  }


}

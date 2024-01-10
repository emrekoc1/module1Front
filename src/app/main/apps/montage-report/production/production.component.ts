import { Component, OnInit } from '@angular/core';
import { getThisMonthDateISO, getTodayDateISO } from 'app/utils/TimeUtils';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { MontageReportService, ReportUrls } from '../montage-report.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
@Component({
  selector: 'app-production',
  templateUrl: './production.html'
})
export class Production implements OnInit {
  countries: any
  start_date: string;
  finish_date: string;

  subPart: boolean;

  dataSource: DataSource;
  dataVardiya: any
  constructor(public montageReportService: MontageReportService) {
    this.countries = [{
      "ID": 1,
      "Country": "Brazil",
      "Area": 8515767,
      "Population_Urban": 0.85,
      "Population_Rural": 0.15,
      "Population_Total": 205809000,
      "GDP_Agriculture": 0.054,
      "GDP_Industry": 0.274,
      "GDP_Services": 0.672,
      "GDP_Total": 2353025
    }, {
      "ID": 2,
      "Country": "China",
      "Area": 9388211,
      "Population_Urban": 0.54,
      "Population_Rural": 0.46,
      "Population_Total": 1375530000,
      "GDP_Agriculture": 0.091,
      "GDP_Industry": 0.426,
      "GDP_Services": 0.483,
      "GDP_Total": 10380380
    }, {
      "ID": 3,
      "Country": "France",
      "Area": 675417,
      "Population_Urban": 0.79,
      "Population_Rural": 0.21,
      "Population_Total": 64529000,
      "GDP_Agriculture": 0.019,
      "GDP_Industry": 0.183,
      "GDP_Services": 0.798,
      "GDP_Total": 2846889
    }, {
      "ID": 4,
      "Country": "Germany",
      "Area": 357021,
      "Population_Urban": 0.75,
      "Population_Rural": 0.25,
      "Population_Total": 81459000,
      "GDP_Agriculture": 0.008,
      "GDP_Industry": 0.281,
      "GDP_Services": 0.711,
      "GDP_Total": 3859547
    }, {
      "ID": 5,
      "Country": "India",
      "Area": 3287590,
      "Population_Urban": 0.32,
      "Population_Rural": 0.68,
      "Population_Total": 1286260000,
      "GDP_Agriculture": 0.174,
      "GDP_Industry": 0.258,
      "GDP_Services": 0.569,
      "GDP_Total": 2047811
    }, {
      "ID": 6,
      "Country": "Italy",
      "Area": 301230,
      "Population_Urban": 0.69,
      "Population_Rural": 0.31,
      "Population_Total": 60676361,
      "GDP_Agriculture": 0.02,
      "GDP_Industry": 0.242,
      "GDP_Services": 0.738,
      "GDP_Total": 2147952
    }, {
      "ID": 7,
      "Country": "Japan",
      "Area": 377835,
      "Population_Urban": 0.93,
      "Population_Rural": 0.07,
      "Population_Total": 126920000,
      "GDP_Agriculture": 0.012,
      "GDP_Industry": 0.275,
      "GDP_Services": 0.714,
      "GDP_Total": 4616335
    }, {
      "ID": 8,
      "Country": "Russia",
      "Area": 17098242,
      "Population_Urban": 0.74,
      "Population_Rural": 0.26,
      "Population_Total": 146544710,
      "GDP_Agriculture": 0.039,
      "GDP_Industry": 0.36,
      "GDP_Services": 0.601,
      "GDP_Total": 1857461
    }, {
      "ID": 9,
      "Country": "United States",
      "Area": 9147420,
      "Population_Urban": 0.81,
      "Population_Rural": 0.19,
      "Population_Total": 323097000,
      "GDP_Agriculture": 0.0112,
      "GDP_Industry": 0.191,
      "GDP_Services": 0.797,
      "GDP_Total": 17418925
    }, {
      "ID": 10,
      "Country": "United Kingdom",
      "Area": 244820,
      "Population_Urban": 0.82,
      "Population_Rural": 0.18,
      "Population_Total": 65097000,
      "GDP_Agriculture": 0.007,
      "GDP_Industry": 0.21,
      "GDP_Services": 0.783,
      "GDP_Total": 2945146
    }];
    this.start_date = getThisMonthDateISO();
    this.finish_date = getTodayDateISO();
    this.subPart = false;
    this.tabloVardiyalar();
 
  }

  ngOnInit() {

  }
  is_data_load: boolean = false
  dataGet: any
  vardiya1: any
  vardiya2: any
  vardiya3: any
  datacount: any
  async tabloVardiyalar() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_532, this.start_date, this.finish_date).then(result => {


      this.dataGet = result;
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);





    }).catch(err => {
      console.log("err,", err)
    })
    this.vardiya1 = []
    this.vardiya2 = []
    this.vardiya3 = []
    if (this.dataGet.length > 0) {
      this.vardiya1 = this.dataGet[0]
      if (this.dataGet.length > 1) {
        this.vardiya2 = this.dataGet[1]
      }
      if (this.dataGet.length > 2) {
        this.vardiya3 = this.dataGet[2]
      }
    }
    this.datacount = []
    if(this.subPart==true){
    if (this.vardiya1.data.length > 0) {

      for (let index = 0; index < this.vardiya1.data.length; index++) {
        if (this.vardiya1.data[index].status == "Status-0") {
          let vardiya3Var = false
          console.log("burada")
          let vardiya2Var = false
          if (this.vardiya2.data.length > 0) {
            console.log("burada2")

            for (let index1 = 0; index1 < this.vardiya2.data.length; index1++) {
             

              if (this.vardiya2.data[index1].status == "Status-0") {
              
if(this.vardiya3.length){
                if (this.vardiya3.data.length > 0) {
                  console.log("burada5")

                  for (let index2 = 0; index2 < this.vardiya3.data.length; index2++) {
                    if (this.vardiya2.data[index1].status == "Status-0") {
              
                       
                      if (this.vardiya1.data[index].product[0] == this.vardiya3.data[index2].product[0]) {
                        this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework), v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework),v3product: this.vardiya3.data[index2].Produced, v3fire: this.vardiya3.data[index2].Fire, v3rework: this.vardiya3.data[index2].Rework, v3isd: (this.vardiya3.data[index2].Produced - this.vardiya3.data[index2].Fire - this.vardiya3.data[index2].Rework) }
                        vardiya3Var = true
                      }
                    }
                  }
                  if(vardiya3Var==false){
                    if (this.vardiya1.data[index].product[0] == this.vardiya2.data[index1].product[0]) {
                    this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework), v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework) }
                    vardiya2Var =true;
                  }
                  }

                } 
              }

                console.log("burada7")
                if(vardiya3Var == false){
                if (this.vardiya1.data[index].product[0] == this.vardiya2.data[index1].product[0]) {
                  this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework), v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework) }
                  vardiya2Var =true;
                }
              }

                //   if (this.vardiya1.data[index].product[0] == this.vardiya2.data[index1].product[0])
                //{
                //   this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework),v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework) }

                // }
              }
            }
          } else {
            this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework) }

          }
          if(vardiya3Var == false && vardiya2Var==false){
            this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework) }
            console.log( this.vardiya1.data[index].product[0])
          }



        }


      }


    }}
    if(this.subPart==false){
      if (this.vardiya1.data.length > 0) {
  
        for (let index = 0; index < this.vardiya1.data.length; index++) {
          if (this.vardiya1.data[index].status == "Status-1") {
            let vardiya3Var = false
            console.log("burada")
            let vardiya2Var = false
            if (this.vardiya2.data.length > 0) {
              console.log("burada2")
  
              for (let index1 = 0; index1 < this.vardiya2.data.length; index1++) {
               
  
                if (this.vardiya2.data[index1].status == "Status-1") {
                
  if(this.vardiya3.length){
                  if (this.vardiya3.data.length > 0) {
                    console.log("burada5")
  
                    for (let index2 = 0; index2 < this.vardiya3.data.length; index2++) {
                      if (this.vardiya2.data[index1].status == "Status-1") {
                
                         
                        if (this.vardiya1.data[index].product[0] == this.vardiya3.data[index2].product[0]) {
                          this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework), v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework),v3product: this.vardiya3.data[index2].Produced, v3fire: this.vardiya3.data[index2].Fire, v3rework: this.vardiya3.data[index2].Rework, v3isd: (this.vardiya3.data[index2].Produced - this.vardiya3.data[index2].Fire - this.vardiya3.data[index2].Rework) }
                          vardiya3Var = true
                        }
                      }
                    }
                    if(vardiya3Var==false){
                      if (this.vardiya1.data[index].product[0] == this.vardiya2.data[index1].product[0]) {
                      this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework), v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework) }
                      vardiya2Var =true;
                    }
                    }
  
                  } 
                }
  
                  console.log("burada7")
                  if(vardiya3Var == false){
                  if (this.vardiya1.data[index].product[0] == this.vardiya2.data[index1].product[0]) {
                    this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework), v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework) }
                    vardiya2Var =true;
                  }
                }
  
                  //   if (this.vardiya1.data[index].product[0] == this.vardiya2.data[index1].product[0])
                  //{
                  //   this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework),v2product: this.vardiya2.data[index1].Produced, v2fire: this.vardiya2.data[index1].Fire, v2rework: this.vardiya2.data[index1].Rework, v2isd: (this.vardiya2.data[index1].Produced - this.vardiya2.data[index1].Fire - this.vardiya2.data[index1].Rework) }
  
                  // }
                }
              }
            } else {
              this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework) }
  
            }
            if(vardiya3Var == false && vardiya2Var==false){
              this.datacount[this.datacount.length] = { product: this.vardiya1.data[index].product[0], v1product: this.vardiya1.data[index].Produced, v1fire: this.vardiya1.data[index].Fire, v1rework: this.vardiya1.data[index].Rework, v1isd: (this.vardiya1.data[index].Produced - this.vardiya1.data[index].Fire - this.vardiya1.data[index].Rework) }
              console.log( this.vardiya1.data[index].product[0])
            }
  
  
  
          }
  
  
        }
  
  
      }}
  }
  startdate(event): void {
    this.start_date = event;
  }

  finishdate(event): void {
    this.finish_date = event;

    this.tabloVardiyalar();
  }

  checkboxChanged(event) {

    this.subPart = event;
    this.tabloVardiyalar()
 
  }

}

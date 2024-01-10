import { Component, OnInit } from '@angular/core';
import { resultMemoize } from '@ngrx/store';
import { getThisMonthDateISO, getTodayDateISO } from 'app/utils/TimeUtils';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { MontageReportService, ReportUrls } from '../montage-report.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projectStatus',
  templateUrl: './projectStatus.html'
})
export class ProjectStatus implements OnInit {

  start_date: string;
  finish_date: string;

  dataSource: DataSource;
  pieDataSource: DataSource;
  chartDataSource: DataSource;
  dataStore: CustomStore;

  selected: any = "SEÇİM YAPINIZ";
  is_data_load: boolean = false
  dataGet: any
  vardiya1: any
  vardiya2: any
  vardiya3: any
  datacount: any
  constructor(public montageReportService: MontageReportService) {
    this.start_date = getThisMonthDateISO();
    this.finish_date = getTodayDateISO();
    this.tabloVardiyalar();
    this.bachOrders();



  }
  dataVar: any = []
  dataGeliyor: any = []
  filteredProducts: any;
  datavardiya: any = []
  async tabloVardiyalar() {
    this.dataVar = []
    this.is_data_load = false;
    await this.montageReportService.get960data(this.start_date, this.finish_date, this.selected).then(result => {

      this.dataGet = result;
      setTimeout(() => {
        this.is_data_load = true;
      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })
    let v1 = [], v2 = [], v3 = []
    if (this.dataGet.length > 0) {
      v1 = this.dataGet[0].data
    }
    if (this.dataGet.length > 1) {
      v2 = this.dataGet[1].data
    }
    if (this.dataGet.length > 2) {
      v3 = this.dataGet[2].data
    }

    for (let index = 0; index < v1.length; index++) {
      this.dataVar[index] = { operasyon: v1[index].operation, v1count: v1[index].count, v2count: 0, v3count: 0, toplam: 0 + 0 + v1[index].count }
    }
    let kontrol = false
    for (let k = 0; k < v2.length; k++) {
      kontrol = false
      for (let j = 0; j < this.dataVar.length; j++) {
        if (this.dataVar[j].operasyon == v2[k].operation) {
          this.dataVar[j] = { operasyon: this.dataVar[j].operasyon, v1count: this.dataVar[j].v1count, v2count: v2[k].count, v3count: 0, toplam: 0 + this.dataVar[j].v1count + v2[k].count }
          kontrol = true
        }
      }
      if (!kontrol) {
        this.dataVar[this.dataVar.length] = { operasyon: v2[k].operation, v1count: 0, v2count: v2[k].count, v3count: 0, toplam: 0 + 0 + v2[k].count }

      }
    }
    for (let k = 0; k < v3.length; k++) {
      kontrol = false
      for (let j = 0; j < this.dataVar.length; j++) {
        if (this.dataVar[j].operasyon == v3[k].operation) {
          this.dataVar[j] = { operasyon: this.dataVar[j].operasyon, v1count: this.dataVar[j].v1count, v2count: this.dataVar[j].v2count, v3count: v3[k].count, toplam: this.dataVar[j].v2count + this.dataVar[j].v1count + v3[k].count }
          kontrol = true
        }
      }
      if (!kontrol) {
        this.dataVar[this.dataVar.length] = { operasyon: v3[k].operation, v1count: 0, v2count: 0, v3count: v3[k].count, toplam: 0 + 0 + v3[k].count }

      }
    }

  }
  dataOrder: any
  async bachOrders() {
    await this.montageReportService.get_orders().then(result => {
      this.dataOrder = result;
      this.filteredProducts = this.dataOrder.siparisNo;
      setTimeout(() => {
      }, 100);

    }).catch(err => {
      console.log("err,", err)
    })


  }
  ngOnInit() {
    this.tabloVardiyalar();
    // this.bachOrders();

  }
  getFilteredProducts(event) {
    this.filteredProducts = event;
  }
  startdate(event): void {
    this.start_date = event;
  }

  finishdate(event): void {
    this.finish_date = event;
    this.tabloVardiyalar();
  }
  selectItemsFonc(event: any) {
    this.selected = event;
    this.tabloVardiyalar();

  }










}

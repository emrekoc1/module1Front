import { Component, OnInit } from '@angular/core';
import { getThisMonthDateISO, getTodayDateISO } from 'app/utils/TimeUtils';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { MontageReportService, ReportUrls } from '../montage-report.service';

@Component({
  selector: 'app-firereport',
  templateUrl: './firereport.html'
})
export class FireReport implements OnInit {

  start_date: string;
  finish_date: string;

  dataSource: DataSource;
  pieDataSource: DataSource;
  chartDataSource: DataSource;
  dataStore: CustomStore;

  selected: boolean = false;

  constructor(public montageReportService: MontageReportService) {
    this.start_date = getThisMonthDateISO();
    this.finish_date = getTodayDateISO();
    this.tabloVardiyalar();
    this.tabloVardiyalarb();
    this.tabloVardiyalarc();
    this.tabloVardiyalard();
    this.tabloVardiyalarfire();
    this.tabloVardiyalarrework();
    this.tabloVardiyalara_b_2();
    this.tabloVardiyalarc_2();

    }
  is_data_load:boolean = false;
  dataGet:any = []
  async tabloVardiyalar() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535a,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGeta,",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  async tabloVardiyalarb() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535b,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGetb",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  async tabloVardiyalarc() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535c,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGetc",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }

  async tabloVardiyalara_b_2() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535a_b_2,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGeta_b_2",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  async tabloVardiyalarc_2() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535c_2,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGetc_2",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  async tabloVardiyalarrework() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535rework,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGetarework",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  async tabloVardiyalard() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535d,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGetd",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  async tabloVardiyalarfire() {

    this.is_data_load = false;
    await this.montageReportService.get_reports(ReportUrls.get_535fire,this.start_date, this.finish_date).then(result => {
      this.dataGet = result;
      console.log("dataGetfire",this.dataGet)
      setTimeout(() => {
        this.is_data_load = true;

      }, 100);
    }).catch(err => {
      console.log("err,", err)
    })

   
  }
  ngOnInit() {
    
  }

  startdate(event): void {
    this.start_date = event;
  }

  finishdate(event): void {
    this.finish_date = event;

    this.tabloVardiyalar();
    this.tabloVardiyalarb();
    this.tabloVardiyalarc();
    this.tabloVardiyalard();
    this.tabloVardiyalarfire();
    this.tabloVardiyalarrework();
    this.tabloVardiyalara_b_2();
    this.tabloVardiyalarc_2();
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target,
      item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      customizeCell: function (options) {
        const excelCell = options;
        excelCell.excelCell.font = { name: 'Arial', size: 12 };
        excelCell.excelCell.alignment = { horizontal: 'center' };
      }
    }).then(function () {
      workbook.xlsx.writeBuffer()
        .then(function (buffer: BlobPart) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Rapor.xlsx');
        });
    });
    e.cancel = true;
  }

  customizeTooltip = (info: any) => {
    return {
      text: info.seriesName + ' Adet: ' + info.valueText
    };
  }

  show(data) {
    if (this.selected) {
      this.selected = false;
     
    } else {
      this.selected = true;
    
    }


  }

}

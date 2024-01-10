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
  selector: 'app-repair',
  templateUrl: './repair.html'
})
export class Repair implements OnInit {

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
    this.dataStore = new CustomStore({
      load: async function (loadOptions: LoadOptions) {
        return await montageReportService.get_reports(
          loadOptions.searchValue[2] == true ? ReportUrls.get_533 : ReportUrls.get_534,
          loadOptions.searchValue[0], loadOptions.searchValue[1])
          .then(res => {
            console.log(res)
            const dataGridArr = [];
            let sum = 0;
            if (loadOptions.searchValue[2]) {
              res.forEach(element => {
                element.data.forEach(e2 => {
                  sum = sum + e2.count;
                })
              });
              res.forEach(element => {
                element.data.forEach(e2 => {
                  dataGridArr.push({
                    ...e2,
                    vardiya: element.vardiya,
                    rate: e2.count / sum
                  });
                });
              });
            } else {
              res.forEach(element => {
                res.forEach(element => {
                  element.data.forEach(e2 => {
                    if (e2.sebep.categoryName == loadOptions.searchValue[3]) {
                      sum = sum + e2.count;
                    }
                  })
                });
                element.data.forEach(e2 => {
                  if (e2.sebep.categoryName == loadOptions.searchValue[3]) {
                    dataGridArr.push({
                      ...e2,
                      sebep: e2.sebep.reasonName,
                      vardiya: element.vardiya,
                      rate: e2.count / sum
                    });
                  }
                });
              });
            }
            return { data: dataGridArr };
          })
      }
    });
    this.dataSource = new DataSource({
      store: this.dataStore,
      searchValue: [this.start_date, this.finish_date, true]
    });
    this.pieDataSource = new DataSource({
      store: this.dataStore,
      postProcess: function (data) {
        const pieChartArr = [];
        let sum = data[0].count / data[0].rate;
        data.forEach(element => {
          const index = pieChartArr.findIndex(res => { res.sebep == element.sebep })
          if (index != -1) {
            pieChartArr[index].count = pieChartArr[index].count + element.count;
          } else {
            pieChartArr.push({ sebep: element.sebep, count: element.count });
          }
        })
        for (let i = 0; i < pieChartArr.length; i++) {
          pieChartArr[i].count = pieChartArr[i].count / sum;
        }
        return pieChartArr;
      },
      searchValue: [this.start_date, this.finish_date, true]
    });
    this.chartDataSource = new DataSource({
      store: this.dataStore,
      postProcess: function (data) {
        const chartArr = [];
        data.forEach(element => {
          const index = chartArr.findIndex(res => { res.sebep == element.sebep })
          chartArr[index != -1 ? index : chartArr.length] = {}
          if (index != -1) {
            switch (element.vardiya) {
              case "v1":
                chartArr[index].v1 = element.count;
                break;
              case "v2":
                chartArr[index].v2 = element.count;
                break;
              case "v3":
                chartArr[index].v3 = element.count;
                break;
            }
          } else {
            switch (element.vardiya) {
              case "v1":
                chartArr.push({ sebep: element.sebep, v1: element.count, v2: 0, v3: 0 });
                break;
              case "v2":
                chartArr.push({ sebep: element.sebep, v2: element.count, v1: 0, v3: 0 });
                break;
              case "v3":
                chartArr.push({ sebep: element.sebep, v3: element.count, v2: 0, v1: 0 });
                break;
            }
          }
        });
        return chartArr;
      },
      searchValue: [this.start_date, this.finish_date, true]
    })
  }

  ngOnInit() {
  }

  startdate(event): void {
    this.start_date = event;
  }

  finishdate(event): void {
    this.finish_date = event;
    this.dataSource.searchValue([this.start_date, this.finish_date]);
    this.pieDataSource.searchValue([this.start_date, this.finish_date]);
    this.chartDataSource.searchValue([this.start_date, this.finish_date]);
    this.dataSource.reload();
    this.pieDataSource.reload();
    this.chartDataSource.reload();
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
      this.dataSource.searchValue([this.start_date, this.finish_date]);
      this.pieDataSource.searchValue([this.start_date, this.finish_date]);
      this.chartDataSource.searchValue([this.start_date, this.finish_date]);
    } else {
      this.selected = true;
      this.dataSource.searchValue([this.start_date, this.finish_date, false, data.sebep]);
      this.pieDataSource.searchValue([this.start_date, this.finish_date, false, data.sebep]);
      this.chartDataSource.searchValue([this.start_date, this.finish_date, false, data.sebep]);
    }
    this.dataSource.reload();
    this.pieDataSource.reload();
    this.chartDataSource.reload();

  }

}

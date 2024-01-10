import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { Router } from '@angular/router';
import { MontageReportService, ReportGetUrls } from '../montage-report.service';

@Component({
  selector: 'app-nonconformances',
  templateUrl: './nonconformances.html',
  animations: fuseAnimations
})
export class NonConformances implements OnInit {

  dataSource: DataSource;

  constructor(public router: Router,
    public montajReports_service: MontageReportService) {

    this.dataSource = new DataSource({
      key: '_id',
      load: async function (options: LoadOptions) {
        return await montajReports_service.nonconformance_get_request(ReportGetUrls.getAllNonconformances)
          .then(result => {
            console.log(result)
            return {
              data: result
            };
          }).catch(err => {
            alert(err);
          });
      }
    });

  }

  ngOnInit() {
  }

  routeTamir(id: string): void {
    this.router.navigate(['/apps/montage-report/nonconformances/nonconformance_report', { id: id }])
  }

  routeFire(id: string): void {
    this.router.navigate(['/apps/montage-report/nonconformances/nonconformance_form', { id: id }])
  }

}
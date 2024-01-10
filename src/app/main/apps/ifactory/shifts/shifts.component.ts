import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { IFactoryService, PostShiftUrls } from '../ifactory.service';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { Router } from '@angular/router';
import { getTimeFromMinutes } from 'app/utils/TimeUtils';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ShiftsComponent implements OnInit {

  dataSource: DataSource;
  getTimeFromMinutes = getTimeFromMinutes;

  constructor(public router: Router,
    public ifactory_service: IFactoryService) {

    this.dataSource = new DataSource({
      key: '_id',
      load: async function (options: LoadOptions) {
        return await ifactory_service.shift_post_request({ factory_id: 'all' }, PostShiftUrls.getAllByFactory).then(result => {
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

  routeLink(s_id: string): void {
    this.router.navigate(['/apps/ifactory/shifts/single-shift', { s_id: s_id }])
  }

  deleteShift(s_id: string): void {
    if (!confirm("Shift'i silmek istediğinize emin misiniz?")) {
      return;
    }

    this.ifactory_service.shift_post_request({ s_id: s_id }, PostShiftUrls.deleteByShiftId).then(res => {
      this.dataSource.reload();
    }).catch(err => {

    })
  }

}

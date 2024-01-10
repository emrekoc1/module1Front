import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { DataService } from 'app/services/data.service';
import { getMinutesFromTime, getTimeFromMinutes } from 'app/utils/TimeUtils';
import { IFactoryService, PostShiftUrls, PutShiftUrls, } from '../../ifactory.service';
import { TimeIntervalDialogComponent } from './time-interval/time-interval-dialog.component';

@Component({
  selector: 'app-single-shift',
  templateUrl: './single-shift.component.html',
  styleUrls: ['./single-shift.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SingleShiftComponent implements OnInit {

  currentUser: any;
  sentS_id: string | null;

  today: Date = new Date();

  timeIntervalDisplayedColumns = ['id', 'name', 'starttime', 'endtime', 'buttons'];

  shiftForm: FormGroup;

  timeIntervalDataSource = new MatTableDataSource();

  constructor(public router: Router, public route: ActivatedRoute,
    public ifactoryService: IFactoryService,
    private fb: FormBuilder, public dialog: MatDialog) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.route.params.subscribe(params => {
      this.sentS_id = params['s_id'] ? params['s_id'] : null;
    });

    this.shiftForm = this.fb.group({
      shift_id: [null, Validators.required],
      is_active: true,
      description: [null, Validators.required],
      day_start_at: [null, Validators.required],
      active_date_start: [new Date(), Validators.required],
      active_date_end: [null, Validators.required],
      time_interval: this.fb.array([]),
    });

  }

  ngOnInit(): void {
    if (this.sentS_id) {
      this.ifactoryService.shift_post_request({ s_id: this.sentS_id }, PostShiftUrls.getById)
        .then(res => {
          const shift = res[0];
          const timeIntervals = [];

          if (shift.time_interval) {
            shift.time_interval.forEach(element => {
              timeIntervals.push(this.fb.group({
                _id: [element._id],
                starttime: [getTimeFromMinutes(element.starttime), Validators.required],
                endtime: [getTimeFromMinutes(element.endtime), Validators.required],
                name: [element.name, Validators.required],
              }));
            });
          }

          this.shiftForm = this.fb.group({
            shift_id: [shift.shift_id, Validators.required],
            is_active: shift.is_active,
            description: [shift.description, Validators.required],
            day_start_at: [getTimeFromMinutes(shift.day_start_at), Validators.required],
            active_date_start: [new Date(parseInt(shift.active_date_start)), Validators.required],
            active_date_end: [new Date(parseInt(shift.active_date_end)), Validators.required],
            time_interval: this.fb.array(timeIntervals),
          });

          this.refreshTimeIntervalDataSource();
        }).catch(err => {
          console.log(err);
        });

    }
  }

  get TimeInterval(): FormArray { return this.shiftForm.get('time_interval') as FormArray; }

  submitShift(): void {

    const data = {
      factory_id: 'all',
      machine_id: 'all',
      createdby: this.sentS_id ? this.currentUser._id : undefined,
      updatedby: !this.sentS_id ? this.currentUser._id : undefined,
      shift_id: this.shiftForm.value.shift_id,
      description: this.shiftForm.value.description,
      active_date_start: this.shiftForm.value.active_date_start.valueOf(),
      active_date_end: this.shiftForm.value.active_date_end.valueOf(),
      day_start_at: getMinutesFromTime(this.shiftForm.value.day_start_at),
      is_active: this.shiftForm.value.is_active,
    }

    let response: Promise<any>;
    if (!this.sentS_id) {
      response = this.ifactoryService.shift_post_request(data, PostShiftUrls.addShift);
    } else {
      response = this.ifactoryService.shift_put_request({ s_id: this.sentS_id, ...data }, PutShiftUrls.updateByShiftId)
    }

    response.then(response => {
      setTimeout(() => {
        this.router.navigate(['/apps/ifactory/shifts']);
      }, 1000);

    }).catch(error => {
      console.log(error)
    });
  }

  openTimeIntervalDialog(timeIntervalForm, index): void {
    let dialogRef = this.dialog.open(TimeIntervalDialogComponent, {
      panelClass: 'todo-list-form-dialog',
      data: {
        timeIntervalForm: timeIntervalForm,
      }
    });

    dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];

        const data = {
          s_id: this.sentS_id,
          starttime: getMinutesFromTime(formData.value.starttime),
          endtime: getMinutesFromTime(formData.value.endtime),
          name: formData.value.name
        }

        if (!formData.value._id) {
          this.ifactoryService.shift_put_request(data, PutShiftUrls.addTimeIntervalByShifId)
            .then(response => {
              this.TimeInterval.push(formData);
              this.refreshTimeIntervalDataSource();
            }).catch(error => {
              console.log(error);
            })
        } else {
          this.ifactoryService.shift_put_request({ time_interval_id: formData.value._id, ...data }, PutShiftUrls.UpdateTimeIntervalIdAndByShifId)
            .then(response => {
              this.TimeInterval.at(index).patchValue(formData)
              this.refreshTimeIntervalDataSource();
            }).catch(error => {
              console.log(error);
            })
        }

      });
  }

  deleteTimeInterval(index): void {
    if (!confirm("Zaman aralığını silmek istediğinize emin misiniz?")) {
      return;
    }
    this.ifactoryService.shift_put_request({ s_id: this.sentS_id, time_interval_id: this.TimeInterval.value[index]._id }, PutShiftUrls.removeTimeIntervalIdAndByShifId)
      .then(res => {
        this.TimeInterval.removeAt(index);
        this.refreshTimeIntervalDataSource();
      }).catch(err => {
        console.log(err);
      });
  }

  refreshTimeIntervalDataSource(): void {
    this.timeIntervalDataSource.data = this.TimeInterval.controls;
  }

}

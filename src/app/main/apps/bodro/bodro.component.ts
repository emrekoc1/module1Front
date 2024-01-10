import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { bodroService } from './bodro.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

import { Router } from '@angular/router';

@Component({
  selector: 'app-bodro',
  templateUrl: './bodro.component.html',
  styleUrls: ['./bodro.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class bodroComponent implements OnInit {

  dataSource: DataSource;
  calisma: any;
  user_type: any;
  dataget: any;

  constructor(
    public bodroervice: bodroService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type


    // this.user_type = JSON.parse(localStorage.getItem("currentUser"))
    // console.log(this.user_type)
  }
  yearYaz:any
  date = new FormControl(moment());
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    this.yearYaz = ctrlValue.year();
    console.log('Seçilen yıl:', this.yearYaz );
  }
  monthName
  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
    this.monthName = moment.months(normalizedMonth.month());
    console.log('Seçilen ay:', this.monthName);
  
  }

 
  ngOnInit(): void {


  }

  async bordagetir() {

    console.log("init");


    this.bodroervice.get_all_bodro(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
      this.dataget = result;
      this.calisma = this.dataget.data

      console.log(this.calisma)
    }).catch(err => {
      console.log("err,", err)
    })


  }






  searchbodro(): void {

    this.bodroervice.mailSend(JSON.parse(localStorage.getItem("currentUser"))).then(result => {

      alert("Mailinize Link Yönlendirilmiştir.")

    }).catch(err => {
      console.log("deneme çalışması")
    });
  }

  yeniBodro(): void {

    alert("Yeni bodro oluştur Üzerinde çalışma devam etmektedir.")

  }






}


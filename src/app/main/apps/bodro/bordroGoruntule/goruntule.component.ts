
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { bodroService } from '../bodro.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import moment, { Moment } from 'moment';
@Component({
    selector: 'app-goruntule',
    templateUrl: './goruntule.component.html',
    styleUrls: ['./goruntule.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class GoruntuleComplement implements OnInit {

    dataget:any;
    calisma :any;
    user_type:any;
    constructor(
        public bodroervice: bodroService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {
        this.user_type =   JSON.parse(localStorage.getItem("currentUser")).user_type
        this.bordagetir();

        // this.user_type = JSON.parse(localStorage.getItem("currentUser"))
        // console.log(this.user_type)
    }

    ngOnInit(): void {
        this.bordagetir()

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

}
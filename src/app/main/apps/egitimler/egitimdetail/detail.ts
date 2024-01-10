import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { EgitimlerService } from '../egitimler.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { DialogComponent } from '../dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-detail-egitim',
    templateUrl: './detail.html',
    styleUrls: ['./detail.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EgitimDetailComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;
    kategori_id: any
    constructor(
        public egitimService: EgitimlerService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router, private route: ActivatedRoute
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.route.params.subscribe(params => {
            this.courseId = params['id'];
        })

        this.egitim_getir()
        // this.searchanket()
    }

    dataget: any;

    box: any
    egitimler = []
    dataGeldi = false
    courseId: any
    filtreEgitim: any
    ngOnInit(): void {

        this.egitim_getir()

    }
    videoElement: HTMLVideoElement;
    currentVideoTime: number;
    videoEnded() {
       let data
        console.log('Video tamamlandı');
        this.egitimService.get_single_egitim(data).then(result => {
            this.dataget = result;
           

           

        }).catch(err => {
            console.log("err,", err)
        })
      }
     updateVideoTime() {
        this.currentVideoTime = this.videoElement.currentTime;
        // Videonun kaçıncı saniyesinde olduğunu görmek için currentTime'i kullanabilirsiniz
        // İsterseniz saniyeyi dakikaya çevirebilirsiniz
        const currentMinute = Math.floor(this.currentVideoTime / 60);
        console.log('Video zamanı:', currentMinute);
      }
    yenile: boolean = true
    egitimAc(data: any) {
        this.yenile = false
        this.box = data
        setTimeout(() => {
            this.yenile = true;
        }, 500);
    }
    veriVar = false
    egitimEkle() {
        console.log("tıklama yapılabiliyor mu")
        this.router.navigate(['/apps/egitimler/add-kategori-egitim', this.courseId])
    }
    async egitim_getir() {


        // let statusbul;
        let data = {
            user: JSON.parse(localStorage.getItem("currentUser"))._id,
            egitim_id: parseInt(this.courseId)
        }

        console.log(data)
        this.egitimService.get_single_egitim(data).then(result => {
            this.dataget = result;
            console.log("data bar mı ", this.dataget)

            if (this.dataget.postUserNot) {
                this.egitimler = this.dataget.postUserNot

                this.box = this.egitimler[0]

                this.dataGeldi = true
            }
            if (this.dataget.status = 200) {
                this.dataGeldi = true
            }

        }).catch(err => {
            console.log("err,", err)
        })

    }

}


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AnketService } from './anket.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import moment, { Moment } from 'moment';
import { forEach } from 'lodash';

import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
    selector: 'app-anket',
    templateUrl: './anket.component.html',
    styleUrls: ['./anket.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class AnketComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    constructor(
        private _snackBar: MatSnackBar,
        public duyrularervice: AnketService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type

        // this.searchanket()
    }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []
    oncelik: number = 3;
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;
    ngOnInit(): void {

        this.anketgetir()
    }

    async anketgetir() {


        let statusbul;
        if (this.user_type == 0) {
            this.calismaDuzelt = []
            this.duyrularervice.get_allAdmin_anket(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
                this.dataget = result;
                console.log(this.dataget)
                if (this.dataget.data.rowsAffected) {
                    console.log(this.dataget.data)
                    this.dataget.data.recordset.forEach(element => {
                        this.calismaDuzelt.push(
                            {
                                id: element.id,
                                duyru_basligi: element.anket_baslik,
                                duyru_aciklama: element.anket_aciklama,
                                is_activite: element.is_activite,
                                status: 3,
                                kontrol: false
                            }
                        )
                    });

                    this.calismaDuzelt.forEach(notif => {
                        this.dataget.user.recordset.forEach(unotif => {
                            if (notif.id == unotif.anket_id) {
                                notif.status = 2;
                                return
                            }
                        });
                    });

                }
                console.log(this.calismaDuzelt)
            }).catch(err => {
                console.log("err,", err)
            })
        } else {
            this.duyrularervice.get_all_anket(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
                this.dataget = result;
                if (this.dataget.data.rowsAffected) {
                    console.log(this.dataget)
                    this.dataget.data.recordset.forEach(element => {
                        this.calismaDuzelt.push(
                            {
                                id: element.id,
                                duyru_basligi: element.anket_baslik,
                                duyru_aciklama: element.anket_aciklama,
                                status: 3,
                                kontrol: false
                            }
                        )
                    });

                    this.calismaDuzelt.forEach(notif => {
                        this.dataget.user.recordset.forEach(unotif => {
                            if (notif.id == unotif.anket_id) {
                                notif.status = 2;
                                return
                            }
                        });
                    });

                }
                console.log(this.calismaDuzelt)
            }).catch(err => {
                console.log("err,", err)
            })
        }
    }

    anketSil(id: any) {
        this.openSnackBar("Anket Silinecektir.", "ONAYLA", "REDDET", id, 0)
    }

    customPanelClass: string = 'custom-snackbar';
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin: any = "";
    openSnackBar(message: string, confirmAction: string, rejectAction: string, id: number, type: number) {
        const snackBarRef = this._snackBar.open(message, confirmAction, {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'my_snackbar_class',
            duration: 5000, // Snackbar'ın ne kadar süre görüntüleneceğini belirleyebilirsiniz.
            // Bu süre sonunda otomatik olarak kapanacaktır.
        });
        snackBarRef.onAction().subscribe(() => {

            this.duyrularervice.anketDelete(id)
                .then(result => {
                    if (result["status"] === 200) {
                        alert("Silme işlemi yapıldı");
                        this.calismaDuzelt = []
                        this.anketgetir()
                    } else {
                        alert("Silme işlemi Yapılamadı");
                    }
                })
                .catch(err => {
                    alert(err);
                });

        });

        snackBarRef.afterDismissed().subscribe(() => {
            // Snackbar otomatik olarak kapatıldığında veya kullanıcı reddettiğinde yapılacak işlemler
            alert("Silme işlemi reddedildi veya otomatik olarak kapatıldı");
            // Burada istediğiniz başka bir işlemi gerçekleştirebilirsiniz.
        });
    }
    postUser(id): void {
        const data = {
            user_id: JSON.parse(localStorage.getItem("currentUser"))._id,
            not: id
        }
        console.log(data)
        this.duyrularervice.postUserNot(data).then(result => {
            alert("duyru Okundu")
            this.calismaDuzelt = []
            this.anketgetir()
        }).catch(err => {
            alert(err);
        });
    }
    goruntule(id): void {
        this.router.navigate(['/apps/anket/anket-goruntule/', id]);
    }
    duzenle(id): void {

        this.router.navigate(['/apps/anket/duzenle/', id]);

    }


}

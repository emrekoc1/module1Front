import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { duyrularService } from './duyrular.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OkunduComponent } from './okundu';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
@Component({
    selector: 'app-duyru',
    templateUrl: './duyrular.component.html',
    styleUrls: ['./duyrular.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class duyrularComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    constructor(
        public duyrularervice: duyrularService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router, private _snackBar: MatSnackBar,
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.duyrugetir()
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
    }

    async duyrugetir() {


        let statusbul;
        if (this.user_type == 0) {
            this.duyrularervice.get_allAdmin_duyrular(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
                this.dataget = result;
                if (this.dataget.data.rowsAffected) {

                    console.log(this.dataget)
                    this.dataget.data.recordset.forEach(element => {
                        this.calismaDuzelt.push(
                            {
                                id: element.id,
                                duyru_basligi: element.duyru_basligi,
                                duyru_aciklama: element.duyru_aciklama,
                                is_activite: element.is_active,
                                status: 3,
                                kontrol: false
                            }
                        )
                    });

                    this.calismaDuzelt.forEach(notif => {
                        this.dataget.user.recordset.forEach(unotif => {
                            if (notif.id == unotif.notifi_id) {
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
            this.duyrularervice.get_all_duyrular(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
                this.dataget = result;
                if (this.dataget.data.rowsAffected) {

                    console.log(this.dataget)
                    this.dataget.data.recordset.forEach(element => {
                        this.calismaDuzelt.push(
                            {
                                id: element.duyuru_id,
                                duyru_basligi: element.duyru_basligi,
                                duyru_aciklama: element.duyru_aciklama,
                                status: 3,
                                kontrol: false
                            }
                        )
                    });

                    this.calismaDuzelt.forEach(notif => {
                        this.dataget.user.recordset.forEach(unotif => {
                            if (notif.id == unotif.notifi_id) {
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
    duzenle(id): void {

        this.router.navigate(['/apps/duyru/duzenle/', id]);

    }
    customPanelClass: string = 'custom-snackbar';

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin:any = "";
    openSnackBar(message: string, confirmAction: string, rejectAction: string, id: number, type: number) {


        const snackBarRef = this._snackBar.open(message, confirmAction, {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'my_snackbar_class',
            duration: 5000, // Snackbar'ın ne kadar süre görüntüleneceğini belirleyebilirsiniz.
            // Bu süre sonunda otomatik olarak kapanacaktır.
        });
        snackBarRef.onAction().subscribe(() => {
            console.log("buraya tıklandı mı")
          this.duyrularervice.duyruDelete(id)
            .then(result => {
              if (result["status"] === 200) {
                alert("Silme işlemi yapıldı");
                this.calismaDuzelt = []
                this.duyrugetir()
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


    duyruSil(id:any){
        this.openSnackBar("Duyru Silinecektir.", "ONAYLA", "REDDET", id, 0)
       
        
           
            
           
       
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(OkunduComponent, {
            width: '250px',
            data: { name: 'John', age: 30 } // İsteğe bağlı olarak veri geçebilirsiniz
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog kapandı:', result);
        });
    }
    openSnackBarPost(text:any) {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = this.horizontalPosition;
        config.verticalPosition = this.verticalPosition;
        config.panelClass = [this.customPanelClass]; // CSS sınıfını ekleyin
        config.duration = 5*1000;
        
        this._snackBar.open(text, '', config);
      }

    postUser(id): void {
console.log(id)

        const data = {
            user_id: JSON.parse(localStorage.getItem("currentUser"))._id,
            not: id
        }
        console.log(data)
        this.duyrularervice.postUserNot(data).then(result => {
            this.openSnackBarPost("duyru Okunmuştur")
            this.calismaDuzelt = []
            this.duyrugetir()
        }).catch(err => {
            alert(err);
        });
    }















}


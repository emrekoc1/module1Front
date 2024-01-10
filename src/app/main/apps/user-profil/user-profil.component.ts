import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import {  UserProfilService } from './user-profile.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OkunduComponent } from './okundu';
import {Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'app-profil',
    templateUrl: './user-profil.component.html',
    styleUrls: ['./user-profil.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class UserProfilComponent implements OnInit {
    dataSource: DataSource;
    user_type: any
    user_id:any
    constructor(
        public userProfilService: UserProfilService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.user_id = JSON.parse(localStorage.getItem("currentUser"))._id
        this.duyrugetir()
        this.getTakvim()
        this.anketgetir()  
        // this.searchanket()
    }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []


   profil:any = {
        // id: 1,
        // name:"Emre Mücahit Koç",
        // dogumTarih:"06.02.1991",
        // isBaslangic:"06.06.2021",
        // birim: "Planlama",
        // photo:'assets/images/avatars/Abbott.jpg'
   }

birim:any=[
//     {
//         id: 1,
//         name:"Emre Mücahit Koç",
//         dogumTarih:"06.02.1991",
//         isBaslangic:"06.06.2021",
//         birim: "Planlama",
//         photo:'assets/images/avatars/alice.jpg'
//    }, {
//     id: 1,
//     name:"Emre Mücahit Koç",
//     dogumTarih:"06.02.1991",
//     isBaslangic:"06.06.2021",
//     birim: "Planlama",
//     photo:'assets/images/avatars/andrew.jpg'
// }, {
//     id: 1,
//     name:"Emre Mücahit Koç",
//     dogumTarih:"06.02.1991",
//     isBaslangic:"06.06.2021",
//     birim: "Planlama",
//     photo:'assets/images/avatars/Boyle.jpg'
// },
// {
//     id: 1,
//     name:"Emre Mücahit Koç",
//     dogumTarih:"06.02.1991",
//     isBaslangic:"06.06.2021",
//     birim: "Planlama",
//     photo:'assets/images/avatars/Helen.jpg'
// },  {
//     id: 1,
//     name:"Emre Mücahit Koç",
//     dogumTarih:"06.02.1991",
//     isBaslangic:"06.06.2021",
//     birim: "Planlama",
//     photo:'assets/images/avatars/alice.jpg'
// }, {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/andrew.jpg'
// }, {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/Boyle.jpg'
// },
// {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/Helen.jpg'
// },  {
//     id: 1,
//     name:"Emre Mücahit Koç",
//     dogumTarih:"06.02.1991",
//     isBaslangic:"06.06.2021",
//     birim: "Planlama",
//     photo:'assets/images/avatars/alice.jpg'
// }, {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/andrew.jpg'
// }, {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/Boyle.jpg'
// },
// {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/Helen.jpg'
// },  {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/alice.jpg'
// }, {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/andrew.jpg'
// }, {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/Boyle.jpg'
// },
// {
// id: 1,
// name:"Emre Mücahit Koç",
// dogumTarih:"06.02.1991",
// isBaslangic:"06.06.2021",
// birim: "Planlama",
// photo:'assets/images/avatars/Helen.jpg'
// }
]
etkinlikler:any =[{
    etkinlik : "Etkinlik Adı1",
    photo : 'assets/images/calendar/autumn.jpg',
    
},
{
    etkinlik : "Etkinlik Adı1",
    photo : 'assets/images/calendar/spring.jpg',
},
{
    etkinlik : "Etkinlik Adı1",
    photo : 'assets/images/calendar/winter.jpg',
}]
izinler:any =[
    //{
//     izintarihi : "10.05.2022",
//     izinligun : "5",
//     izinbitis :"15.05.2022"
// },
// {
//     izintarihi : "10.012.2022",
//     izinligun : "5",
//     izinbitis :"15.12.2022"
// }
]
    ngOnInit(): void {
    }
    yenile:boolean = true
    appointmentsData:any= [];
    startDateTemplate(cellElement, cellInfo) {
        cellElement.textContent = new Date(cellInfo.data.startDate).toLocaleDateString();
      }
    
      endDateTemplate(cellElement, cellInfo) {
        const endDate = new Date(cellInfo.data.endDate);
        cellElement.textContent = endDate.toLocaleDateString();
    
        // endDate şu anki tarihten küçükse kırmızı renk uygula
        if (endDate < new Date()) {
          cellElement.style.color = 'red';
        }
      }
      onRowPrepared(e) {
        let now = new Date();
        if (new Date(e.data.endDate) < now) {
            e.rowElement.style.backgroundColor = 'red';
        }
    }
    onRowPreparedAnket(e) {
       
        if (e.data.status < 3) {
            e.rowElement.style.backgroundColor = 'red';
        }
    }
    onRowPreparedDuyru(e) {
       
        if (e.data.status < 3) {
            e.rowElement.style.backgroundColor = 'red';
        }
    }
    duyruCalisma:any = []
    duyrugetir() {
        let data = {
            depID:JSON.parse(localStorage.getItem("currentUser")).depID,
            _id:JSON.parse(localStorage.getItem("currentUser"))._id,
        }

            this.userProfilService.get_all_duyrular(data).then(result => {
                this.dataget = result;
                if (this.dataget.data.rowsAffected) {

                    console.log(this.dataget)
                    this.dataget.data.recordset.forEach(element => {
                        this.duyruCalisma.push(
                            {
                                id: element.duyru_id,
                                duyru_basligi: element.duyru_basligi,
                                duyru_aciklama: element.duyru_aciklama,
                                status: 3,
                                kontrol: false
                            }
                        )
                    });

                    this.duyruCalisma.forEach(notif => {
                        this.dataget.user.recordset.forEach(unotif => {
                            if (notif.id == unotif.notifi_id) {
                                notif.status = 2;
                                return
                            }
                        });
                    });

                }
                console.log(this.duyruCalisma)
            }).catch(err => {
                console.log("err,", err)
            })
    



    }

    
    async anketgetir() {
        let data = {
            depID:JSON.parse(localStorage.getItem("currentUser")).depID,
            _id:JSON.parse(localStorage.getItem("currentUser"))._id,
        }
            this.userProfilService.get_all_anket(data).then(result => {
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

    getTakvim(){
        let data = {
            user_id: this.user_id
        }
        this.userProfilService.getTakvim(data).then(result => {
            console.log(result["data"]);
            this.appointmentsData = result["data"]
        }).catch(err => {
            console.log("err,", err)
        })
    }
    egitimAc(){
       
    }
    etkinlikMetni = '';

    showEtkinlik(deger:any) {
      this.etkinlikMetni = this.etkinlikMetni;
      this.yenile = true;
    }
  
    hideEtkinlik() {
      this.etkinlikMetni = '';
      this.yenile = false;
    }
 


}

 
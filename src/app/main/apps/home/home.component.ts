import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { HomeService } from './home.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import {Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewsDetailComponent } from './news-detail.component';
import { CommonModule } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { birimsecimContentComponent } from './birimSecimi.component';
export interface PeriodicElement {
    id: number;
    yayin_date: string;
    aciklama: string;
    icerik: string;
    photo: string;
    photos: Photo[]; // Burada Photo türünü tanımlıyoruz

  }
  interface Photo {
    photo: string;
  }
 
   
@Component({
    selector: 'app-home',

    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})


export class HomeComponent implements OnInit {
    displayedColumns: string[] = ['photo','aciklama', 'icerik' ];
    facID:any
    user_type: any
    constructor(
        public duyrularervice: HomeService,private _snackBar: MatSnackBar,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {
      this.facID = JSON.parse(localStorage.getItem("currentUser")).facID
        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type

        this.habergetir()
        // this.searchanket()
    }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []
  
  
   selectPDF :any
   selectData:any
   birimSecim(): void {
    const dialogRef = this.dialog.open(birimsecimContentComponent, {
      width: '400px', // Dialog genişliği ayarlanabilir
    });
  }

   async flowToken() {
   
     
  
      
        window.open('https://flow.aho.com.tr/v1_0/NAF.LFlow.Web/Pages/PortalPages/Dashboard.aspx?qstoken='+this.facID, '_blank');

     
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
     
      this.duyrularervice.haberSil(id)
        .then(result => {
          if (result["status"] === 200) {
            alert("Silme işlemi yapıldı");
            this.calismaDuzelt = []
            this.habergetir()
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
  turkceBuyukHarf(str) {
    var upperCaseStr = "";
    var turkceChars = {
      "i": "İ",
      "ı": "I",
      "ğ": "Ğ",
      "ü": "Ü",
      "ş": "Ş",
      "ö": "Ö",
      "ç": "Ç"
    };
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      upperCaseStr += turkceChars[char.toLowerCase()] || char.toUpperCase();
    }
  
    return upperCaseStr;
  }

  filteredData:any
  applyFilter(filterValue: string) {
    
    filterValue = filterValue.trim();
    filterValue = this.turkceBuyukHarf(filterValue)

    this.filteredData = this.calismaDuzelt.filter(item =>
      item.aciklama.toUpperCase().includes(filterValue) ||
      item.icerik.toString().includes(filterValue)
    );

  }
   openNewsDetail(element: any): void {
    console.log(element.id)


    this.duyrularervice.singleHaberDetail(element.id).then(result => {
      this.dataget = result;
      this.selectData = this.dataget.postUserNot
      this.selectPDF = this.selectData.filter(veri => veri.photo.endsWith('.pdf'));
    }).catch(err => {
      console.log("err,", err)
    })

    
    console.log(this.selectPDF)

  }
  likeButton(id:number){
   let data = {
        haber_id : id,
        user_id : JSON.parse(localStorage.getItem("currentUser"))._id
    }
    this.duyrularervice.haberLike(data).then(result => {
        this.calismaDuzelt = []
        console.log(result)
        this.habergetir()
    }).catch(err => {
        console.log("err,", err)
    })
  }
  async sil(id:any) {
            this.openSnackBar("Haber Silinecektir.", "ONAYLA", "REDDET", id, 0)
    
  }
  currentIndex: number = 0; // Varsayılan indeks ile başlatın

setCurrentIndex(index: number) {
  this.currentIndex = index;
}

interval: any; // Zamanlayıcı değişkeni

ngOnDestroy() {
    this.stopAutoSlide(); // Otomatik geçişi durdur
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.goForward(); // İleri git fonksiyonunu çağır
    }, 10000); // 10 saniyelik aralık
  }

  stopAutoSlide() {
    clearInterval(this.interval); // Zamanlayıcıyı temizle
  }

  goForward() {
    if (this.currentIndex < this.calismaDuzelt.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
  
  goBackward() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

    ngOnInit(): void {
        this.startAutoSlide(); // Otomatik geçişi başlat
    }
    yenile:boolean = true
  
    preventPlayback(event: MouseEvent): void {
        event.preventDefault();
    }
    haberAc(data:any){
      window.open(data, '_blank');
    }

    haberGeldi = false

    async habergetir() {
      this.haberGeldi = false
let data = {
  birim: 0
}
        this.duyrularervice.get_haber(data).then(result => {
            this.dataget = result;
            this.dataget.postUserNot.forEach(data => {
                this.calismaDuzelt.push({
                    id:data.id,
                    aciklama : data.header,
                    icerik :data.description,
                    photo: data.photo,
                    pdfurl: data.pdf_url,
                    total_like:data.total_like
                })
                console.log(this.calismaDuzelt)
                this.haberGeldi = true
            })
            this.filteredData = this.calismaDuzelt

        }).catch(err => {
            console.log("err,", err)
        })


    }










}

 
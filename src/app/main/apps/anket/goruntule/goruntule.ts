import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AnketService } from '../anket.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { AnyARecord } from 'dns';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
    selector: 'app-anket-goruntule',
    templateUrl: './goruntule.html',
    styleUrls: ['./goruntule.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
    
})
export class AnketGoruntuleComponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    icerik:any
    data_geldi = false
    user_id : any
    anket_id : any
    constructor(public dialog: MatDialog,private route: ActivatedRoute,
        private _snackBar: MatSnackBar,
        public duyruservice: AnketService,
        private fb: FormBuilder,
        public router: Router) {
       
        this.user_id = JSON.parse(localStorage.getItem("currentUser"))._id,
        this.anket_id = this.route.snapshot.paramMap.get('id');
            this.goruntule()
       
        this.batchForm = this.fb.group({
            baslik: [null, Validators.required],
            aciklama: [null, Validators.required],
            oncelik: [null, Validators.required],
            departman: [null, Validators.required],
            soruType:[null,Validators.required],
            radioSecim:[null,Validators.required],
            cokluText:[null,Validators.required],
            
            tekilText:[null,Validators.required]
        });

    }
   
 
   soruKayit(){

   }
   cevapArray: any[] = [];
   cevapSecildi(soruID: number, secenek: string, soruType: number, soru: string) {
    console.log(secenek);
  
    const soruIndex = this.dataTamamlandi.data.findIndex(soru => soru.soru_id === soruID);
  
    if (soruIndex !== -1) {
      if (!this.cevapArray[soruIndex]) {
        this.cevapArray[soruIndex] = [];
      }
  
      let data = {
        cevap: secenek,
        soru:soru,
        soru_id: soruID,
        soruType: soruType
      };
  
      if (soruType === 1) {
        const cevapIndex = this.cevapArray[soruIndex].findIndex(item => item.cevap === secenek);
  
        if (cevapIndex === -1) {
          this.cevapArray[soruIndex].push(data);
        } else {
          this.cevapArray[soruIndex].splice(cevapIndex, 1);
        }
      } else if (soruType === 2 || soruType === 4) {
        this.cevapArray[soruIndex] = data;
      }
  
      console.log("******************************************");
      console.log(this.cevapArray);
    }
    if(soruType==2){
        const soruIndex = this.dataTamamlandi.data.findIndex(soru => soru.soru_id === soruID);
        if (soruIndex !== -1) {
          if (!this.cevapArray[soruIndex]) {
            this.cevapArray[soruIndex] = [];
          }
          let data= {
                   cevap:secenek,
                   soru:soru,
                   soru_id : soruID,
                   soruType: soruType
          }
          this.cevapArray[soruIndex]=data;
        }
        console.log("******************************************")
        console.log(this.cevapArray)
       }
       if(soruType==4){
        const soruIndex = this.dataTamamlandi.data.findIndex(soru => soru.soru_id === soruID);
        if (soruIndex !== -1) {
          if (!this.cevapArray[soruIndex]) {
            this.cevapArray[soruIndex] = [];
          }
          let data= {
                   cevap:secenek,
                   soru:soru,
                   soru_id : soruID,
                   soruType: soruType
          }
          this.cevapArray[soruIndex]=data;
        }
        console.log("******************************************")
        console.log(this.cevapArray)
       }

   }
 
   cevapGirildi(soruID: number, cevap: string,soru:string) {
     const soruIndex = this.dataTamamlandi.data.findIndex(soru => soru.soru_id === soruID);
     if (soruIndex !== -1) {
      if (!this.cevapArray[soruIndex]) {
        this.cevapArray[soruIndex] = [];
      }
      let data= {
               cevap:cevap,
               soru:soru,
               soru_id : soruID,
               soruType: 3
      }
      this.cevapArray[soruIndex]=data;
}
console.log("******************************************")
console.log(this.cevapArray)   
       
     }
   

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'my_snacbar_class'
        });
    }
icerikDuzenle(){
    this.icerik.forEach(element => {
        
    });
}

    ngOnInit(): void { 
        this.getDepartman()
       
   
    }
departman:any 
    getDepartman():void {
        this.duyruservice.getDepartman().then(result => {
         this.departman = result["data"]
            
         }).catch(err => {
             alert(err);
         });

    }
    get sellingPoints() {
        return this.batchForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
        
    }


    soruTipi:any

dataTamamlandi : any
goruntule(){
    interface IcerikDuzenli {
        anket_basligi: string;
        anket_aciklama: string;
        data: Soru[];
      }
      
      interface Soru {
        soruType: string;
        soru_id: string;
        soru_baslik: string;
        options: Option[];
      }
      
      interface Option {
        options: any;
      }

      
    const id = this.route.snapshot.paramMap.get('id');
    const data = {
        user_id: JSON.parse(localStorage.getItem("currentUser"))._id,
        anket_id: id,
        departman_id :JSON.parse(localStorage.getItem("currentUser")).depID
    }
    this.duyruservice.getanketicerik(data).then(result => {
        this.icerik = result["data"].recordset
        console.log(this.icerik)
        const icerikDuzenli: IcerikDuzenli = {
            anket_basligi: this.icerik[0].anket_baslik,
            anket_aciklama: this.icerik[0].anket_aciklama,
            data: []
          };
          
          const sorular: { [key: string]: Soru } = {};
          
          for (const { soru_type, soru_id, soru_basligi, options } of this.icerik) {
            if (!(soru_id in sorular)) {
              sorular[soru_id] = {
                soruType: soru_type,
                soru_id: soru_id,
                soru_baslik: soru_basligi,
                options: []
              };
            }
          
            sorular[soru_id].options.push({ options: options });
          }
          
          icerikDuzenli.data = Object.values(sorular);        
          this.dataTamamlandi= icerikDuzenli

          console.log(this.dataTamamlandi)

          this.data_geldi=true
    }).catch(err => {
        alert(err);
    });

}

    check_code(code) {

    }
   
    addBatch() {
    //     this.is_click = true;
    //     let element=[];
    //     console.log(this.batchForm.value.departman)
    //    for (let index = 0; index < this.batchForm.value.departman.length; index++) {
    //     element.push([this.batchForm.value.departman[index]]);
    //     console.log(element)
    //    }
    //    console.log(element)
    //     const data = {
            
            
            
    //         aciklama: this.batchForm.value.aciklama,
    //         baslik: this.batchForm.value.baslik,
          
    //         departman: element,
    //         soruType:this.batchForm.value.soruType,
    //         cokluText:this.batchForm.value.cokluText,
    //         soruText:this.batchForm.value.soruText,
    //         tekilText:this.batchForm.value.soruText,
    //         soruArray:this.soruArray
    //     };
    //     console.log(data);

     
        this.duyruservice.post_user_all_anket(this.cevapArray,this.anket_id,this.user_id).then(result => {
           alert("Ekleme İşelmi Tamamlandır");
          this.router.navigate(['/apps/anket']);
        }).catch(err => {
            alert(err);
        });

    }
}
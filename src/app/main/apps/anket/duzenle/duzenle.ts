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
    selector: 'app-duzenle',
    templateUrl: './duzenle.html',
    styleUrls: ['./duzenle.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
    
})
export class AnketDuzenleComponent implements OnInit {
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
   

     openSnackBar(message: string, action: string, id: number,type:number) {
      const snackBarRef = this._snackBar.open(message, action, {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'my_snackbar_class',
     
      });
  
      snackBarRef.onAction().subscribe(() => {
        if(type == 0){//soru sil{}
        this.duyruservice.deleteSoru(id)
          .then(result => {
            if (result["status"] === 200) {
              alert("Silme işlemi yapıldı");
              this.goruntule()
            }
          })
          .catch(err => {
            alert(err);
          });
        }else if(type==1){
          this.duyruservice.deleteOptions(id)
          .then(result => {
            if (result["status"] === 200) {
              alert("Silme işlemi yapıldı");
              this.goruntule()
            }
          })
          .catch(err => {
            alert(err);
          });
        }
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
postOptions(anket_id:any,soru_id:any,soruType:any,soruCevabi:any){
     let data = {
        anket_id:anket_id,
        soru_id:soru_id,
        soruType:soruType,
        options:soruCevabi
      }
      this.duyruservice.postoptions(data)
      .then(result => {
        if (result["status"] === 200) {
          alert("Kayıt İşlemi Tammalanmıştır.");
          this.goruntule()
        }
      })
      .catch(err => {
        alert(err);
      });
}

toggleAnketAktif(anket_id:any,durum:any) {
  let durums = durum;
console.log(anket_id, durums)
let data = {
  anket_id: anket_id,
  is_activite : durums
}
this.duyruservice.putAnket(data)
.then(result => {
  console.log(result["status"])
  if (result["status"] === 200) {
    alert("Kayıt İşlemi Tammalanmıştır.");
    
  }
})
.catch(err => {
  alert(err);
});
}
durum:any
goruntule(){
    interface IcerikDuzenli {
        anket_basligi: string;
        anket_id : number
        anket_aciklama: string;
        is_acitivite : boolean
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
        options_id:any
      }

      
    const id = this.route.snapshot.paramMap.get('id');
    const data = {
      
        anket_id: id,
      
    }
    
    this.duyruservice.getanketicerikDuzenle(data).then(result => {
      console.log(result)
        this.icerik = result["data"].recordset
        console.log(this.icerik)
        const icerikDuzenli: IcerikDuzenli = {
            anket_basligi: this.icerik[0].anket_baslik,
            anket_aciklama: this.icerik[0].anket_aciklama,
            anket_id: this.icerik[0].anket_id,
            is_acitivite:this.icerik[0].is_activite,
            data: []
          };
          
          const sorular: { [key: string]: Soru } = {};
          
          for (const { soru_type, soru_id, soru_basligi, options,options_id } of this.icerik) {
            if (!(soru_id in sorular)) {
              sorular[soru_id] = {
                soruType: soru_type,
                soru_id: soru_id,
                soru_baslik: soru_basligi,
                options: []
              };
            }
          
            sorular[soru_id].options.push({ options: options,options_id:options_id });
          }
          
          icerikDuzenli.data = Object.values(sorular);        
          this.dataTamamlandi= icerikDuzenli

          console.log(this.dataTamamlandi)
         this.durum =  this.dataTamamlandi.is_acitivite
          this.data_geldi=true
    }).catch(err => {
        alert(err);
    });

}

    check_code(code) {

    }
    secilenID:any=""
    guncelemeIstendi:any = false
    anketSoruGuncelle(soru_id:any){
        console.log(soru_id)
        this.guncelemeIstendi=true
        this.secilenID = soru_id
    }
    anketSil(soru_id:any){
      this.openSnackBar("Soru Silinecektir.","ONAYLA",soru_id,0)
  }
  secenekSil(soru_id:any){
    this.openSnackBar("Soru Silinecektir.","ONAYLA",soru_id,1)
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
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import introJs from 'intro.js/intro.js';
import DataSource from "devextreme/data/data_source";
import { BomService } from './bom.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataService } from 'app/services/data.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
export interface DialogData {
  adi: string;
  aciklama: string;
}
@Component({
  selector: 'app-newBom',
  templateUrl: './newBom.component.html',
  styleUrls: ['./newBom.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class BomNewComponent implements AfterViewInit, OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public user_informations;
  dialogRef: any;
  type1: any = "list";
  public machine_list = [];
  public url = localStorage.getItem("work_url");
  factory_informations: any;
  public productList = [];
  public productWithoutBomList: any
  public bomList = [];
  public filteredList = [];
  public OperationList: any
  public ogretmen_kismi: boolean;

  editing = {};
  rows: any
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'ID' },
    { name: 'ADI' },
    { name: 'DOSYALAR' },
    { name: 'ÖZELLİKLER' },
    { name: 'STOK MİKTARI' },
    { name: 'İŞLEM' }
  ];

  public selectedBomID;
  public selectedBomName;
  giren_kisiye_gore: boolean;
  ikinci_user_bu_sayfayi_kullanabilirmi: boolean;
  public sayfanin_adi = "Reçete Sayfası";
  public productForm: FormGroup;
  cikti_urunu_duzenli: string; // operasyondan geçince ürün oluşmadan önce geçici olarak oluşan birimdir . value=999 dir

  // route güncellemme ile alakalı bilgileri topluyorum 
  public route_update_operationName;
  public route_update_operationID;
  public route_update_operationCode;
  public route_update_operationTime;
  public route_operationToplam;
  public route_update_giren_urun_adi;
  public route_update_giren_urun_id;
  public route_update_giren_urun_birim;
  public route_update_giren_urun_adet;
  public route_update_giren_urun_toplam;
  public route_update_cikan_urun_adi;
  public route_update_cikan_urun_id;
  public route_update_cikan_urun_birim;
  public route_update_cikan_urun_adet;
  public route_update_cikan_urun_toplam;
  submitted: boolean;
  butona_basildi: boolean;
  chanced_cikti_urun: any;
  customData: any;
  selected_productID: any;
  // route güncellemme ile alakalı bilgileri topluyorum 
  recete_ekran_ac: boolean = false

  constructor(public bom_service: BomService, public dataService: DataService, private fb: FormBuilder, private http: HttpClient, public dialog: MatDialog) {
    this.user_informations = JSON.parse(localStorage.getItem("currentUser"));
    //" this.user_informations")
    //this.user_informations);
    //" this.user_informations");
    this.newBom = this.fb.group({
      name: ['', Validators.required],
      product: ['', Validators.required],
      custom_bom: ['', Validators.required]
    })
    this.factory_informations = JSON.parse(localStorage.getItem("factory"));

    this.getAllBomsByFactory();
    this.getOperationListByFactory();
    this.getProductionWithoutBom()
    //this.machine_list = this.send_post(this.url+"getAllByFactory",{"facID":this.user_informations.facID});

    this.getCustomData();


    this.productForm = this.fb.group({
      selling_points: this.fb.array([this.fb.group(
        {
          operasyonAdi: ['', Validators.required],
          girdiUrun: ['', Validators.required],
          girdiUrunMiktari: [1, Validators.required],
          girdiUrunBirimi: ["Adet", Validators.required],
          ciktiUrun: ['', Validators.required],
          ciktiUrunMiktari: [1, Validators.required],
          ciktiUrunBirimi: ["Adet", Validators.required],
          newCiktiProductCode: ['']
        }
      )]),

      urun_points: this.fb.array([this.fb.group({ adi: '', birim: '', deger: '' })])
    });

    //// bu kısımda factory  tablosundan gelen userlarin nereye erişlebilecegini gösteren ksıımdır 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (this.user_informations.usertype != 0) {
      //this.user_informations.facID);
      this.giren_kisiye_gore = true;
      if (this.factory_informations.userTypeList) {
        for (let index = 0; index < this.factory_informations.userTypeList.length; index++) {
          const element = this.factory_informations.userTypeList[index];
          //element.count);
          if (element.count == this.user_informations.usertype) {
            if (element.permissions) {
              var yeni_listem = []
              yeni_listem = element.permissions.split(',');

              //"test ediyorum");
              this.ikinci_user_bu_sayfayi_kullanabilirmi = yeni_listem.includes(this.sayfanin_adi)

            }
          }
        }
      }

    } else {
      this.giren_kisiye_gore = false;
      this.ikinci_user_bu_sayfayi_kullanabilirmi = true;
    }



  }

  bomTypeSelect: string = "Tumu";

  ngAfterViewInit(): void {
    setTimeout(() => {
      // deneme
    }, 100);

    setTimeout(() => {
      this.dialog.closeAll()
    }, 500);
  }
  ngOnInit() {

  }

  get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
  }
  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({ operasyonAdi: ['', Validators.required], girdiUrun: ['', Validators.required], girdiUrunMiktari: 1, girdiUrunBirimi: '', ciktiUrun: '', ciktiUrunMiktari: 1, ciktiUrunBirimi: '', newCiktiProductCode: '' }));
  }
  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index); // birşeyi silmek istiyorsak onu ifade ediyor 
  }
  get f() { return this.sellingPoints.controls; }

  get urunPoints() {
    return this.productForm.get('urun_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
  }

  addurunPoint() {
    this.urunPoints.push(this.fb.group({ adi: '', birim: '', deger: '' }));
  }
  deleteurunPoint(index) {
    this.urunPoints.removeAt(index); // birşeyi silmek istiyorsak onu ifade ediyor 
  }

  async getProductionWithoutBom() { // nihayi ürün olarak reçete eklenmeyen ürünleri getiriyorum 


    this.is_load_data = false
    await this.bom_service.get_product_data().then(result => {

      this.loadingIndicator = false;
      this.productWithoutBomList = result

      this.filteredList = this.bomList.reverse()

      setTimeout(() => {
        this.is_load_data = true;

      }, 500);


    }).catch(err => {
      console.log("err,", err)
    })



  }
   ilk_Operation:any = []
    ilk_Giren:any
    ilk_Cikan:any
    ikinci_Operation:any = []
    ikinci_Giren:any
    ikinci_Cikan:any
    ucuncu_Operation:any = []
    ucuncu_Giren:any
    ucuncu_Cikan:any
    dorduncu_Operation:any = []
    dorduncu_Giren:any
    dorduncu_Cikan:any
    besinci_Operation:any = []
    besinci_Giren:any
    besinci_Cikan:any
    altinci_Operation:any = []
   altinci_Giren:any
   altinci_Cikan:any

selectProduct:any
   selectItemsFonc(evt){
this.selectProduct = evt
   }
  bomParlatmaStart() {
   
   for (let index = 0; index < this.OperationList.length; index++) {
     if(this.OperationList[index]._id == "5e2ed9426350275812aecca8"){
       this.ilk_Operation = this.OperationList[index]
     }
     if(this.OperationList[index]._id == "5e2ed9c86350275812aeccab"){
      this.ikinci_Operation = this.OperationList[index]
    }
    if(this.OperationList[index]._id == "5e2ed96e6350275812aecca9"){
      this.ucuncu_Operation = this.OperationList[index]
    }
    if(this.OperationList[index]._id == "5e2ed9a46350275812aeccaa"){
      this.dorduncu_Operation = this.OperationList[index]
    }
    if(this.OperationList[index]._id == "5e2eda456350275812aeccac"){
      this.besinci_Operation = this.OperationList[index]
    }
    if(this.OperationList[index]._id == "5e2eda5d6350275812aeccad"){
      this.altinci_Operation = this.OperationList[index]
    }
    
     
   }

        
  }


  yeni_route_ekle() {
    //"yeni ürün" + this.cikti_urunu_duzenli)
    //this.sellingPoints.value);
    this.butona_basildi = true;
    this.submitted = true;

    // stop here if form is invalid
    if (this.sellingPoints.invalid) {
      return;
    }

    if (this.sellingPoints.value[0]['girdiUrun'] == "seciniz") {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Ürün Seçiniz" }
      });
    }
    else {
      if (this.sellingPoints.value[0]['ciktiUrun'] == 999) {
        //"yeni ürün eklenecek");
        //"önce ürün ekliyoruz sonra bu ürün için reçete");
        //this.sellingPoints.value[0]['girdiUrun'])
        if (this.cikti_urunu_duzenli.length < 2) {
          this.dialog.open(DialogOverviewExampleDialog, {
            height: 'auto',
            data: { adi: "Giriş Hatası", aciklama: "Lütfen Adet Giriniz." }
          });
        }
        else {


          const data = {
            "name": this.cikti_urunu_duzenli,
            "no": 3213,
            "createdUserID": this.user_informations.id,
            "facID": this.factory_informations._id,
            "datas": 1,
            "quantity": 1,
            "productBirim": "Adet",
            "productType": "test",
            "inputProduct": {
              "id": this.sellingPoints.value[0]['girdiUrun'].split(',')[0],
              "name": this.sellingPoints.value[0]['girdiUrun'].split(',')[1],
              "operationName": this.sellingPoints.value[0]['operasyonAdi'].split(',')[1],
              "operationID": this.sellingPoints.value[0]['operasyonAdi'].split(',')[0],
              "opeationType": this.sellingPoints.value[0]['operasyonAdi'].split(',')[4],
              "createdDate": new Date().getTime()
            }
          }
          var operationName = this.sellingPoints.value[0]['operasyonAdi'].split(',')[1]
          var operationID = this.sellingPoints.value[0]['operasyonAdi'].split(',')[0]
          var operationType = this.sellingPoints.value[0]['operasyonAdi'].split(',')[4]
          var inputName = this.sellingPoints.value[0]['girdiUrun'].split(',')[1]
          var inputID = this.sellingPoints.value[0]['girdiUrun'].split(',')[0]

          this.bom_service.post_product(data).then(val => {



            setTimeout(() => {
              this.getAllProductionByFactory(1)

              if (this.sellingPoints.value[0]['operasyonAdi'].split(',')[1].length < 2) {
                const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                  height: 'auto',
                  data: { adi: "Giriş Hatası", aciklama: "Lütfen Operation Seçiniz" }
                });
              }

              if (this.sellingPoints.value[0]['girdiUrun'].split(',')[1].length < 2) {
                const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                  height: 'auto',
                  data: { adi: "Giriş Hatası", aciklama: "Lütfen giriş Seçiniz" }
                });
              }
              else {
                // this.dialog.open(DialogComponent, { disableClose: true });
                operationName = this.sellingPoints.value[0]['operasyonAdi'].split(',')[1]
                operationID = this.sellingPoints.value[0]['operasyonAdi'].split(',')[0]
                operationType = this.sellingPoints.value[0]['operasyonAdi'].split(',')[4]
                inputName = this.sellingPoints.value[0]['girdiUrun'].split(',')[1]
                inputID = this.sellingPoints.value[0]['girdiUrun'].split(',')[0]
                outputName = val['data'].name
                outputID = val['data']._id


                // let body = new URLSearchParams();
        
                // body.set('outputName', outputName);
                // body.set('outputID', outputID);
                // body.set('bomID', this.selectedBomID);
                // body.set('operationType', operationType);
                // //"operationType  : " + operationType)
                // body.set('input_product_adet', this.sellingPoints.value[0]['girdiUrunMiktari'])
                // body.set('input_product_birim', this.sellingPoints.value[0]['girdiUrunBirimi'])
                // body.set('output_product_adet', this.sellingPoints.value[0]['ciktiUrunMiktari'])
                // body.set('output_product_birim', this.sellingPoints.value[0]['ciktiUrunBirimi'])

                // body.set('estTime', this.sellingPoints.value[0]['operasyonAdi'].split(',')[3]);
                const bomrout = {
                  'facID': this.factory_informations._id,
                  'operationName': operationName,
                  'operationID': operationID,
                  'inputName': inputName,
                  'inputID': inputID,
                  'outputName': outputName,
                  'outputID': outputID,
                  'bomID': this.selectedBomID,
                  'operationType': operationType,
                  'input_product_adet': 1,
                  'input_product_birim': "Adet",
                  'output_product_adet': 1,
                  'output_product_birim': "Adet",
                  'estTime': this.sellingPoints.value[0]['operasyonAdi'].split(',')[3]
                }

                this.bom_service.add_route(bomrout).then(result => {
                  console.log("deneme deneme deneme", this.selectedBomID)
                  console.log(result);

                  this.getAllBomsByFactory();
                  this.getOperationListByFactory();
                  this.getProductionWithoutBom();

                  setTimeout(() => {


                  }, 500);


                }).catch(err => {
                  console.log("err,", err)
                })
                // this.http.post(this.url + "bom/addRouteByBom", body.toString(), options).subscribe((val) => {
                //   //val);
                //   if (val['data'] != null) {
                //     this.getAllBomsByFactory();
                //     this.getOperationListByFactory();
                //     this.dialog.closeAll();
                //     this.butona_basildi = false;
                //   }

                // })
              }
            }, 500);


          }).catch(err => {
            console.log("err,", err)
          })


        }




      } else {
        //"var olan bir ürün üzerinden oluşturulacak");
        if (this.sellingPoints.value[0]['operasyonAdi'].split(',')[1].length < 2) {
          const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            height: 'auto',
            data: { adi: "Giriş Hatası", aciklama: "Lütfen Operation Seçiniz" }
          });
        }

        if (this.sellingPoints.value[0]['girdiUrun'].split(',')[1].length < 2) {
          const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            height: 'auto',
            data: { adi: "Giriş Hatası", aciklama: "Lütfen giriş Seçiniz" }
          });
        }
        else {
          // this.dialog.open(DialogComponent, { disableClose: true });
          var operationName = this.sellingPoints.value[0]['operasyonAdi'].split(',')[1]
          var operationID = this.sellingPoints.value[0]['operasyonAdi'].split(',')[0]
          var inputName = this.sellingPoints.value[0]['girdiUrun'].split(',')[1]
          var inputID = this.sellingPoints.value[0]['girdiUrun'].split(',')[0]
          var outputName = this.sellingPoints.value[0]['ciktiUrun'].split(',')[1]
          var outputID = this.sellingPoints.value[0]['ciktiUrun'].split(',')[0]
          this.OperationList = []
          let body = new URLSearchParams();
          body.set("facID", this.factory_informations._id)
          body.set('operationName', operationName);
          body.set('operationID', operationID);
          body.set('inputName', inputName);
          body.set('inputID', inputID);
          body.set('outputName', outputName);
          body.set('outputID', outputID);
          body.set('bomID', this.selectedBomID);
          body.set('input_product_adet', "1");
          body.set('input_product_birim', "Adet");
          body.set('output_product_adet', "1");
          body.set('output_product_birim', "Adet")
          // let options = {
          //   headers: new HttpHeaders()
          //     .set('Content-Type', 'application/x-www-form-urlencoded')
          //     .set('x-access-token', this.user_informations.token)
          // };

          this.bom_service.add_route(body.toString()).then(result => {



            this.getAllBomsByFactory();
            this.getOperationListByFactory();


            setTimeout(() => {


            }, 500);


          }).catch(err => {
            console.log("err,", err)
          })
          // this.http.post(this.url + "bom/addRouteByBom", body.toString(), options).subscribe((val) => {
          //   //val);
          //   if (val['data'] != null) {
          //     this.getAllBomsByFactory();
          //     this.getOperationListByFactory();
          //     this.dialog.closeAll();
          //   }

          // })
        }

      }
    }


  }

  //////////////////////////// UPDATE ROUTE  İNSİDE BOM   /////////////////////////////////////
  updateRouteinsidebom(bomID, routeID) {
    //bomID, routeID);
    //
    this.route_update_operationName,
      this.route_update_giren_urun_adi,
      this.route_update_giren_urun_id,
      this.route_update_giren_urun_birim,
      this.route_update_giren_urun_adet,
      this.route_update_cikan_urun_adi,
      this.route_update_cikan_urun_id,
      this.route_update_cikan_urun_birim,
      this.route_update_cikan_urun_adet;
    this.route_operationToplam = this.route_update_operationID + "," + this.route_update_operationName;
    this.route_update_giren_urun_toplam = this.route_update_giren_urun_id + "," + this.route_update_giren_urun_adi;
    var operasyon = this.route_update_operationID + "," + this.route_update_operationName + "," + this.route_update_operationCode;
    var urun = this.route_update_giren_urun_id + "," + this.route_update_giren_urun_adi;
    this.route_icin_gecici_urun_olustur(operasyon, urun, this.route_update_giren_urun_birim, this.route_update_giren_urun_adet, 0);

  }
  route_guncelle() {

  }
  deleteRouteinsidebom(bomID, routeID, count) {
    //bomID, routeID, count)

    // this.dialog.open(DialogComponent, { disableClose: true });
    //bomID, routeID);
    const data = {
      "facID": this.factory_informations._id,
      'bomID': bomID,
      'routeID': routeID,
      'count': count
    }
    this.bom_service.bomRotaSil(data).then(result => {

      this.getAllBomsByFactory();
      this.getOperationListByFactory();

      this.filteredList = this.bomList.reverse()

      setTimeout(() => {
        this.is_custom_data = true;

      }, 500);


    }).catch(err => {
      console.log("err,", err)
    })


  }
  is_custom_data: boolean
  async getCustomData() {
    this.is_custom_data = false
    await this.bom_service.get_custom_data().then(result => {

      this.loadingIndicator = false;
      this.customData = result

      this.filteredList = this.bomList.reverse()

      setTimeout(() => {
        this.is_custom_data = true;

      }, 500);


    }).catch(err => {
      console.log("err,", err)
    })

  }


  changeInputCiktiUrun(ciktiUrun) {
    //ciktiUrun);
    this.chanced_cikti_urun = ciktiUrun;
  }

  saveNewCiktiUrun(index) {
    //this.chanced_cikti_urun);
    //this.sellingPoints.value);
    this.cikti_urunu_duzenli = this.chanced_cikti_urun;
    this.sellingPoints.controls[index].patchValue({ ciktiUrun: 999, ciktiUrunMiktari: 0, ciktiUrunBirimi: "Adet" });

  }
  //////////////////////////// END UPDATE ROUTE  İNSİDE BOM   /////////////////////////////////

  gecici_urun_olustur(operasyon, urun, birim, miktar, index) {
    // ürün oluşturuyor bu ürün çıktı ürünüdür miktarı ve birimide oluşyor 
    //"geçici ürün oluştur kısmı")
    //urun.split(","))
    //operasyon.split(','), urun, miktar, birim, index);
    var new_deger = ""
    if (operasyon != "null") {
      new_deger += operasyon.split(',')[2] + "-"
    }
    if (urun != "null") {
      new_deger += urun.split(",")[1];
    } else {
      //"operasyon değişti ama ürün seçilmedi");
      this.sellingPoints.controls[index].patchValue({ girdiUrun: "seciniz" });
    }

    //new_deger);
    this.cikti_urunu_duzenli = new_deger
    this.sellingPoints.controls[index].patchValue({ ciktiUrun: 999, ciktiUrunMiktari: parseInt(miktar), ciktiUrunBirimi: birim });
    //this.sellingPoints.controls[index].value)
    /*
    if(this.sellingPoints.controls.length>1){
      //"buraya girdiş");
      //this.sellingPoints.controls[index+1].value)
      this.sellingPoints.controls[index+1].patchValue({girdiUrun:new_deger,girdiUrunMiktari:parseInt(miktar),girdiUrunBirimi:birim});
    }*/


  }


  // bu kısım route içerisindekiler için eklenmiştir . 

  route_icin_gecici_urun_olustur(operasyon, urun, birim, miktar, index) {
    // ürün oluşturuyor bu ürün çıktı ürünüdür miktarı ve birimide oluşyor 
    //"geçici ürün oluştur kısmı")
    //urun.split(","))
    //operasyon.split(','), urun, miktar, birim, index);
    var new_deger = ""
    if (operasyon != "null") {
      new_deger += this.route_update_operationCode + "-"
    }
    if (urun != "null") {
      new_deger += urun.split(",")[1];
    } else {
      //"operasyon değişti ama ürün seçilmedi");
      this.sellingPoints.controls[index].patchValue({ girdiUrun: "seciniz" });
    }

    //new_deger);
    this.cikti_urunu_duzenli = new_deger
    this.sellingPoints.controls[index].patchValue({ ciktiUrun: 999, ciktiUrunMiktari: parseInt(miktar), ciktiUrunBirimi: birim });
    //this.sellingPoints.controls[index].value)
    /*
    if(this.sellingPoints.controls.length>1){
      //"buraya girdiş");
      //this.sellingPoints.controls[index+1].value)
      this.sellingPoints.controls[index+1].patchValue({girdiUrun:new_deger,girdiUrunMiktari:parseInt(miktar),girdiUrunBirimi:birim});
    }*/


  }

  AddNewProduct(event, productName, productNo, stok_Adedi, nihai_urun_birimi, urunTipi) {
    //this.sellingPoints.value);
    //productName, productNo, stok_Adedi, nihai_urun_birimi, urunTipi);

    if (!urunTipi) {
      this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Adet Giriniz." }
      });
    }
    if (!productName) {
      this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen ürün Adı Giriniz." }
      });
    }
    else {
      const data = {
        "name": productName,
        "no": productNo,
        "createdUserID": this.user_informations.id,
        "facID": this.factory_informations._id,
        "datas": this.sellingPoints.value,
        "quantity": stok_Adedi,
        "productBirim": nihai_urun_birimi,
        "productType": urunTipi
      }
      let options = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('x-access-token', this.user_informations.token)
      };

      this.http.post(this.url + "product", JSON.stringify(data), options).subscribe((val) => {
        //val);
        if (val['data'] != null) {
          setTimeout(() => {
            this.getAllProductionByFactory(1)

            this.dialogRef.close();
          }, 500);
        }
      });
    }
  }
  filterDeleted() {
    this.getAllBomsByFactory()
  }
  filterItem(value) {
    //value);

    //this.bomList.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1))
    this.filteredList = this.rows.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
    this.rows = this.filteredList
    /*
    this.filteredItems = Object.assign([], this.items).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
   */

  }

  AddNewRouteByBom(event, operation, input, input_product_adet, input_product_birim, output, output_product_adet, output_product_birim) {
    //this.selectedBomID);
    if (operation == "0") {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Operation Seçiniz" }
      });
    }

    if (input == "0") {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen giriş Seçiniz" }
      });
    }

    if (output == "0") {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen çıkış Seçiniz" }
      });
    }
    else {
      // this.dialog.open(DialogComponent, { disableClose: true });
      var operationName = operation.split(",")[1]
      var operationID = operation.split(",")[0]
      var inputName = input.split(",")[1]
      var inputID = input.split(",")[0]
      var outputName = output.split(",")[1]
      var outputID = output.split(",")[0]
      this.OperationList = []
      let body = new URLSearchParams();
      body.set("facID", this.factory_informations._id)
      body.set('operationName', operationName);
      body.set('operationID', operationID);
      body.set('inputName', inputName);
      body.set('inputID', inputID);
      body.set('outputName', outputName);
      body.set('outputID', outputID);
      body.set('bomID', this.selectedBomID);
      body.set('input_product_adet', input_product_adet)
      body.set('input_product_birim', input_product_birim)
      body.set('output_product_adet', output_product_adet)
      body.set('output_product_birim', output_product_birim)
      let options = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('x-access-token', this.user_informations.token)
      };
      this.http.post(this.url + "bom/addRouteByBom", body.toString(), options).subscribe((val) => {
        //val);
        if (val['data'] != null) {
          this.getAllBomsByFactory();
          this.getOperationListByFactory();
          this.dialog.closeAll();
        }

      })
    }


  }
  tutorialBaslat() {
    const intro = introJs.introJs();

    intro.setOptions({
      steps: [
        {
          element: '#recete_ekleme_kismi',
          intro: "Fabrikanızdaki Herhangi Bir Ürün için Reçete Tanımlamayabilirsiniz . <br><small>örnek şöyledir .</small><br><img src='assets/gifler/receteekle.gif' width='650px'/>",
          position: 'left'
        },
        {
          element: '#route_ekle_kismi',
          intro: "Belirlenen Reçete Bir route(yol) Ekleyebilirsiniz. <br><small>örnek şöyledir .</small><br><img src='assets/gifler/receterouteekle.gif' width='650px'/>",
          position: 'left'
        }
      ]
    });

    // Start tutorial
    intro.start();
  }
  is_operator: boolean
  getOperationListByFactory() {
    this.is_operator = false
    this.bom_service.get_Operasyon_data().then(result => {

      this.loadingIndicator = false;
      this.OperationList = result

      this.filteredList = this.bomList.reverse()
console.log("operasyon",this.OperationList)
      setTimeout(() => {
        this.is_operator = true;

      }, 500);



    }).catch(err => {
      console.log("err,", err)
    })


  }
  getAllProductionByFactory(data) {
    this.productList = [];
    //data.productID);

    this.is_operator = false
    this.bom_service.get_Operasyon_data().then(result => {

      this.loadingIndicator = false;
      this.OperationList = result

      this.filteredList = this.bomList.reverse()

      setTimeout(() => {
        this.is_operator = true;

      }, 500);



    }).catch(err => {
      console.log("err,", err)
    })
    let body = new URLSearchParams();
    body.set("facID", this.factory_informations._id)
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', this.user_informations.token)
    };

    this.http.post(this.url + "product/getAllByFactory", body.toString(), options).subscribe((val) => {
      //"product")
      //val);
      if (val['data'] != null) {
        for (let index = 0; index < val['data'].length; index++) {
          const element = val['data'][index];
          if (element._id === data.productID) {

          } else {
            this.productList.push(element);
          }



        }
      }
      //"productList")
      //this.productList);

    })
  }
  is_load_data: boolean
  async getAllBomsByFactory() {
    this.is_load_data = false
    this.is_operasyon_data = false
    await this.bom_service.get_all_bom().then(result => {

      this.loadingIndicator = false;
      this.rows = result

      this.filteredList = this.bomList.reverse()

      setTimeout(() => {
        this.is_load_data = true;

      }, 500);


    }).catch(err => {
      console.log("err,", err)
    })



  }

  onSelect({ selected }) {
    //selected)
    ////'Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  newBom: FormGroup;
  onActivate(event) {
    ////'Activate Event', event);
  }

  add_new_bom() {


    const data = {
      "name": this.newBom.value.name,
      "product_id": this.newBom.value.product,
      "facID": this.factory_informations._id,
      "customBom": this.newBom.value.custom_bom,

    }
    this.bom_service.add_bom(data).then(result => {
      console.log(result);

      this.recete_ekran_ac = false;

      this.getAllBomsByFactory();
      this.getProductionWithoutBom();
    }).catch(err => {
      this.recete_ekran_ac = false;
      alert("error from add_new_bom inside bom component")
    })
  }
  is_operasyon_data: boolean
  bomaRoutaEkleme() {
    this.is_operasyon_data = true
    this.is_load_data = false
  }

  AddNewBom(event, bomName, product, customBom) {
    this.selected_productID = product;
    if (!bomName) {
      this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Reçete Adı Giriniz." }
      });
    }
    if (product == "0") {
      this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Ürün Giriniz Eğer ürün yoksa Stok Takibi Sayfasından Önce Ürün EKleyiniz." }
      });
    }
    if (bomName && product != "0") {
      // this.dialog.open(DialogComponent, { disableClose: true });
      let body = new URLSearchParams();

      body.set("name", bomName);
      body.set("productID", product.split(",")[0]);
      body.set("productName", product.split(",")[1]);
      body.set("createdUserID", this.user_informations.id);
      body.set("facID", this.factory_informations._id);
      body.set("customBom", customBom);
      let options = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('x-access-token', this.user_informations.token)
      };
      this.bom_service.add_bom(body).then(result => {
        console.log(result);


      }).catch(err => {

        alert("error from add_new_bom inside bom component")
      })

    }

  }
  updateBom(event, bomName, product) {
    //bomName, product, this.selectedBomID);
    if (!bomName) {
      this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Reçete Adı Giriniz." }
      });
    }
    if (product == "0") {
      this.dialog.open(DialogOverviewExampleDialog, {
        height: 'auto',
        data: { adi: "Giriş Hatası", aciklama: "Lütfen Ürün Giriniz Eğer ürün yoksa Stok Takibi Sayfasından Önce Ürün EKleyiniz." }
      });
    }
    if (bomName && product != "0") {
      // this.dialog.open(DialogComponent, { disableClose: true });
      let body = new URLSearchParams();
      body.set("name", bomName);
      body.set("productID", product.split(",")[0]);
      body.set("productName", product.split(",")[1]);
      body.set("createdUserID", this.user_informations.id);
      body.set("facID", this.factory_informations._id);
      body.set("bomID", this.selectedBomID);
      let options = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('x-access-token', this.user_informations.token)
      };
      this.http.post(this.url + "bom/guncelle", body.toString(), options).subscribe((val) => {
        //val);
        if (val['data'] != null) {
          this.getAllBomsByFactory();
          this.getProductionWithoutBom();
          this.dialog.closeAll();
        }

      })
    }
  }
  deleteBom() {
    // this.dialog.open(DialogComponent, { disableClose: true });
    const data = {
      "bomID": this.selectedBomID
    }
    console.log("adenbedadsaddadadasdadsadgsfdsas")
    this.bom_service.bomSil(data).then(result => {




      this.getAllBomsByFactory();
      this.getProductionWithoutBom();
    }).catch(err => {

      alert("error from add_new_bom inside bom component")
    })


  }
  public toggle(type) {
    this.type1 = type;
  }

  openDialog(content, size) {


    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  close() {
    //"kapatildi");
    this.dialogRef.close();
  }

  receteOlusturEkran() {

    this.is_load_data = false
    this.recete_ekran_ac = true;
  }

}



@Component({
  selector: 'hatalar',
  templateUrl: 'hata.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  close(): void {
    this.dialogRef.close();
  }

}


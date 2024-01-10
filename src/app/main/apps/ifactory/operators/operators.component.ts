import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { IFactoryService } from '../ifactory.service';
import DataSource from 'devextreme/data/data_source';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OperatorsComponent implements OnInit {
  dataSource: DataSource;
  dialogRef: any;
  selected_operatorID: any;
  machine_list: any;
  factory_informations: any;
  selectedPersonelID: string;
  registerForm: any;
  submitted: boolean;
  finded_operators: any;
  selectedMachineID: any;
  error_text1 = null;
  constructor(public ifactory_service: IFactoryService, public dialog: MatDialog, private fb: FormBuilder, ) {
    this.factory_informations = JSON.parse(localStorage.getItem('factory'));
    this.dataSource = new DataSource({
      key: '_id',
      load: async function (loadOptions: any) {
        return await ifactory_service.get_all_operators().then(result => {
          return {
            data: result
          };
        }).catch(err => {
         alert(err);
        });

      }
    });

    this.registerForm = this.fb.group({
      tel: ['', Validators.required],
      pinCode: ['', Validators.required],
      type: ['', Validators.required],
      name: ['', Validators.required],
      email: ['']
    });



  }

  async ngOnInit() {
    await this.ifactory_service.get_factory_machine_list(this.factory_informations._id).then(result => {
     
      this.machine_list = result;
    });
  }



  openDialog(content, size) {
    this.dialogRef = this.dialog.open(content, { height: 'auto', width: '600px' });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  close() {
    this.dialogRef.close();
  }

  selectOperator(operatorID) {
    this.selected_operatorID = operatorID;
  }




  deleteMachineThisPersonel_ts() {
    this.ifactory_service.delete_machine_for_user({ userID: this.selectedPersonelID, facID: this.factory_informations._id, machineID: this.selectedMachineID }).then(result => {

    }).catch(err => {
      alert('err for deleteMachineThisPersonel_ts' + err);
    });

  }
  refreshAllDatas() {
    this.ifactory_service.refresh_factory_data(this.factory_informations._id);

  }


  personele_qr_kod_ekle() {
    this.close();
    this.ifactory_service.add_qr_code_users({ personel_id: this.selectedPersonelID }).then(result => {
      this.dataSource.reload();
      this.ifactory_service.refresh_factory_data(this.factory_informations._id);
    }).catch(err => {
      alert(err);
    });


  }

  searchData(value) {
    this.ifactory_service.search_operator({ personel_name: value }).then(result => {
      this.finded_operators = result;
    }).catch(err => {
      alert('err searchData' + err);
    });

  }





  operatorEkle(event, tel, pincode, adi, email, user) {
    this.submitted = true;
console.log(this.factory_informations['userTypeList'])
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // tel, pincode, email, user_type);
    if (adi === '') {
      alert('Adı Giriniz ');
    }
    if (tel === '') {
      alert('Telefon Numarası Zorunlu ALandır ');
    }
    if (pincode === '') {
      alert('Pin Kodu Zorunlu ALandır');
    }
    if (user === '0') {
      alert('Personel için bir tip seçiniz yoksa ekleyiniz.');
    }
    if (adi !== '' && tel !== '' && pincode !== '') {
      // tel.length);
      if (tel.length <= 11) {
        if (tel.length > 10) {
          // "dogru girdi")
          this.ifactory_service.add_operator({ 
            name: adi, 
            facID: this.factory_informations._id, 
            email: email, 
            pincode: pincode, 
            telephone: tel, 
            user_type: user.split(',')[0], 
            user_typeName: user.split(',')[1] 
          }).then(result => {
            this.dataSource.reload();
            this.close();
          }).catch(err => {
            alert(err);
          });
        } else {
          alert('Telefon NUmarasını başında 0 olacak ve aralarında boşluk koymadan ekleyiniz  ');
          // "lütfen 11 hane ekleyiniz başında 0 olarak")
        }
      } else {
        alert('Lütfen 11 haneli bir telefon no giriniz  başında 0 olacak şekilde ');
      }

    }


  }
  change_machine(selected_machine) {
    this.ifactory_service.check_machine_for_user({ operatorID: this.selectedPersonelID, machineID: selected_machine }).then(result => {
      if (result) {
        this.error_text1 = 'Bu Makina (' + this.machine_list.find(f => f._id === selected_machine).name + ') Daha önce eklenmiş, lütfen başka bir makina seçiniz .';
      }
      else {
        this.error_text1 = null;
      }
    }).catch(err => {
      console.log(err);
    });

  }


  personelGuncelle(event, tel, pincode, adi, email, user) {
    // this.selectedPersonelID);
    // tel, pincode, adi, email, user_type);
    if (tel === '') {
      alert('tel no zorunlu');
    }
    if (pincode === '') {
     alert('Pin Kodu Zorunlu ALandır ');
    }
    if (user === '0') {
      alert('Personel için bir tip seçiniz yoksa ekleyiniz.');
    }
    else {
      if (tel.length <= 11) {
        if (tel.length > 10) {
          this.ifactory_service.update_users_data({ 
            personelID: this.selectedPersonelID, 
            name: adi, facID: this.factory_informations._id, 
            email: email, 
            pincode: pincode, 
            telephone: tel, 
            user_type: user.split(',')[0], 
            user_typeName: user.split(',')[1] 
          }).then(result => {
            this.dialog.closeAll();
            this.dataSource.reload();
          }).catch(err => {
            alert('erro for updateing' + err);
          });
        } else {
         alert('Telefon NUmarasını başında 0 olacak ve aralarında boşluk koymadan ekleyiniz');
        }
      } else {
       alert('ütfen 11 haneli bir telefon no giriniz  başında 0 olacak şekilde ');
      }

    }
  }

  add_machine_to_users(event, macID) {

    if (macID === '0') {
     alert('Eklemeden Önce Lütfen Makina Seçiniz , Eğer Makina yoksa Fabrika/Departman sayfasından ekleyiniz ...');
    }
    else if (this.error_text1) {
      alert(this.error_text1);
    }
    else {

      this.ifactory_service.add_machine_to_operator({userID: this.selected_operatorID, machineName: '', machineID: macID, facID: this.factory_informations._id}).then(result => {
        this.dataSource.reload();
        this.close();
      }).catch(err => {
        alert('add machine error' + err);
      });
     
    }
  }

  delete_user(){
    this.ifactory_service.delete_user({personelID: this.selectedPersonelID}).then(result => {
      this.dataSource.reload();
      this.close();
    }).catch(err => {
      alert('error from delete users');
    });
  }



}

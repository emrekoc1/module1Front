import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { IFactoryService } from '../ifactory.service';
import DataSource from 'devextreme/data/data_source';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ManComponent implements OnInit {
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
  selectedMachineName: any;
  operations_data: any;
  new_field_gerekli = false;
  machines_data: any;
  selected_tab: any;
  workstations_data: any;
  data_is_return: boolean;
  selectedIndex: number;
  selectedMachineStatusName = '';
  selectedMachineStatusId = 0;
  stopreason:any;
  constructor(public ifactory_service: IFactoryService, public dialog: MatDialog, private fb: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute) {
    this.factory_informations = JSON.parse(localStorage.getItem('factory'));
    this.activatedRoute.params.subscribe(data => {

      switch (data.com) {
        case 'm':
          this.selectedIndex = 1;
          break;
        case 'w':
          this.selectedIndex = 2;
          break;
        case 'o':
        default:
          this.selectedIndex = 0;
          break;
      }
      console.log(data);
    });

    this.registerForm = this.fb.group({
      operationName: ['', Validators.required],
      operationNum: ['', Validators.required],
      operationType: ['', Validators.required],
      operationDay: ['', Validators.required],
      operationHour: ['', Validators.required],
      operationSecond: ['', Validators.required],
      operationMinute: ['', Validators.required],
      operationWorkStation: ['', Validators.required],
    });



  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }


  go_to_update_operation(id) {
    this.router.navigate(['/apps/ifactory/update_operation', { id: id }]);
  }
  go_to_update_machine(id) {
    this.router.navigate(['/apps/ifactory/update_machine', { id: id }]);
  }
  go_to_update_work_station(id) {
    this.router.navigate(['/apps/ifactory/update_work_station', { id: id }]);
  }

  async ngOnInit() {
    await this.get_all_data();
  }

  async get_all_data() {
    this.ifactory_service.get_all_data_for_operations_page({ facID: this.factory_informations._id }).then(result => {
      console.log(result);
      if (result['operations'] && result['machines'] && result['work_stations']) {
        this.operations_data = result['operations'].reverse();
        this.machines_data = result['machines'].reverse();
        this.workstations_data = result['work_stations'].reverse();
        this.data_is_return = true;
      } else {
        console.log('data yok');
      }


    }).catch(err => {
      console.log('burası');
      console.log(err);
      alert(err);
    });

    await this.ifactory_service.get_factory_machine_list(this.factory_informations._id).then(result => {

      this.machine_list = result;
    });
  }
  async get_machine_stop() {
    this.ifactory_service.getStopName({ facID: this.factory_informations._id }).then(result => {
      console.log(result);
    this.stopreason = result


    }).catch(err => {
      console.log('burası');
      console.log(err);
      alert(err);
    });

    await this.ifactory_service.get_factory_machine_list(this.factory_informations._id).then(result => {

      this.machine_list = result;
    });
  }
  change_machine_status(event, id, status) {
    console.log(event);
    this.ifactory_service.change_machine_status({ machine_id: id, status: status }).then(async result => {
      await this.get_all_data();
    }).catch(err => {
      alert(err);
    });
  }

  openDialog(content, size) {
    this.dialogRef = this.dialog.open(content, { height: 'auto', width: 'auto' });

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
    this.ifactory_service.delete_machine_for_user({ 
      userID: this.selectedPersonelID, 
      facID: this.factory_informations._id, 
      machineID: this.selectedMachineID 
    }).then(result => {

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





  operatorEkle(event, tel, pincode, adi, email, user_type) {
    this.submitted = true;

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
    if (user_type === '0') {
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
            user_type: user_type.split(',')[0], 
            user_typeName: user_type.split(',')[1] 
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

    }).catch(err => {
      console.log(err);
    });

  }


  personelGuncelle(event, tel, pincode, adi, email, user_type) {
    // this.selectedPersonelID);
    // tel, pincode, adi, email, user_type);
    if (tel === '') {
      alert('tel no zorunlu');
    }
    if (pincode === '') {
      alert('Pin Kodu Zorunlu ALandır ');
    }
    if (user_type === '0') {
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
            user_type: user_type.split(',')[0], 
            user_typeName: user_type.split(',')[1] 
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
    else {

      this.ifactory_service.add_machine_to_operator({ userID: this.selected_operatorID, machineName: '', machineID: macID, facID: this.factory_informations._id }).then(result => {
        this.dataSource.reload();
        this.close();
      }).catch(err => {
        alert('add machine error' + err);
      });

    }
  }

  delete_user() {
    this.ifactory_service.delete_user({ personelID: this.selectedPersonelID }).then(result => {
      this.dataSource.reload();
      this.close();
    }).catch(err => {
      alert('error from delete users');
    });
  }



}

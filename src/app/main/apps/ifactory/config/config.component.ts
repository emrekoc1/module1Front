import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IFactoryService } from '../ifactory.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ConfigComponent implements OnInit {

  public searchText: string;

  public id: String;
  public form: FormGroup;
  title = '';
  type = "success";
  message = '';
  version = VERSION;
  private lastInserted: number[] = [];


  DepartmanTable :any=[];

  factoryRef = "/Factory";
  factoryTable: Observable<any[]>;


  userRef = "/User";
  userTable: Observable<any[]>;




  public type1: string = 'grid';
  public hata: string;
  public hesap: any;
  dialogRef: any;
  public ogretmen_kismi: boolean;

  selected_factoryID;
  selected_departmantID;
  selected_machineID;
  selected_operationID;

  selected_factoryName;
  selected_departmantName;
  selected_machineName;
  selected_operationName;

  onLangChange;

  public sadece_adi_ile: boolean = false;

  public url = localStorage.getItem("work_url");
  public user_informations;
  public factory_list = [];
  dataSource:any;
  public departmant_list :any= [];
  factory_informations: any;
  public guncellenecek_departmanName;
  public workStationList = [];
  public isDisabled: boolean = false;
  public selectedWorkStationID;
  public selectedWorkStationName;
  public giren_kisiye_gore: boolean;
  public sayfanin_adi = "Fabrika Sayfası"
  ikinci_user_bu_sayfayi_kullanabilirmi: boolean;

  public u_machineName;
  public u_machineNo;
  public u_machineCihazNO;
  public u_machineSpeedLineMin;
  public u_machineSpeedLineMax;
  public u_machineStopTimeMin;
  public u_machineStopTimeMax;
  public u_machinedescription;
  dept_with_work_and_machine: any;

  registerForm: any;
  constructor(public ifactory_service : IFactoryService,public dialog: MatDialog, public fb: FormBuilder, private http: HttpClient, public dialog1: MatDialog) {


    this.user_informations = JSON.parse(localStorage.getItem("currentUser"));
    this.factory_informations = JSON.parse(localStorage.getItem("factory"));
    this.dept_with_work_and_machine = JSON.parse(localStorage.getItem('dept_with_work_and_machine'));
    console.log(this.factory_informations);
 


    this.registerForm = this.fb.group({
      tel: ['', Validators.required],
 
     
    });
  }





  async ngOnInit() {
    // factory departman getir
   
    Promise.all([ await this.get_factory_departmants()])


  }

  async get_factory_departmants(){
    return new Promise((resolve,reject)=>{
      this.ifactory_service.get_all_departmants().then(result=>{
        this.departmant_list=result
      }).catch(err=>{
        console.log(err);
      })
    })
  }


  ngAfterViewInit(): void {

  }
  openDialog(content, size) {
    this.dialogRef = this.dialog.open(content, { height: 'auto', width: '600px' });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  close() {
    this.dialogRef.close();
  }
  addDep(event,name){
    //this.selected_factoryID);
    //name);
    let userID = this.user_informations.id;
   console.log(name,this.user_informations)
      this.ifactory_service.add_departmants({'name':name,'facID':this.factory_informations._id,'createdUserId':this.user_informations._id}).then(result => {
       this.get_factory_departmants();
        
        this.close();
      }).catch(err => {
        alert('a' + err);
      });
    
    
    
  }
 
 

}

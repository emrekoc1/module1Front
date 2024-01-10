import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { FileManagerService } from '../file-manager.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../stock/stock.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { AnyARecord } from 'dns';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
    selector: 'egitim-detail',
    templateUrl: './egitim-detail.html',
    styleUrls: ['./egitim-detail.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
    
})
export class EgitimDetailComponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    icerik:any
    data_geldi = false
    user_id : any
    anket_id : any
    constructor(public dialog: MatDialog,private route: ActivatedRoute,
        private _snackBar: MatSnackBar,
        public duyruservice: FileManagerService,
        public stock_service: StockService,
        private fb: FormBuilder,
        public router: Router) {
       
        this.user_id = JSON.parse(localStorage.getItem("currentUser"))._id,
        this.anket_id = this.route.snapshot.paramMap.get('id');
           

    }
   



   
icerikDuzenle(){
    this.icerik.forEach(element => {
        
    });
}

    ngOnInit(): void { 
     
   
    }
departman:any 
    
    soruTipi:any

dataTamamlandi : any
goruntule(){
    

}

    check_code(code) {

    }
   
    addBatch() {

     
     
    }
}
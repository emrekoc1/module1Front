import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { TalepService } from '../talep.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';

@Component({
    selector: 'app-add-talep',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AddTalepBakimComponent implements OnInit {
    batchForm: FormGroup;
    factory_informations: any;
    is_click = true;
    
    
    constructor(public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        public TalepService: TalepService,
        private fb: FormBuilder,
        public router: Router) {
       
            
              
       
        this.batchForm = this.fb.group({
            header: [null, Validators.required],
            birim: [null, Validators.required],
            description: [null, Validators.required],
            _id: [null, Validators.required],
          
          

        });
    }

   

   

  
    onValueChanged(e) {
       
    }

  

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'my_snacbar_class'
        });
    }


    ngOnInit(): void { }
    get sellingPoints() {
        return this.batchForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
    }



    check_code(code) {

    }
   
    addBatch() {
        this.is_click = true;
           const data = {
            description: this.batchForm.value.description,
            header: this.batchForm.value.header,
            birim: this.batchForm.value.header,
            _id: JSON.parse(localStorage.getItem("currentUser"))._id,
            email:JSON.parse(localStorage.getItem("currentUser")).email
        };
        console.log(data);


        this.TalepService.post_talep(data).then(result => {
            console.log(result)
            if (result['status'] != '200') {
               
                this.is_click = false;
            } else {
                
                const data2 = {
                    'batch_id': result['data']._id,
                };
                                
            }

        }).catch(err => {
            alert(err);
        });

    }
}
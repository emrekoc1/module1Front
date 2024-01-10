import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { MachineRaporServis } from './machineRapor.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-machine-rapor',
    templateUrl: './machineRapor.component.html',
    styleUrls: ['./machineRapor.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class MachineRaporComponent implements OnInit {
    dataSource: DataSource;
    dialogRef: any;
    public productForm: FormGroup;
    selectedBatchId: any;

    rows: any;

    filterText = null;

    constructor(
        public machineRaporServis: MachineRaporServis,
        public dialog: MatDialog,
        private fb: FormBuilder,
        public router: Router
    ) {
        this.tabloVardiyalar()
    
    }
    is_data_load:boolean= false;
    machines:any = []
        async tabloVardiyalar() {
        this.is_data_load = false;
    
        await this.machineRaporServis.get_all_machine().then(result => {
          this.machines = result;
          this.is_data_load = true;
        }).catch(err => {
          console.log("err,", err)
        })
      }
    ngOnInit(): void {
        this.tabloVardiyalar()
        console.log(this.machines.data)
    }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { MontageService } from '../montage.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class BomComponent implements OnInit {

  bomForm: FormGroup;
  factory: any;
  currentUser: any;
  selectedBomId: any;
  selectedBomData: any;

  public url = localStorage.getItem('work_url');
  newBomList: any[];
  newBomForm: FormGroup;
  dialogRef: any;
  searchModeOption = 'contains';
  searchExprOption: any = 'name';
  searchTimeoutOption = 200;
  minSearchLengthOption = 0;
  showDataBeforeSearchOption = false;
  searchExprOptionItems: Array<any> = [{
    name: '\'name\'',
    value: 'name'
  }];
  operations: any;
  products: any;
  input_model: any;
  input_data: any;
  selected_input_id: any;
  selected_operation_id: any;
  selected_route_id: any;

  dataSource: DataSource;
  constructor(public router: Router, private fb: FormBuilder, public montageService: MontageService, public dataService: DataService, public dialog: MatDialog) {
    this.factory = JSON.parse(localStorage.getItem('factory'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.dataSource = new DataSource({
      key: '_id',
      load: async function (loadOptions: any) {
        return await montageService.get_all_montage_boms().then(result => {
          console.log(result);
          return {
            data: result
          };
        }).catch(err => {
          alert(err);
        });

      }
    });



  }



  ngOnInit(): void {
  }

  openNewBomUpdateDialog(id, updatedialog): void {
    this.selectedBomId = id;

    this.montageService.get_single_montage_bom({ bom_id: this.selectedBomId }).then(result => {
      console.log(result);
      this.selectedBomData = result;
      this.initBomFormGroup();
      this.bomForm.setValue({
        name: result['data']['name'],
        type: result['data']['bom_type'],
      });
      this.openDialog(updatedialog, 'auto');
    });
  }

  initBomFormGroup(): void {
    this.bomForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  openDialog(content, size): void {
    this.dialogRef = this.dialog.open(content, { height: 'auto', width: '75%' });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }


}

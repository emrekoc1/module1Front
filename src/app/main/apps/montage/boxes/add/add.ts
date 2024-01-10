import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit, Inject } from '@angular/core';
import { BoxesService } from '../../../boxes/boxes.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import moment from 'moment';

@Component({
  selector: 'app-add-boxes',
  templateUrl: './add.html',
  styleUrls: ['./add.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class AddBoxesComponent implements OnInit {
  productForm: FormGroup;
  newboxes: FormGroup;
  factory: any;
  isClick = false;
  dialogRef: any;
  boxCapacityList = [10, 24, 30, 35];

  constructor(public dialog: MatDialog, public boxesService: BoxesService, private fb: FormBuilder, public router: Router) {
    this.factory = JSON.parse(localStorage.getItem('factory'));

    this.newboxes = this.fb.group({
      box_type: ['1', Validators.required],
      capacity: ['', Validators.required],
      quantity: [1, Validators.required]
    });

  }

  ngOnInit(): void { }

  openDialog(content, size): void {
    this.dialogRef = this.dialog.open(content, { height: 'auto', width: '90%' });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  add_new_boxes(): void {
    this.isClick = true;
    const liste = [];

    for (let index = 0; index < this.newboxes.value.capacity; index++) {
      liste.push({ cellNo: index, status: 0, reason: null, time: 1232131, machineID: 'null', machineName: 'null', operatorID: 'null', operatorName: 'null' });

    }
    const data = {
      color: 'blue',
      productionOrderID: 'eklenmedi',
      productID: 'eklenmedi',
      status: 0,
      code: 0,
      machineID: 'eklenmedi',
      machineName: 'eklenmedi',
      operationID: 'eklenmedi',
      operationName: 'eklenmedi',
      workStation: 'eklenmedi',
      quantity: 0,
      wastage: 0,
      facID: this.factory._id,
      produced: 0,
      rework: 0,
      capacity: this.newboxes.value.capacity,
      BomList: [],
      cells: liste,
      adet: this.newboxes.value.quantity,
      box_type: this.newboxes.value.box_type
    };
    this.boxesService.add_multiple_boxes(data).then(result => {
      if (result['status'] === 200) {
        this.isClick = false;
        this.dialogRef = this.dialog.open(AddedBoxListComponent, {
          data: {
            boxes: result['data']
          },
          height: '90%',
          width: '90%',
        });
      }
    }).catch(err => {
      alert(err);
    });

  }

}

@Component({
  templateUrl: './added_boxes_list.html',
  styleUrls: ['../boxes.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class AddedBoxListComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddedBoxListComponent>) { }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
  

  async print(): Promise<void> {
    const data = document.getElementById('printable');
    const noprint = document.getElementById('noprint');
    noprint.classList.add('noprint');

    const pdf = new jsPDF({ orientation: 'l', unit: 'mm', format: 'a4' });
    
    const qrcodeMaxW = 67.5; // 90; // 56.25;
    const qrcodeMaxH = 45; // 60; // 37.5;

    const margins = [15, 15]; // heigth, width

    const maxRow = parseInt((((210 - (margins[0] * 2) + 1) / qrcodeMaxH)).toString(), 10);
    const maxCol = parseInt((((297 - (margins[1] * 2) + 1) / qrcodeMaxW)).toString(), 10);

    let page = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let r = 0; r < maxRow; r++) {
      for (let c = 0; c < maxCol; c++) {
        const index = ((r * maxCol) + c) + (page * maxRow * maxCol);
        if (index >= data.children.length) {
          r = maxRow; break;
        }

        await html2canvas(data.children.item(index) as HTMLElement).then(canvas => {
          const contentDataURL = canvas.toDataURL('image/png');
          pdf.addImage(contentDataURL, 'PNG', (c * qrcodeMaxW) + margins[1], (r * qrcodeMaxH) + margins[0], qrcodeMaxW, qrcodeMaxH);
        });

        if (c + 1 >= maxCol && r + 1 >= maxRow) {
          pdf.addPage('a4', 'l');
          page++;
          r = -1;
        }
      }
    }
    pdf.save(moment().format('YYYY-MM-DD-HH-mm-ss') + '.pdf'); // Generated PDF   
    noprint.classList.remove('noprint');

  }
}

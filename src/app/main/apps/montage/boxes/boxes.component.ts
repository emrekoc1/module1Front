import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { BoxesService } from '../../boxes/boxes.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import moment from 'moment';

@Component({
  selector: 'app-montage-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class MontageBoxesComponent implements OnInit {
  dataSource: DataSource;
  dialogRef: any;
  factory: any;
  allBoxes: any;

  boxCapacity = [
    { label: '10 lu', value: 10 },
    { label: '24 lü', value: 24 },
    { label: '30 lu', value: 30 },
    { label: '35 li', value: 35 }
  ];
  filterForm: FormGroup;
  filteredBoxes: any;
  public isClick = false;
  constructor(public boxesService: BoxesService, public dialog: MatDialog, private fb: FormBuilder, public router: Router) {
    this.factory = JSON.parse(localStorage.getItem('factory'));

    this.filterForm = this.fb.group({
      capacity: ['', Validators.required],
    });

  }

  gotoDynamic(id): void {
    this.router.navigate(['/apps/boxes/update_boxes', { id: id }]);

    // this.router.navigateByUrl('/apps/boxes/update_boxes', { state:{'a':"merhaba"} });
  }

  async ngOnInit() {
    this.boxesService.get_all_box(1).then(result => {
      this.allBoxes = result;
      this.filteredBoxes = result;
    }).catch(err => {
      alert(err);
    });
  }

  openDialog(content, size): void {
    this.dialogRef = this.dialog.open(content, { height: 'auto', width: '90%' });

    this.dialogRef.afterClosed().subscribe(result => { });
  }
  close(): void {
    this.dialogRef.close();
  }

  getBoxesWithFilter(): void {
    this.isClick = true;
    const data = {
      facID: this.factory._id,
      capacity: this.filterForm.value.capacity,
      box_type: 0
    };
    this.boxesService.getBoxesWithCapacity(data).then(result => {
      console.log(result);
      this.filteredBoxes = result;
      this.isClick = false;
    }).catch(err => {
      alert(err);
    });
  }

  getTodayBoxes(): void {
    const data = {
      facID: this.factory._id,
      boxType: 1
    };
    this.boxesService.getTodayBoxes(data).then(result => {
      console.log(result);
      this.filteredBoxes = result;
    });
  }

  getLast20Box(): void {
    const data = {
      facID: this.factory._id,
      quantity: 20,
      boxType: 1
    };
    this.boxesService.get_last_boxes_with_quantity(data).then(result => {
      console.log(result);
      this.filteredBoxes = result;
    });
  }

  getLast20ErrorBox(): void {
    const data = {
      facID: this.factory._id,
      quantity: 20,
      boxType: 0,
      status: 999
    };
    this.boxesService.get_boxes_with_status(data).then(result => {
      console.log(result);
      this.filteredBoxes = result;
    });
  }

  async print(): Promise<void> {
    const data = document.getElementById('printable');
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

  }

}

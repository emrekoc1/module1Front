import { Component, OnInit, ViewEncapsulation, AfterContentInit, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { StopCategoriesService } from './stop_categories.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';
import { tr } from 'date-fns/locale';
@Component({
  selector: 'app-stop_categories',
  templateUrl: './stop_categories.component.html',
  styleUrls: ['./stop_categories.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class StopCategoriesComponent implements OnInit {
  dataSource: DataSource;
  dataSourceLoaded = false;
  tabIndex = 0;
  stopCategories = [];

  dialogRef: any;
  public productForm: FormGroup;
  MachineList: any;

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  factory_informations: any;
  selected_stop_categoryID: any;
  selected_stop_reason_id: any;

  constructor(
    public stop_service: StopCategoriesService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public router: Router) {

    this.factory_informations = JSON.parse(localStorage.getItem('factory'));

    this.productForm = this.fb.group({
      selling_points: this.fb.array([this.fb.group({ adi: '', birim: '', deger: '', tolerans1: '', tolerans2: '' })])
    });

    this.filter_data_source({ index: this.tabIndex });
  }

  gotoDynamic(id): void {
    this.router.navigate(['/apps/stock/update_stock', { id: id }]);

    // this.router.navigateByUrl('/apps/stock/update_stock', { state:{'a':"merhaba"} });
  }

  async ngOnInit(): Promise<void> {
  }

  async filter_data_source(event): Promise<void> {
    if (!event) { return; }
    this.tabIndex = event.index;
    this.dataSourceLoaded = false;
    console.log("event",event)
    this.dataSource = new DataSource({
      key: '_id',
      load: (loadOptions: any) => {
        const res = this.stop_service.getAllByFactory(this.tabIndex).then((result: any[]) => {
          console.log(result);
          return {
            data: result
          };
        }).catch(err => {
          alert(err);
        });

        return res;
      },
      select: [
        'type',
      ],
      onLoadingChanged: (isLoading: any) => {
        if (!isLoading) {
          this.dataSourceLoaded = true;
        }
      }
    });
    //this.dataSource.load();
    this.dataSourceLoaded = true;

  }

  async delete_stop_reason_from_stop_category(): Promise<void> {
    // (this.selected_stop_reason_id)
    this.stop_service.delete_stop_reason({ stop_category_id: this.selected_stop_categoryID, stop_reason_id: this.selected_stop_reason_id }).then(result => {
      this.dataSource.reload();
      this.close();
    }).catch(err => {
      alert(err);
    });
  }

  get sellingPoints(): FormArray {
    return this.productForm.get('selling_points') as FormArray; // Eklenen Dataları Anlık Olarak buradan çekiyor
  }
  addSellingPoint(): void {
    this.sellingPoints.push(this.fb.group({ adi: '', birim: '', deger: '', tolerans1: '', tolerans2: '' }));
  }
  deleteSellingPoint(index): void {
    if (index !== 0) {
      this.sellingPoints.removeAt(index); // birşeyi silmek istiyorsak onu ifade ediyor 

    } else {
      alert('bu alan boş geçilemez');
    }

  }

  openDialog(content, height, width): void {
    this.dialogRef = this.dialog.open(content, { height: height, width: width });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  close(): void {
    this.dialogRef.close();
  }


  new_add_stop_reason_by_stop_category_ts(event, name, kod, minsure, minsurebirim, maxsure, maxsurebirim): void {
    // event, name, kod, minsure, minsurebirim, maxsure, maxsurebirim);
    // this.selected_stop_categoryID);

    const data = {
      facID: this.factory_informations._id,
      stop_catergoryID: this.selected_stop_categoryID,
      name: name,
      kod: kod,
      type: 0,
      minsure: minsure,
      minsurebirim: minsurebirim,
      maxsure: maxsure,
      maxsurebirim: maxsurebirim
    };
    this.stop_service.add_stop_reason(data).then(result => {
      // (result);
      this.close();
      this.dataSource.reload();
    }).catch(err => {
      alert(err);
    });


  }

  delete_stop_category(): void {
    console.log(this.selected_stop_categoryID);
    this.stop_service.delete_stop_category({ category_id: this.selected_stop_categoryID }).then(result => {
      this.close();
      this.dataSource.reload();
    }).catch(err => {
      alert(err);
    });
  }


  go_to_update_stop_category(id): void {
    this.router.navigate(['/apps/stop_categories/update', { id: id }]);
  }


}

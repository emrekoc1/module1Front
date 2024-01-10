import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.componenet.html',
  styleUrls: ['./detail-view.componenet.scss'],
  providers: [],
})
export class DetailViewComponent implements AfterViewInit {
  @Input() key: number;

  @Input() rowData: object;

 

  productIdBySupplier: number;

  productsData: DataSource;

  orderHistoryData: DataSource;

  constructor() {
    console.log(this.key)
  }

  ngAfterViewInit() {
    this.productsData = new DataSource({
     
    });
  }

  setDefaultProduct(items) {
    const firstItem = items[0];

    if (firstItem && this.productIdBySupplier === undefined) {
      this.productIdBySupplier = firstItem.ProductID;
    }
  }

  handleValueChange(e: any) {
    this.productIdBySupplier = e.value;
   
    
  }

  customizeItemTemplate(item: any) {
    item.template = 'formItem';
  }
}

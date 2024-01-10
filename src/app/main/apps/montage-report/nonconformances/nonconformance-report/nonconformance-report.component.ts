import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { fuseAnimations } from '@fuse/animations';
import { MontageReportService, ReportPostUrls, ReportPutUrls } from '../../montage-report.service';
import { DiscrepancyDialog } from './discrepancy/discrepancy-dialog.component';
import ArrayStore from "devextreme/data/array_store";
import { PartDialog } from './parts/part-dialog.component';

@Component({
  selector: 'app-nonconformance-report',
  templateUrl: './nonconformance-report.html',
  animations: fuseAnimations
})
export class NonconformanceReport implements OnInit {

  sent_id: string | null;

  reportForm: FormGroup;
  dispositionForm: FormGroup;

  discrepanciesDataSource: DataSource;
  discStore: ArrayStore;

  partsDataSource: DataSource;
  partsStore: ArrayStore;

  constructor(public router: Router, public route: ActivatedRoute,
    private montajReports_service: MontageReportService,
    private fb: FormBuilder, public dialog: MatDialog) {

    this.route.params.subscribe(params => {
      this.sent_id = params['id'] ? params['id'] : null;
    });


  }

  ngOnInit(): void {
    this.montajReports_service.nonconformance_post_request({ 'id': this.sent_id }, ReportPostUrls.getById)
      .then(res => {
        console.log(res[0].report)
        const resp = res[0].report;

        this.discStore = new ArrayStore({
          key: "no",
          data: resp.discrepancies ? resp.discrepancies : []
        })
        this.discrepanciesDataSource = new DataSource({
          store: this.discStore
        })

        this.partsStore = new ArrayStore({
          key: "partNo",
          data: resp.disposition && resp.disposition.replacedParts ? resp.disposition.replacedParts : []
        })
        this.partsDataSource = new DataSource({
          store: this.partsStore
        })

        this.reportForm = this.fb.group({
          reportType: resp.reportType,
          noticeNumber: resp.noticeNumber,
          stockNo: resp.stockNo,
          revisionNumber: resp.revisionNumber,
          serialNumber: resp.serialNumber,
          partDescription: resp.partDescription,
          operationNumber: resp.operationNumber,
          project: resp.proje,
          supplierCode: resp.supplierCode,
          workOrderNumber: resp.workOrderNumber,
          lotSize: resp.lotSize,
          sampleSize: resp.sampleSize,
          rejectQuantity: resp.rejectQuantity,
          sampleRejectQuantity: resp.sampleRejectQuantity,
          quality: resp.quality,
          manufacturing: resp.manufacturing,
          purchasing: resp.purchasing,
          customer: resp.customer,
          responsibleDepartment: resp.responsibleDepartment,
          updatedDate: resp.updatedDate,
          createdUser: resp.createdUser,
          createdDate: resp.createdDate,
          reportDate: resp.reportDate ? new Date(parseInt(resp.reportDate)) : null,
          reportClosingDate: resp.reportClosingDate ? new Date(parseInt(resp.reportClosingDate)) : null,

          immediateActionPlan: resp.disposition ? resp.disposition.immediateActionPlan : null,
          definitiveActionPlan: resp.disposition ? resp.disposition.definitiveActionPlan : null,
          decisionByCustomer: resp.disposition ? resp.disposition.decisionByCustomer : null,

        })

        this.dispositionForm = this.fb.group({
          //Disposition Section
          materialReviewBoard: resp.disposition ? resp.disposition.materialReviewBoard : false,
          materialReviewBoardNo: resp.disposition ? resp.disposition.materialReviewBoardNo : null,
          //  düzenleyici onleyici faaliyet acilacak mi açılmayacak mi
          cap: resp.disposition ? resp.disposition.cap : false,
          capNo: resp.disposition ? resp.disposition.capNo : null,
          dispositionDate: resp.disposition ? new Date(parseInt(resp.disposition.dispositionDate)) : null,
          // ogk / use-as-is-qty (olduğu gibi kullan)
          useAsIsQuantity: resp.disposition ? resp.disposition.useAsIsQuantity : null,
          // geçersiz
          voidQuantity: resp.disposition ? resp.disposition.voidQuantity : null,
          // yeniden işlem
          reworkQuantity: resp.disposition ? resp.disposition.reworkQuantity : null,
          // onarım
          repairQuantity: resp.disposition ? resp.disposition.repairQuantity : null,
          // hurda
          scrapQuantity: resp.disposition ? resp.disposition.scrapQuantity : null,
          // iade
          returnQuantity: resp.disposition ? resp.disposition.returnQuantity : null,
          // değiştirilen parça ve takımlar
        })

        this

      }).catch(() => {

      })


  }

  submitReport() {
    this.reportForm.patchValue({
      reportDate: this.reportForm.value.reportDate ? this.reportForm.value.reportDate.valueOf() : null,
      reportClosingDate: this.reportForm.value.reportClosingDate ? this.reportForm.value.reportClosingDate.valueOf() : null
    })

    this.dispositionForm.patchValue({
      dispositionDate: this.dispositionForm.value.dispositionDate ? this.dispositionForm.value.dispositionDate.valueOf() : null,
    })

    const data = {
      ...this.reportForm.value,
      disposition: {
        ...this.dispositionForm.value,
        replacedParts: this.partsDataSource.items(),
      },
      discrepancies: this.discrepanciesDataSource.items(),
    }

    console.log(data)
    this.montajReports_service.nonconformance_put_request({id: this.sent_id, report: data}, ReportPutUrls.updateById)
      .then(() => {
        this.router.navigate(['/apps/montaj_rapor/nonconformances']);
      })
  }

  openDiscrepancyDialog(discrepancyForm, isEdit: boolean): void {
    console.log(discrepancyForm)
    let dialogRef = this.dialog.open(DiscrepancyDialog, {
      panelClass: 'todo-list-form-dialog',
      data: {
        discrepancyForm: discrepancyForm,
      }
    });

    dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];

        if (!isEdit) {
          this.discStore.insert(formData.value)
            .then(
              (dataObj) => { this.discStore.push([{ type: "insert", data: dataObj, index: -1 }]) },
              (error) => { console.log(error) }
            );
        } else {
          this.discStore.update(discrepancyForm.no, formData.value)
            .then(
              (dataObj) => {
                this.discStore.push([{ type: "update", data: dataObj, key: discrepancyForm.no }]);
              },
              (error) => { console.log(error) }
            );
        }
      });
  }

  deleteDiscrepancy(no): void {
    if (!confirm("Öğeyi silmek istediğinize emin misiniz?")) { return; }
    this.discStore.remove(no)
      .then(
        (key) => { this.discStore.push([{ type: "remove", key: key }]); },
        (error) => { console.log(error) }
      );
  }

  openPartsDialog(partForm, isEdit: boolean): void {
    let dialogRef = this.dialog.open(PartDialog, {
      panelClass: 'todo-list-form-dialog',
      data: {
        partForm: partForm,
      }
    });

    dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];

        if (!isEdit) {
          this.partsStore.insert(formData.value)
            .then(
              (dataObj) => { this.partsStore.push([{ type: "insert", data: dataObj, index: -1 }]) },
              (error) => { console.log(error) }
            );
        } else {
          this.partsStore.update(partForm.partNo, formData.value)
            .then(
              (dataObj) => {
                this.partsStore.push([{ type: "update", data: dataObj, key: partForm.partNo }]);
              },
              (error) => { console.log(error) }
            );
        }
      });
  }

  deletePart(partNo): void {
    if (!confirm("Öğeyi silmek istediğinize emin misiniz?")) { return; }
    this.partsStore.remove(partNo)
      .then(
        (key) => { this.partsStore.push([{ type: "remove", key: key }]); },
        (error) => { console.log(error) }
      );
  }


}

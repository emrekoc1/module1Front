import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { fuseAnimations } from '@fuse/animations';
import { MontageReportService, ReportPostUrls, ReportPutUrls } from '../../montage-report.service';
import ArrayStore from "devextreme/data/array_store";
import { NonConformanceDialog } from './nonconformance/nonconformance-dialog.component';


@Component({
  selector: 'app-nonconformance-form',
  templateUrl: './nonconformance-form.component.html',
  styleUrls: ['./nonconformance-form.component.scss'],
  animations: fuseAnimations
})
export class NonconformanceForm implements OnInit {

  sent_id: string | null;

  formForm: FormGroup;
  materialReviewBoardForm: FormGroup;

  nonconformancesDataSource: DataSource;
  nonconfStore: ArrayStore;

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
        const resp = res[0].form;

        this.nonconfStore = new ArrayStore({
          key: "reworkOrderNumber",
          data: resp.details ? resp.details : []
        })
        this.nonconformancesDataSource = new DataSource({
          store: this.nonconfStore
        })

        this.formForm = this.fb.group({
          orderNumber: resp.orderNumber,
          stockNumber: resp.stockNumber,
          // uygunsuzluk adeti
          numberOfIncompatibility: resp.numberOfIncompatibility,
          serialNumber: resp.serialNumber,
          workOrderNumber: resp.workOrderNumber,
          revisionNumber: resp.revisionNumber,
          operationNumber: resp.operationNumber,
          department: resp.department,
          partDescription: resp.partDescription,
          stage: resp.stage,

          reasonForNonconformance: resp.reasonForNonconformance,
          cap: resp.cap,
          capNo: resp.capNo,
          responsibleUserForQuality: resp.responsibleUserForQuality,
          reportClosingDate: resp.reportClosingDate ? new Date(parseInt(resp.reportClosingDate)) : null,

          createdDate: new Date(parseInt(resp.createdDate)),
          createdUser: resp.createdUser,
          uygunsuzlukBildirimNo: null

        })

        this.materialReviewBoardForm = this.fb.group({
          //Disposition Section
          finalDecision: resp.materialReviewBoard ? resp.materialReviewBoard.finalDecision : null,
          responsibleUserForProcect: resp.materialReviewBoard ? resp.materialReviewBoard.responsibleUserForProcect : null,
          responsibleUserForQuality: resp.materialReviewBoard ? resp.materialReviewBoard.responsibleUserForQuality : null,
          responsibleUserForInputQuality: resp.materialReviewBoard ? resp.materialReviewBoard.responsibleUserForInputQuality : null,
          responsibleUserForPlanning: resp.materialReviewBoard ? resp.materialReviewBoard.responsibleUserForPlanning : null,
          responsibleUserForPurchasing: resp.materialReviewBoard ? resp.materialReviewBoard.responsibleUserForPurchasing : null,

        })

      }).catch(() => {

      })


  }

  submitReport() {
    this.formForm.patchValue({
      createdDate: this.formForm.value.createdDate ? this.formForm.value.createdDate.valueOf() : null,
      reportClosingDate: this.formForm.value.reportClosingDate ? this.formForm.value.reportClosingDate.valueOf() : null
    })

    const data = {
      ...this.formForm.value,
      details: this.nonconformancesDataSource.items(),
      materialReviewBoard: this.materialReviewBoardForm.value
    }

    this.montajReports_service.nonconformance_put_request({ id: this.sent_id, form: data }, ReportPutUrls.updateById)
      .then(() => {
        this.router.navigate(['/apps/montaj_rapor/nonconformances']);
      })
  }

  openNonConformanceDialog(dataForm, isEdit): void {
    console.log(dataForm)
    let dialogRef = this.dialog.open(NonConformanceDialog, {
      panelClass: 'todo-list-form-dialog',
      data: {
        dataForm: dataForm,
      }
    });

    dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];

        if (!isEdit) {
          this.nonconfStore.insert(formData.value)
            .then(
              (dataObj) => { this.nonconfStore.push([{ type: "insert", data: dataObj, index: -1 }]) },
              (error) => { console.log(error) }
            );
        } else {
          this.nonconfStore.update(dataForm.reworkOrderNumber, formData.value)
            .then(
              (dataObj) => {
                this.nonconfStore.push([{ type: "update", data: dataObj, key: dataForm.reworkOrderNumber }]);
              },
              (error) => { console.log(error) }
            );
        }
      });
  }

  deleteNonconformance(no): void {
    if (!confirm("Öğeyi silmek istediğinize emin misiniz?")) { return; }
    this.nonconfStore.remove(no)
      .then(
        (key) => { this.nonconfStore.push([{ type: "remove", key: key }]); },
        (error) => { console.log(error) }
      );
  }

}

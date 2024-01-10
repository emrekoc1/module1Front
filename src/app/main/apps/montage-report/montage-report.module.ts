import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
} from "devextreme-angular";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { DataService } from "app/services/data.service";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { DxPieChartModule } from "devextreme-angular";
import { MontageReportService } from "./montage-report.service";

import { FuseSharedModule } from "@fuse/shared.module";

import { MatGridListModule } from "@angular/material/grid-list";

import {
    DxChartModule,
    DxSelectBoxModule,
    DxLoadPanelModule,
} from "devextreme-angular";

//product
import { Production } from "./production/production.component";

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ProjectStatus } from "./projectStatus/projectStatus.component";
import { DurbunDetail } from "./durbunDetail/durbunDetail.component";

import { Repair } from "./repair/repair.component";
import { FireReport } from "./firereport/firerport.component";
import { QualityControl } from "./quality-control/quality-control.component";
import { NonConformances } from "./nonconformances/nonconformances.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { DiscrepancyDialog } from "./nonconformances/nonconformance-report/discrepancy/discrepancy-dialog.component";
import { PartDialog } from "./nonconformances/nonconformance-report/parts/part-dialog.component";
import { NonConformanceDialog } from "./nonconformances/nonconformance-form/nonconformance/nonconformance-dialog.component";
import { SearchModule } from "../custom-modules/searchRapor/search.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NonconformanceReport } from "./nonconformances/nonconformance-report/nonconformance-report.component";
import { NonconformanceForm } from "./nonconformances/nonconformance-form/nonconformance-form.component";


const routes: Routes = [
    {
        path: "production",
        component: Production,
    },
    {
        path: "repair",
        component: Repair,
    },
    {
        path: "DurbunDetail",
        component: DurbunDetail,
    },
    {
        path: "ProjectStatus",
        component: ProjectStatus,
    },
    {
        path: "quality-control",
        component: QualityControl,
    },
    {
        path: "quality-control",
        component: QualityControl,
    },
    {
        path: "firereport",
        component: FireReport,
    },
    {
        path: "nonconformances",
        component: NonConformances
    },
    {
        path: "nonconformances/nonconformance_report",
        component: NonconformanceReport
    },
    {
        path: "nonconformances/nonconformance_form",
        component: NonconformanceForm
    }
];

@NgModule({
    declarations: [
        Production,
        Repair,
        NonConformances,
        NonconformanceReport,
        NonconformanceForm,
        DiscrepancyDialog,
        PartDialog,
        NonConformanceDialog,
        ProjectStatus,
        FireReport,
        DurbunDetail
    ],
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule,
        MatChipsModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatDialogModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,
        DxDataGridModule,
        DxTemplateModule,
        DxButtonModule,
        FuseSharedModule,
        NgxChartsModule,
        DxChartModule,
        DxSelectBoxModule,
        MatDatepickerModule,
        DxLoadPanelModule,
        DxPieChartModule,
        NgxSkeletonLoaderModule,
        MatSlideToggleModule,

        SearchModule,
    ],
    providers: [MontageReportService, DataService],
    entryComponents: [
        DiscrepancyDialog,
        PartDialog,
        NonConformanceDialog
    ]
})
export class MontageReportModule { }

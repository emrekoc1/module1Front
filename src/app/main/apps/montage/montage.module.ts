import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from 'app/services/data.service';
import { MontageService } from './montage.service';
import { DxDataGridModule, DxTemplateModule, DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MontageComponent } from './montage.component';
import { ExcellComponent } from './excell/excell.component';
import { MontageBoxesComponent } from './boxes/boxes.component';
import { AddBoxesComponent, AddedBoxListComponent } from './boxes/add/add';
import { FuseSharedModule } from '@fuse/shared.module';
import { BomComponent } from './bom/bom.component';
import { SingleBomComponent } from './bom/single-bom/single-bom.component';
import { TodoListDialogComponent } from './bom/single-bom/todo-list-dialog/todo-list-dialog.component';
import { QualityControlOperationDialogComponent } from './bom/single-bom/quality-control-operation-dialog/quality-control-operation-dialog.component';
import { TestOperationDialogComponent } from './bom/single-bom/test-operation-dialog/test-operation-dialog.component';
import { PartDialogComponent } from './bom/single-bom/part-dialog/part-dialog.component';
import { BoxesService } from '../boxes/boxes.service';
import { QRCodeModule } from 'angularx-qrcode';
import { OperationDialogComponent } from './bom/single-bom/part-dialog/operation-dialog/operation-dialog.component';
import { InputDialogComponent } from './bom/single-bom/part-dialog/operation-dialog/input-dialog/input-dialog.component';
import { MatSelectSearchComponent } from './bom/single-bom/mat-select-search/mat-select-search.component';

const routes: Routes = [
    {
        path: '',
        component: MontageComponent,
    },
    {
        path: 'bom/list',
        component: BomComponent,
    },
    {
        path: 'bom/single-bom',
        component: SingleBomComponent,
    },
    {
        path: 'bom/single-bom/:id',
        component: SingleBomComponent,
    },
    {
        path: 'boxes',
        component: MontageBoxesComponent,
    },
    {
        path: 'boxes/add-boxes',
        component: AddBoxesComponent,
    },
    {
        path: 'ExcelList',
        component: ExcellComponent,
    },

];

@NgModule({
    declarations: [
        MontageComponent,
        BomComponent,
        SingleBomComponent,
        MontageBoxesComponent,
        AddBoxesComponent,
        AddedBoxListComponent,
        ExcellComponent,

        PartDialogComponent,
        OperationDialogComponent,
        InputDialogComponent,
        QualityControlOperationDialogComponent,
        TestOperationDialogComponent,
        TodoListDialogComponent,

        MatSelectSearchComponent
    ],
    imports     : [
        QRCodeModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        MatMenuModule,
        MatDialogModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,
        DxDataGridModule,
        DxTemplateModule, 
        DxButtonModule, 
        FuseSharedModule,
    ],
    providers   : [
        MontageService, DataService, BoxesService
    ],
    entryComponents: [
        AddedBoxListComponent,
        PartDialogComponent,
        OperationDialogComponent,
        InputDialogComponent,
        QualityControlOperationDialogComponent,
        TestOperationDialogComponent,
        TodoListDialogComponent
    ],
    exports: [
        MatSelectSearchComponent
    ]
})
export class MontageModule
{
}



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { FuseSharedModule } from '@fuse/shared.module';
import { duyrularComponent } from './duyrular.component';
import { DataService } from 'app/services/data.service';
import { duyrularService } from './duyrular.service';
import { DxDataGridModule, DxTemplateModule, DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
// import { AddduyrularComponent } from './add/add';
// import { AddMontajComponent } from './addmontage/add';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddduyruComponent } from './add/add';
import { DuzenleduyruComponent } from './duzenle/duzenle';

import { DxPieChartModule } from 'devextreme-angular';
import {  DxCheckBoxModule } from 'devextreme-angular';
import { OkunduComponent } from './okundu';
import { RaporDuyruComponent } from './raporlama/rapor-duyru';


const routes: Routes = [
    {
        path: '',
        component: duyrularComponent,
    },
    {
        path: 'add-duyrular',
        component: AddduyruComponent,
    },
    {
        path: 'duzenle/:id',
        component: DuzenleduyruComponent,
    },
    {
        path: 'rapor-duyru',
        component: RaporDuyruComponent,
    },
  
    // {
    //     path: 'add-duyrular',
    //     component: AddduyrularComponent,
    // },
    // {
    //     path: 'add-montaj',
    //     component: AddMontajComponent,
    // },
    // {
    //     path: 'bom-managamanet',
    //     component: BatchManagamentComponent,
    // },

];

@NgModule({
    declarations: [
        duyrularComponent,
        AddduyruComponent,
        OkunduComponent,
        RaporDuyruComponent,
        DuzenleduyruComponent
        // AddduyrularComponent,
        // duyrularManagamentComponent,
        // AddMontajComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        DxSelectBoxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatExpansionModule,
        DxDataGridModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        DxPieChartModule,
        MatSnackBarModule,
        MatGridListModule,
         MatCardModule,
        MatListModule,
        MatMenuModule,
       MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        DxDataGridModule,
        DxTemplateModule,
        FuseSharedModule,
        DxSelectBoxModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatRadioModule,
        DxButtonModule,
        MatSlideToggleModule
        ],
    providers: [
        duyrularService, DataService
    ]
})
export class duyrularModule {
}

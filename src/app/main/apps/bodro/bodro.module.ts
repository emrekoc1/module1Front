
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
import { FuseSharedModule } from '@fuse/shared.module';
import { bodroComponent } from './bodro.component';
import { DataService } from 'app/services/data.service';
import { bodroService } from './bodro.service';
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
// import { AddbodroComponent } from './add/add';
// import { AddMontajComponent } from './addmontage/add';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GoruntuleComplement } from './bordroGoruntule/goruntule.component';
// import { BatchManagamentComponent } from './managament/m';
import { MatDialog } from '@angular/material/dialog';

const routes: Routes = [
    {
        path: '',
        component: bodroComponent,
    },
    {
        path: 'add-goruntule',
        component: GoruntuleComplement,
    },
    // {
    //     path: 'add-bodro',
    //     component: AddbodroComponent,
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
        bodroComponent,
        GoruntuleComplement,
        // AddbodroComponent,
        // bodroManagamentComponent,
        // AddMontajComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
      
        MatChipsModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
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
        MatIconModule,
        MatInputModule,
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
        DxSelectBoxModule,


    ],
    providers: [
        bodroService, DataService
    ]
})
export class bodroModule {
}

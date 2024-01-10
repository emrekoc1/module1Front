
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DxAccordionModule } from 'devextreme-angular';

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
import { EvrakDokumanComponent } from './evrak-dokuman.component';
import { DataService } from 'app/services/data.service';
import { EvrakDokumanService } from './evrak-dokuman.service';
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
import {
     DxCheckBoxModule, DxSliderModule, DxTagBoxModule
  } from 'devextreme-angular';
import { EvrakAddComponent } from './add/add';

import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EvrakUpdateComponent } from './update/update';
import { DetailViewComponent } from './detail-view/detail-view.componenet';
import { EvrakKategoriAddComponent } from './addkategori/add';



const routes: Routes = [
    {
        path: '',
        component: EvrakDokumanComponent,
    },
   
  
    {
        path: 'add-evrak',
        component: EvrakAddComponent,
    },
    {
        path: 'add-kategori',
        component: EvrakKategoriAddComponent,
    },
    {
        path: 'evrak-update/:id',
        component: EvrakUpdateComponent,
    },
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
        EvrakDokumanComponent,
        EvrakAddComponent,
        EvrakUpdateComponent,
        DetailViewComponent,
        EvrakKategoriAddComponent
        // OkunduComponent,
        // AddduyrularComponent,
        // duyrularManagamentComponent,
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
        DxCheckBoxModule, DxSliderModule, DxTagBoxModule,
        MatInputModule,
        FormsModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatGridListModule,
        DxAccordionModule,
         MatCardModule,
        MatListModule,
        MatMenuModule,
       MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        DxDataGridModule,
        DxTemplateModule,
        FuseSharedModule,
        MatProgressSpinnerModule,
        DxSelectBoxModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatRadioModule,
        DxButtonModule,
        CommonModule
        ],
    providers: [
        EvrakDokumanService, DataService
    ]
})
export class EvrakDokumanModule {
}

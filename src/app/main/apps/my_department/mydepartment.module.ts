
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
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { FuseSharedModule } from '@fuse/shared.module';
import { MyDepartmentComponent } from './mydepartment.component';
import { DataService } from 'app/services/data.service';
import { MyDepartmentService } from './mydepartment.service';
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
// import { EgitimDetailComponent } from './egitimdetail/detail';
// import { EgitimAddComponent } from './add/add';
// import { EgitimDetailAddComponent } from './egitimKategAdd/egitim-add';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { EgitimUpdateComponent } from './egitimUpdate/update';
import { KalibrasyonComponent } from './kalibrasyon/kalibrasyon.component';
import { AddComponent } from './kalibrasyon/add/add';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { KalibrasyonGirisComponent } from './kalibrasyon/setkalibrasyon/kalibrasyonGiris';
import { GetKalibrasyonComponent } from './kalibrasyon/getkalibrasyon/get-kalibrasyon.component';
import {BirimHomeComponent} from './home/birim-home.component'
import { BirimHomeAddComponent } from './home/add-birim-home/add-birim-home.component';
import { DepartmanEvrakDokumanComponent } from './dokument/evrak-dokuman.component';
import { EvrakAddComponent } from './dokument/add/add';
import { EvrakKategoriAddComponent } from './dokument/addkategori/add';
import { BirimOzelComponent } from './birim-ozel/birim-ozel.component';
const routes: Routes = [
    {
        path: '',
        component: MyDepartmentComponent,
    },
    {
        path: 'add-element',
        component: AddComponent,
    },
    {
        path: 'birim-home',
        component: BirimHomeComponent,
    },
    {
        path: 'birim-ozel',
        component: BirimOzelComponent,
    },
    {
        path: 'birim-home-add',
        component: BirimHomeAddComponent,
    },
 
    {
        path: 'evrak-dokuman',
        component: DepartmanEvrakDokumanComponent,
    },
    {
        path: 'evrak-add',
        component: EvrakAddComponent,
    },
    {
        path: 'evrak-katagori-add',
        component: EvrakKategoriAddComponent,
    },
    // {
    //     path: 'kalibrasyonGiris/:id',
    //     component: KalibrasyonGirisComponent,
    // },


];

@NgModule({
    declarations: [
        MyDepartmentComponent,
        KalibrasyonComponent,
        AddComponent,
        KalibrasyonGirisComponent,
        GetKalibrasyonComponent,
        BirimHomeComponent,
        BirimHomeAddComponent,
        DepartmanEvrakDokumanComponent,
        EvrakAddComponent,
EvrakKategoriAddComponent,
BirimOzelComponent
      
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatAutocompleteModule,
    MatInputModule,
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
        MyDepartmentService, DataService
    ]
})
export class MyDepartmentModule {
}

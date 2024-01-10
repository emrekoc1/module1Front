
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
import {HomeComponent} from './home.component';
import { DataService } from 'app/services/data.service';
import { HomeService } from './home.service';
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
import { HomeAddComponent } from './add/add';
import {NewsDetailComponent}  from './news-detail.component'
import { CommonModule } from '@angular/common';
import { HizliMenuComponent } from './hizliMenu/hizli';
import { HomeUpdateComponent } from './update/update';
import { UserAdminComponent } from './userAdmin/user-admin';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserAddComponent } from './user-add/add';
import { YapilacaklarComponent } from './todoList/todo-list';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'add-haber',
        component: HomeAddComponent,
    },
    {
        path: 'hizli-menu',
        component:HizliMenuComponent,
    },
    {
        path: 'update-haber/:id',
        component:HomeUpdateComponent,
    },
    {
        path: 'userAdmin',
        component:UserAdminComponent,
    },
    {
        path: 'userAdd',
        component:UserAddComponent,
    },  
     {
        path: 'yapilacaklar',
        component:YapilacaklarComponent,
    }
  
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
        HomeComponent,
        HomeAddComponent,
        NewsDetailComponent,
        HizliMenuComponent,
        HomeUpdateComponent,
        UserAdminComponent,
        UserAddComponent,
        YapilacaklarComponent
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
        MatInputModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSlideToggleModule,
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
        CommonModule
        ],
    providers: [
        HomeService, DataService
    ]
})
export class HomeModule {
}

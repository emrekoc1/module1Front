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
import { DataService } from 'app/services/data.service';
import { DxDataGridModule, DxTemplateModule, DxButtonModule } from 'devextreme-angular';
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
import { StopCategoriesComponent } from './stop_categories.component';
import { StopCategoriesService } from './stop_categories.service';
import { MachineStopsComponent } from './machine_stops/machine_stops';
import { AddMachineStopComponent } from './machine_stops/add/add';
import { AddStopReasonCategory } from './add/add';
import { UpdateStopReasonCategory } from './update/update';
import { AddAllMachineStopComponent } from './machine_stops/add_all_machine/add';

const routes: Routes = [
    {
        path: 'list',
        component: StopCategoriesComponent,
    },
    {
        path: 'add',
        component: AddStopReasonCategory,
    },
    {
        path: 'machine-stops',
        component: MachineStopsComponent,
    },
    {
        path: 'machine-stops/add-machine-stop',
        component: AddMachineStopComponent,
    },
    {
        path: 'machine-stops/add-all-machine-stop',
        component: AddAllMachineStopComponent,
    },
    {
        path: 'update',
        component: UpdateStopReasonCategory,
    },



];

@NgModule({
    declarations: [
        StopCategoriesComponent,
        MachineStopsComponent,
        AddMachineStopComponent,
        AddStopReasonCategory,
        UpdateStopReasonCategory,
        AddAllMachineStopComponent
    ],
    imports     : [
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
    
    ],
    providers   : [
        StopCategoriesService,DataService
    ]
})
export class StopCategoriesModule
{
}

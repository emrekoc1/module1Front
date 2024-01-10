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
import { IfactoryComponent } from './ifactory.component';
import { ConfigComponent } from './config/config.component';
import { ManComponent } from './operations/man.component';
import { OperatorsComponent } from './operators/operators.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IFactoryService } from './ifactory.service';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { DepartmansComponent } from './config/departmans/departmans.component';
import { MachinesComponent } from './config/machines/machines.component';
import { DxButtonModule, DxTemplateModule, DxDataGridModule, DxSwitchModule, DxCheckBoxModule } from 'devextreme-angular';
import { QRCodeModule } from 'angularx-qrcode';
import { WorkStationsComponent } from './config/workStations/workstations.component';
import { AddOperationComponent } from './operations/operation/add/add';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { UpdateOperationComponent } from './operations/operation/update/update';
import { AddMachineComponent } from './operations/machine/add/add';
import { UpdateMachineComponent } from './operations/machine/update/update';
import { UpdateWorkStationComponent } from './operations/workstation/update/update';
import { AddWorkStationComponent } from './operations/workstation/add/add';
import { ShiftsComponent } from './shifts/shifts.component';
import { SingleShiftComponent } from './shifts/single-shift/single-shift.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TimeIntervalDialogComponent } from './shifts/single-shift/time-interval/time-interval-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProjectComponent } from './project/project.component';
import { SingleProjectComponent } from './project/single-project/single-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [
    {
        path: '',
        component: IfactoryComponent,
    },
    {
        path: 'config',
        component: ConfigComponent,
    },
    {
        path: 'managament',
        component: ManComponent,
    },
    {
        path: 'managament/:com',
        component: ManComponent,
    },
    {
        path: 'operators',
        component: OperatorsComponent,
    },
    {
        path: 'add_operation',
        component: AddOperationComponent
    },
    {
        path: 'update_operation',
        component: UpdateOperationComponent
    },
    {
        path: 'add_machine',
        component: AddMachineComponent
    },
    {
        path: 'update_machine',
        component: UpdateMachineComponent
    },
    {
        path: 'add_work_station',
        component: AddWorkStationComponent
    },
    {
        path: 'update_work_station',
        component: UpdateWorkStationComponent
    },
    {
        path: 'shifts',
        component: ShiftsComponent
    },
    {
        path: 'shifts/single-shift',
        component: SingleShiftComponent
    },
    {
        path: 'shifts/single-shift/:id',
        component: SingleShiftComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'project/single-project',
        component: SingleProjectComponent
    },
    {
        path: 'project/single-project/:id',
        component: SingleProjectComponent
    }

];

@NgModule({
    declarations: [
        IfactoryComponent,
        ConfigComponent,
        ManComponent,
        OperatorsComponent,
        DepartmansComponent,
        MachinesComponent,
        WorkStationsComponent,
        AddOperationComponent,
        UpdateOperationComponent,
        UpdateMachineComponent,
        AddMachineComponent,
        UpdateWorkStationComponent,
        AddWorkStationComponent,
        ShiftsComponent,
        SingleShiftComponent,
        ProjectComponent,
        SingleProjectComponent,

        TimeIntervalDialogComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
        QRCodeModule,
        DxCheckBoxModule,
        DxTemplateModule,
        DxSwitchModule,
        MatButtonModule,
        MatChipsModule,
        MatCheckboxModule,
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
        DxButtonModule,
        FuseSharedModule,
        MatDatepickerModule
    ],
    providers: [
        IFactoryService
    ],
    bootstrap: [
        IfactoryComponent,
        OperatorsComponent,
        ShiftsComponent,
        ProjectComponent
    ],
    entryComponents: [
        TimeIntervalDialogComponent
    ]
})
export class IFactoryModule {
}

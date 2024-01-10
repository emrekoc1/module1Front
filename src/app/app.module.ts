import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';


import { MyAuthService } from './services/my-auth.service';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { SnackBarService } from './services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuardService, LoginGuardService } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { EgitimlerComponent } from './main/apps/egitimler/egitimler.component';

function tokenGetter() {
    return localStorage.getItem('token');
}

const appRoutes: Routes = [
    {
        path: 'apps',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: 'pages',
        canActivate : [LoginGuardService],
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '**',
        redirectTo: 'apps/home'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        // EgitimlerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,

            }
        }),
        MatMomentDateModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        LayoutModule,
        AppStoreModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [AuthGuardService, LoginGuardService, MyAuthService, JwtHelperService, DataService, SnackBarService]
})
export class AppModule {
}

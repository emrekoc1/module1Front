import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { UlastirmaModule } from './ulastirma/ulastirma.module';


const routes = [
    // {
    //     path: 'general-status',
    //     loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
    // },
    // {
    //     path: 'machineRapor',
    //     loadChildren: () => import('./machineRapor/machineRapor.module').then(m => m.MachineRaporModule)
    // },
  
    // {
    //     path: 'reports',
    //     loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
    // },
    // {
    //     path: 'newBom',
    //     loadChildren: () => import('./newBom/newBom.model').then(m => m.NewBomModule)
    // },
    // {
    //     path: 'e_reports',
    //     loadChildren: () => import('./e_reports/e_reports.module').then(m => m.E_REPORTSMODEL)
    // },
    // {
    //     path: 'montage-report',
    //     loadChildren: () => import('./montage-report/montage-report.module').then(m => m.MontageReportModule)
    // },
    // {
    //     path: 'batchs',
    //     loadChildren: () => import('./batchs/batchs.module').then(m => m.BatchsModule)
    // },
    {
        path: 'bodro',
        loadChildren: () => import('./bodro/bodro.module').then(m => m.bodroModule)
    },
    {
        path: 'dilekOneri',
        loadChildren: () => import('./dilekSikayet/dilekSikayet.module').then(m => m.DilekSikayetModule)
    },
    {
        path: 'lFlow',
        loadChildren: () => import('./l-flow/lflow.module').then(m => m.LFlowModule)
    },
    {
        path: 'takvim',
        loadChildren: () => import('./takvim/takvim.module').then(m => m.TakvimModule)
    },
    {
        path: 'evrak',
        loadChildren: () => import('./evrak_dokuman/evrak-dokuman.module').then(m => m.EvrakDokumanModule)
    },
    {
        path: 'duyru',
        loadChildren: () => import('./duyrular/duyrular.module').then(m => m.duyrularModule)
    },
    {
        path: 'talep',
        loadChildren: () => import('./talep/talep.modele').then(m => m.TalepModule)
    },
    // {
    //     path: 'profile',
    //     loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    // },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'mydepartment',
        loadChildren: () => import('./my_department/mydepartment.module').then(m => m.MyDepartmentModule)
    },
    {
        path: 'anket',
        loadChildren: () => import('./anket/anket.module').then(m => m.AnketModule)
    },
    {
        path: 'egitimler',
        loadChildren: () => import('./egitimler/egitimler.module').then(m => m.EgitimlerModule)
    }, 
     {
        path: 'profil',
        loadChildren: () => import('./user-profil/user-profil.module').then(m => m.UserProfilModule)
    },
    {
        path: 'error-500',
        loadChildren: () => import('./500/error-500.module').then(m => m.Error500Module)
    },
    {
        path: 'sos-phone',
        loadChildren: () => import('./sosphone/sosPhone.module').then(m => m.SOSPhonerModule)
    },
    {
        path: 'yemekList',
        loadChildren: () => import('./yemekList/yemekList.module').then(m => m.YemekListModule)
    },
    {
        path: 'guzergah',
        loadChildren: () => import('./servisGuzergah/guzergah.module').then(m => m.GuzergahModule)
    },
    {
        path: 'rehber',
        loadChildren: () => import('./rehber/rehber.module').then(m => m.RehberModule)
    },
  
    {
        path: 'bakimOnarim/:talep',
        loadChildren: () => import('./bakimOnarim/bakim.module').then(m => m.BakimOnarimModule)
    },
    {
        path: 'ik/:talep',
        loadChildren: () => import('./insanKaynaklari/ik.module').then(m => m.InsanKaynaklariModule)
    },
    {
        path: 'bilgiIslem/:talep',
        loadChildren: () => import('./bilgiIslem/bilgiIslem.module').then(m => m.BilgiIslemModule)
    },
    {
        path: 'ulastirma/:talep',
        loadChildren: () => import('./ulastirma/ulastirma.module').then(m => UlastirmaModule)
    },
    {
        path: 'quitMenu',
        loadChildren: () => import('./quitMenu/quit.module').then(m => m.QuitMenuModule)
    },
    // {
    //     path: 'montage',
    //     loadChildren: () => import('./montage/montage.module').then(m => m.MontageModule)
    // },
    // {
    //     path: 'productivity',
    //     loadChildren: () => import('./productivity/productivity.module').then(m => m.ProductivityModule)
    // },
    // {
    //     path: 'bom',
    //     loadChildren: () => import('./bom/bom.module').then(m => m.BomModule)
    // },
    // {
    //     path: 'stock',
    //     loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
    // },
    // {
    //     path: 'boxes',
    //     loadChildren: () => import('./boxes/boxes.module').then(m => m.BoxesModule)
    // },
    // {
    //     path: 'about',
    //     loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    // },
    // {
    //     path: 'stop_categories',
    //     loadChildren: () => import('./stop_categories/stop_categories.module').then(m => m.StopCategoriesModule)
    // },
    // {
    //     path: 'ifactory',
    //     loadChildren: () => import('./ifactory/ifactory.module').then(m => m.IFactoryModule)
    // },
    // {
    //     path: 'dashboards/analytics',
    //     loadChildren: () => import('./dashboards/analytics/analytics.module').then(m => m.AnalyticsDashboardModule)
    // },
    // {
    //     path: 'dashboards/project',
    //     loadChildren: () => import('./dashboards/project/project.module').then(m => m.ProjectDashboardModule)
    // },
    // {
    //     path: 'mail',
    //     loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)
    // },
    // {
    //     path: 'mail-ngrx',
    //     loadChildren: () => import('./mail-ngrx/mail.module').then(m => m.MailNgrxModule)
    // },
    // {
    //     path: 'calendar',
    //     loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
    // },
    // {
    //     path: 'e-commerce',
    //     loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    // },
    // {
    //     path: 'academy',
    //     loadChildren: () => import('./academy/academy.module').then(m => m.AcademyModule)
    // },
    // {
    //     path: 'todo',
    //     loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
    // },
    // {
    //     path: 'egitim',
    //     loadChildren: () => import('./egitimler/egitimler.module').then(m => m.FileManagerModule)
    // },
    // {
    //     path: 'contacts',
    //     loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
    // },
    {
        path: 'scrumboard',
        loadChildren: () => import('./scrumboard/scrumboard.module').then(m => m.ScrumboardModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ],
    
    declarations: []
})
export class AppsModule {
}

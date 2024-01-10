import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { Router } from '@angular/router';
import { duyrularService } from 'app/main/apps/duyrular/duyrular.service';
import { AnketService } from 'app/main/apps/anket/anket.service';
import { DataService } from 'app/services/data.service';
@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    public factory_informations: any;
    public user_informations: any;
    
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        public dataService : DataService,
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        public router: Router,public duyrularervice:duyrularService,public anketService:AnketService
    ) {
        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon: 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon: 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon: 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            }
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this.factory_informations = JSON.parse(localStorage.getItem("factory"));
        this.user_informations = JSON.parse(localStorage.getItem("currentUser"));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
   
    duyruSay:any=0
    anketSay:any=0
    ngOnInit(): void {
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });
       let dataget:any
       let calismaDuzelt = []


        this.duyrularervice.get_all_duyrular(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
            dataget = result;
            if (dataget.data.rowsAffected) {

                
                dataget.data.recordset.forEach(element => {
                 
                    calismaDuzelt.push(
                        {
                            id: element.duyru_id,
                            duyru_basligi: element.duyru_basligi,
                            duyru_aciklama: element.duyru_aciklama,
                            status: 3,
                            kontrol: false
                        }
                    )
                });

                calismaDuzelt.forEach(notif => {
                    dataget.user.recordset.forEach(unotif => {
                        if (notif.id == unotif.notifi_id) {
                            notif.status = 2;
                            return
                        }
                    });
                });

            }
            this.duyruSay= 0
            
          calismaDuzelt.forEach(element => {
            if(element.status==3)
            {
                this.duyruSay = this.duyruSay+1
            }
           });

           console.log(this.duyruSay)
        }).catch(err => {
            console.log("err,", err)
        })
let datagetAnket
let calismaDuzelt1= []
        this.anketService.get_all_anket(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
            datagetAnket = result;
            if (datagetAnket.data.rowsAffected) {
                console.log(datagetAnket)
                datagetAnket.data.recordset.forEach(element => {
                    calismaDuzelt1.push(
                        {
                            id: element.id,
                            duyru_basligi: element.anket_baslik,
                            duyru_aciklama: element.anket_aciklama,
                            status: 3,
                            kontrol: false
                        }
                    )
                });

                calismaDuzelt1.forEach(notif => {
                    datagetAnket.user.recordset.forEach(unotif => {
                        if (notif.id == unotif.anket_id) {
                            notif.status = 2;
                            return
                        }
                    });
                });

                 this.duyruSay= 0
            
                 calismaDuzelt1.forEach(element => {
            if(element.status==3)
            {
                this.anketSay = this.anketSay+1
            }
           });
                }
            }).catch(err => {
                console.log("err,", err)
            })
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    logout() {
        this.dataService.logout()
       
    }
}

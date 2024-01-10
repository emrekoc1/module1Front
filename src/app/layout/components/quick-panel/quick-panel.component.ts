import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent implements OnInit, OnDestroy
{
    date: Date;
    events: any[];
    notes: any[];
    settings: any;
    hizliMennu = []
    // Private
    private _unsubscribeAll: Subject<any>;
    now_tr: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    user_type:any =0
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults

        // this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
       
        this.date = new Date();
        this.now_tr =  new Date().toLocaleDateString('tr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        // Subscribe to the events
        this._httpClient.get('api/quick-panel-events')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response: any) => {
                this.events = response;
            });

        // Subscribe to the notes
        this._httpClient.get('api/quick-panel-notes')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response: any) => {
                this.notes = response;
            });
            this.acDosya(1)
    }
    acDosya(id:number){
            this.hizliMennu = [{
                id:1,
                name : "Acil Durum",
                url : "assets/docs/ACİL DURUM TELEFONLARI.pdf" ,
                photo : "assets/images/sos.png"
            },
            {
                id:2,
                name : "Yemek Listesi",
                url : "assets/docs/Yemek Listesi.jpg" ,
                photo : "assets/images/food.png"
            },
            {
                id:3,
                name : "Servis Saatleri",
                url : "assets/docs/Servis Saatleri.pdf" ,
                photo : "assets/images/servis.png"
            },
            {
                id:4,
                name : "Dahili Telefon Listesi",
                url : "assets/docs/Dahili Telefon Listesi.pdf" ,
                photo : "assets/images/tel.png"
            },{
                id:1,
                name : "Yardım Masası",
                url : "" ,
                photo : "assets/images/helpdesk.png"
            }]
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

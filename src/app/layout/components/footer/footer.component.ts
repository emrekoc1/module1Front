import { Component } from '@angular/core';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent
{
    now_tr: string;
    /**
     * Constructor
     */
    constructor()
    {
        this.now_tr =  new Date().toLocaleDateString('tr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
}

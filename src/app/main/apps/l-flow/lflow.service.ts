import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class LFlowService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }

    async lflowToken(data) {
     let   datas ={sicil:data}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('lflowAuto', datas).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
  
}


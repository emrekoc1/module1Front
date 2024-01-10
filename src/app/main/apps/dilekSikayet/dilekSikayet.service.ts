import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class duyrularService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }

    async dilekSikayetKutusu(data) {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('dilekSikayetKutusu', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    async getDilekSikayet() {
        let data= {}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getDilekSikayetKutusu',data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
}


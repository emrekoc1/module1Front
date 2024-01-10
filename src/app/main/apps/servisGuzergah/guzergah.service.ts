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

 
    async updateHizliMenu(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('hizliErisimGuncelle', data).toPromise().then(result => {
                    // resolve ile dönüyor
                   
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

 
    async getGuzergah(data) {
       let datas = {id:data}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('gethizliErisim', datas).toPromise().then(result => {
                    // resolve ile dönüyor
                   
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }



  
}


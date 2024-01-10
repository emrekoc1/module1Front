import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class bodroService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }
    async mailSend(data) {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('mail/send', data).toPromise().then(result => {
                resolve(result);
            });
        });
    }
    async get_all_bodro2(data) {
        console.log(data._id)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('bodroistek', data).toPromise().then(result => {
                console.log(result.data);
                if (result.status !== 200) {
                    alert('get all batch data error');
                    reject('error');
                } else {
                    resolve(result);
                }
            });
        });
    }
    async get_all_bodro(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('bodroistek', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    
  
}



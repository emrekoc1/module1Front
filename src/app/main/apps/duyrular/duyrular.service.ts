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
    async mailSend(data) {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('mail/send', data).toPromise().then(result => {
                resolve(result);
            });
        });
    }
    async post_all_duyrular(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postnotification', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async put_all_duyrular(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('putnotification', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async post_anket(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postAnket', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    anketIcerik = []
    async getanketicerikDuzenle(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('updatenotificerikDuzenle', data).toPromise().then(a => {
                    // resolve ile dönüyor
               this.anketIcerik= a
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getDepartman() {
        
        let data=""
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getDepartman', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getUsernotif(data) {
        
        let datas={not_id : data}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getSingleNotifSum', datas).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getallnotif() {
        
        let data=""
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getAllnotif', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async postUserNot(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postUserNot', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    async get_all_duyrular(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getnotification', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    async get_allAdmin_duyrular(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getNotifAdmin', data).toPromise().then(a => {
                    // resolve ile dönüyor
                    console.log(a)
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    async duyruDelete(data) {
        
        let datas = {id : data }
         return new Promise(async (resolve, reject) => {
             await this.dataService.post_yeni_versiyon('duyuruSil', datas).toPromise().then(a => {
                     // resolve ile dönüyor
                
                     resolve(a);
                 }).catch(err => {
                     reject(err);
                 });
         });
 
     }
    
  
}


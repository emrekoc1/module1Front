import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class EgitimlerService {

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

    async get_all_egitim(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getEgitim', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }

    async get_single_egitim(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getEgitimDetail', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    async resimUpdate(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('egitimPost', data).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async egitimDelete(data){

        let contor = {id : data} 
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('egitimDelete', contor).toPromise().then(result => {
                    // resolve ile dönüyor
                   
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async kategoriVideoEkle(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('egitimIcerikPost', data).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async egitimUpdate(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('egitimGuncelle', data).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async singleEgitim(data) {
        
        let datas = {id : data}
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getSingleEgitim', datas).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async updateHaber(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('haberGuncelle', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
  
}


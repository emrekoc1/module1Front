import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class EvrakDokumanService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }

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


    async get_all_evrak(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakGet', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }

    async KategoriOlustur(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakKategoriPost', data).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getKategori() {
        
        let data
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('kategoriGet', data).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async evrakOlustur(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakPost', data).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async evrakDelete(data){

        let contor = {id : data} 
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakDelete', contor).toPromise().then(result => {
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
    async singleEvrak(data) {
        
        let datas = {id : data}
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakSingel', datas).toPromise().then(result => {
                    // resolve ile dönüyor
                    console.log(result["status"])
               
                    resolve(result);
               
                   
                }).catch(err => {
                    reject(err);
                });
        });
    }
   
  
}


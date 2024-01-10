import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }
 
    getIsListesi(){

        let data = {
            data:""
        }
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyonURL('isListesi',data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async haberSil(data) {
        
       
        let contor = {id : data} 
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('silHaber', contor).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async deleteUser(data) {
        
       
        let contor = {id : data} 
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('deleteUser', contor).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async singleHaber(data) {
        
       
        let contor = {id : data} 
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('haberSingle', contor).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async haberLike(data) {
        
       
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('haberLike', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async singleHaberDetail(data) {
        
       
        let contor = {id : data} 
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getDetailHaber', contor).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getUser(data) {
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('GetUser', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async updateUser(data) {
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('putUser', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async newPostUser(data) {
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postUser', data).toPromise().then(result => {
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
               console.log("result",result)
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async resimUpdate(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('multipleFiles', data).toPromise().then(result => {
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
    async post_all_home(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postHaber', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    async get_haber(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getHaber',data).toPromise().then(result => {
                    // resolve ile dönüyor
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    
  
}


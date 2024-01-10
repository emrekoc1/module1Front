import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class AnketService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }

    async post_all_anket(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postanket', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async postoptions(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postanketOptions', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async putAnket(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('putAnket', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async post_user_all_anket(data,anket_id,user_id) {
        let datas = {
            data:data,
            user_id : user_id,
            anket_id : anket_id
        }
        console.log("*****************************************************")
        console.log(datas)
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postuseranket', datas).toPromise().then(result => {
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
    anketIcerik = []
    async getanketicerik(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getanketicerik', data).toPromise().then(a => {
                    // resolve ile dönüyor
               this.anketIcerik= a
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getanketicerikDuzenle(data) {
        
        
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('updateanketicerikDuzenle', data).toPromise().then(a => {
                    // resolve ile dönüyor
               this.anketIcerik= a
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async deleteSoru(data) {
        
        data= {soru_id : data}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('deleteSoru', data).toPromise().then(a => {
                    // resolve ile dönüyor
               this.anketIcerik= a
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async deleteOptions(data) {
        
        data= {option_id : data}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('deleteOptions', data).toPromise().then(a => {
                    // resolve ile dönüyor
               this.anketIcerik= a
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async get_all_anket(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getanket', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    async get_allAdmin_anket(data) {
        
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getanketAdmin', data).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    async anketDelete(data) {
        
       let datas = {id : data }
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('anketSil', datas).toPromise().then(a => {
                    // resolve ile dönüyor
               
                    resolve(a);
                }).catch(err => {
                    reject(err);
                });
        });

    }
    async getUserAnket(data) {
        
        let datas={anket_id : data}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getSingleAnketUser', datas).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getAllAnket() {
        
        let data=""
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getanketRapor', data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getUserAnketID(anket_id:any,user_id:any) {
        
        let datas={anket_id : anket_id,
        user_id:user_id}
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getSingleAnketUserID', datas).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async getUsersAnket(anket_id:any) {
        
        let datas={anket_id : anket_id
        }
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getSingleAnketUsers', datas).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
}


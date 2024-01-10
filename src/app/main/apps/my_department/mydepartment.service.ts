import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class MyDepartmentService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }
    async mailSend(data) {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('mail/send', data).toPromise().then(result => {
                resolve(result);
            });
        });
    }
    async get_all_evrak(data) {
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakGet', data).toPromise().then(a => {
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
                     resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    async evrakOlustur(data) {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('evrakPost', data).toPromise().then(result => {
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

    async get_haber_departman(data) {
        
        let datas = {
            birim:data
        }

        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getHaber',datas).toPromise().then(result => {
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
    getStatusAndDepartment(){

        let data = {
            data:""
        }
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyonURL('getStatusAndDepartment',data).toPromise().then(result => {
                    // resolve ile dönüyor
               console.log(result)
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    getDetailKalibrasyon(id:any){

        let data = {
            id:id
        }
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyonURL('getKalibrasyonGecmis',data).toPromise().then(result => {
                    // resolve ile dönüyor
               console.log(result)
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    getKalibrasyonMetarial(){

        let data = {
            data:""
        }
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyonURL('getKalibrasyonMetarial',data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    postKalibrasyonDetail(data){

       
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyonURL('postKalibrasyonDetail',data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    postKalibrasyonMetarial(data){

       
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyonURL('postKalibrasyonMetarial',data).toPromise().then(result => {
                    // resolve ile dönüyor
               
                    resolve(result);
                }).catch(err => {
                    reject(err);
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


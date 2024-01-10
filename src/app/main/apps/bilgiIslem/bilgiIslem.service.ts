import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class BilgiIslemService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }


    async getUser(data) {

        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getRehber', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    async updateUser(data) {
        console.log(data)
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('putRehber', data).toPromise().then(result => {
                // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    async deleteUser(data) {
        let datas = {
            rehber_id: data
        }
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('deleteRehber', datas).toPromise().then(result => {
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
            await this.dataService.post_yeni_versiyon('posRehber', data).toPromise().then(result => {
                // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    async getDepartman() {

        let data = ""
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getDepartman', data).toPromise().then(result => {
                // resolve ile dönüyor
                console.log("result", result)
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





}


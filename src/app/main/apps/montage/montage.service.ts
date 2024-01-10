import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class MontageService {

    public factory_info = JSON.parse(localStorage.getItem('factory'));
    constructor(public data_service: DataService) { }


    async get_all_montage_bom() {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('siparis/getAllByFactory', { facID: this.factory_info._id }).toPromise().then(result => {
                console.log(result);
                if (result['status'] != 200) {
                    alert('get all montage_bom data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async add_montage_bom(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('product', data).toPromise().then(result => {
          
                resolve(result);
            });
        });
    }

    async get_single_montage_bom(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('newBom/get_single_bom', data).toPromise().then(result => {
          
                resolve(result);
            });
        });
    }

    async update_product(data){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('product/update_product_with_id_new', data).toPromise().then(result => {
          
                resolve(result);
            });
        });
    }
   
    async get_all_montage_boms(){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('newBom/getNewBomListWithFactory', { facID: this.factory_info._id }).toPromise().then(result => {
                if (result['status'] != 200) {
                    alert('get all montage_bom data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

}



import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class BomService {

    public factory_info = JSON.parse(localStorage.getItem("factory"))
    constructor(public data_service: DataService) { }


    async get_all_bom() {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/getAllBomByFactory", { "facID": this.factory_info._id }).toPromise().then(result => {
                console.log(result);
                if (result['status'] != 200) {
                    alert("get all bom data error");
                    reject("error")
                } else {
                    resolve(result['data'].reverse());
                }
            })
        })
    }

    async add_bom(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/create_new", data).toPromise().then(result => {
          
                resolve(result);
            })
        })
    }

    async get_single_bom(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/get_single_bom", data).toPromise().then(result => {
          
                if (result['status'] != 200) {
                    alert("get all bom data error");
                    reject("error")
                } else {
                    resolve(result['data']);
                }
            })
        })
    }
    async add_route(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/addRouteByBom", data).toPromise().then(result => {
          console.log("result",result)
                resolve(result);
            })
        })
    }
    async update_bom(id,data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/update_single_bom", {bom_id:id,data:data}).toPromise().then(result => {
          
                if (result['status'] != 200) {
                    alert("get all bom data error");
                    reject("error")
                } else {
                    resolve(result['data']);
                }
            })
        })
    }

    async get_custom_data(){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("customFactory/getAllCustomWithFactory", { "facID": this.factory_info._id }).toPromise().then(result => {
          
                if (result['status'] != 200) {
                    alert("get all bom data error");
                    reject("error")
                } else {
                    resolve(result['data']);
                }
            })
        })
    }

    async get_product_data(){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("product/getProductionWithoutBom", { "facID": this.factory_info._id }).toPromise().then(result => {
          
                if (result['status'] != 200) {
                    alert("get all bom data error");
                    reject("error")
                } else {
                    resolve(result['data']);
                }
            })
        })
    }

    async bomSil(data){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/sil", data).toPromise().then(result => {
                
                resolve(result);
            })
        })
    }
    async bomRotaSil(data){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("bom/deleteRouteByBom", data).toPromise().then(result => {
                
                resolve(result);
            })
        })
    }

    async post_product(data){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("product", data).toPromise().then(result => {
                console.log("product",data)
                console.log("result post product",result)
                resolve(result);
            })
        })
    }

    async get_Operasyon_data(){
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json("operations/getAllByFactory", { "facID": this.factory_info._id }).toPromise().then(result => {
          
                if (result['status'] != 200) {
                    alert("get all bom data error");
                    reject("error")
                } else {
                    resolve(result['data']);
                }
            })
        })
    }



}



import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class StopCategoriesService {

    public factory_info = JSON.parse(localStorage.getItem('factory'));
    constructor(public data_service: DataService) { }


    async get_all_stock() {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('product/getAllByFactory', { facID: this.factory_info._id }).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }


    async get_all_stop_category() {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('stop_category/get_all_stop_category', { facID: this.factory_info._id }).toPromise().then(result => {
                console.log('service çıktı'); console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data'].reverse());
                }
            });
        });
    }


    async getAllByFactory(type) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('stop_category/getAllByFactory', { facID: this.factory_info._id, type: type }).toPromise().then(result => {
                console.log('service çıktı'); console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data'].reverse());
                }
            });
        });
    }


    async getMachineListWithFactory() {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('machine/getAllByFactory', { facID: this.factory_info._id }).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data'].reverse());
                }
            });
        });
    }

    async delete_stop_reason_from_machine(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('machine/delete_stop_reason', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async delete_stop_reason(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('duruslar/delete', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async get_single_machine_info(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('machine/get_by_id', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async add_reason_to_machine(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('machine/addStopReason', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async add_reason_to_all_machine(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('machine/addStopReasonToAllMachine', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    
    async add_stop_category(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('stop_category', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }
    async update_stop_category(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('stop_category/update_by_id', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async delete_stop_category(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('stop_category/delete_by_id', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async add_stop_reason(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('duruslar', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async get_single_category_info(data) {
        return new Promise(async (resolve, reject) => {
            await this.data_service.post_with_json('stop_category/get_by_id', data).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all stock data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }
}



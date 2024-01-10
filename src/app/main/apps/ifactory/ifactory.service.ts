import { Injectable } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { SnackBarService } from 'app/services/snackbar.service';

@Injectable({
    providedIn: 'root'
})
export class IFactoryService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));    
    constructor(public dataService: DataService, 
                public snackbarService: SnackBarService) {
         }

    async get_all_departmants() {
        // (this.factoryInfo._id)
        console.log('denme', this.factoryInfo);
        console.log('çalislam', JSON.parse(localStorage.getItem('factory')));
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_with_json('departmant/get_all_departmant_with_work_stations', { factoryID: this.factoryInfo._id }).toPromise().then(result => {
                if (result['status'] !== 200) {
                    alert('get departmanst data error');
                    reject('error');
                } else {
                    resolve(result['data']);
                }
            });
        });
    }

    async getStopName(type) {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_with_json('stop_category/getAllByFactory', { facID: this.factoryInfo._id, type: 0 }).toPromise().then(result => {
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

    async get_all_operators() {
        return new Promise((resolve, reject) => {
            this.dataService.get('users/').toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }


    async get_factory_machine_list(_id) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine/getAllByFactory', { facID: _id }).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async add_operator(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/register', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async check_machine_for_user(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/checkMachineWithUserID', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async refresh_factory_data(factory_id) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('factory/getById', { factoryID: factory_id }).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                    localStorage.removeItem('factory');
                    localStorage.setItem('factory', JSON.stringify(result['data'][0]));
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async add_qr_code_users(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/addqrcode', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }


    async search_operator(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/personel_filter', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async delete_machine_for_user(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/deleteMachineByPersonel', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async update_users_data(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/guncelle', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }
    async add_machine_to_operator(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/update', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async delete_user(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('users/sil', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }



    // operations


    async get_all_work_stations() {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('workStation/getAllByFactory', { facID: this.factoryInfo._id }).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async get_multiple_data() {

    }

    async add_operation(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async update_operation(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/updateOperation', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async delete_operation(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/deleteOperation', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async add_machine(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async update_machine(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine/update_machine_with_id', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async delete_machine(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine/delete_machine_with_id', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async add_departmants(data) {
        // (this.factoryInfo._id)
        console.log(data);
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('departmant', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async add_work_station(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('workStation', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async update_work_station(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('workStation/update_with_id', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async delete_work_station(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('workStation/delete_machine_with_id', data).toPromise().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }


    async assing_work_station_to_operation(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/assignWorkStation', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async get_operations_list_by_factory(data) {
        // ("operations")
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/getAllByFactory', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async get_single_operation_with_id(id) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/single_operation', { operation_id: id }).toPromise().then(result => {
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async get_single_machine_with_id(id) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine/get_by_id', { machine_id: id }).toPromise().then(result => {
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async get_single_work_station_with_id(id) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('workStation/single_work_station', { id: id }).toPromise().then(result => {
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }
    async get_all_operations(_id) {
        // ("operasyon")
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/getAllByFactory', { facID: _id }).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async all_operations() {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/getAllByFactory', { facID: this.factoryInfo._id }).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }


    async get_machine_list_by_factory(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine/getAllByFactory', data).toPromise().then(result => {
                // (result);
                if (result['status'] === 200) {
                    resolve(result['data']);
                } else {
                    reject('err');
                }

            }).catch(err => {
                reject(err);
            });
        });
    }

    async get_all_data_for_operations_page(data) {
        // ("func girdi")
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('operations/operations_page_all', data).toPromise().then(result => {
                console.log('tüm datayı almak için geldi');
                console.log(result);
                resolve(result['data']);

            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    async change_machine_status(data) {
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('machine/change_status', data).toPromise().then(result => {
                resolve(result);

            }).catch(err => {
                reject(err);
            });
        });
    }
    
    // shifts
    async shift_post_request(data, url: PostShiftUrls): Promise<any>{
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('shift/' + url, data).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show('Bir bağlantı hatası oluştu!');
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show('Bir bağlantı hatası oluştu!');
                reject(err);
            });
        });
    }

    async shift_put_request(data, url: PutShiftUrls): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dataService.put_with_json('shift/' + url, data).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show('Bir bağlantı hatası oluştu!');
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show('Bir bağlantı hatası oluştu!');
                reject(err);
            });
        });
    }
    
    // project
    async project_post_request(data, url: PostProjectUrls): Promise<any>{
        return new Promise((resolve, reject) => {
            this.dataService.post_with_json('project/' + url, data).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show('Bir bağlantı hatası oluştu!');
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show('Bir bağlantı hatası oluştu!');
                reject(err);
            });
        });
    }

    async project_put_request(data, url: PutProjectUrls): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dataService.put_with_json('project/' + url, data).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show('Bir bağlantı hatası oluştu!');
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show('Bir bağlantı hatası oluştu!');
                reject(err);
            });
        });
    }

    async project_delete_request(data, url: DeleteProjectUrls): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dataService.delete_with_json('project/' + url, data).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show('Bir bağlantı hatası oluştu!');
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show('Bir bağlantı hatası oluştu!');
                reject(err);
            });
        });
    }

}

export enum PostShiftUrls{
    getAllByFactory = 'getAllByFactory',
    getById = 'getById',
    addShift = 'addShift',
    deleteByShiftId = 'deleteByShiftId',
}

export enum PutShiftUrls{
    updateByShiftId = 'updateByShiftId',
    addTimeIntervalByShifId = 'addTimeIntervalByShifId',
    UpdateTimeIntervalIdAndByShifId = 'UpdateTimeIntervalIdAndByShifId',
    removeTimeIntervalIdAndByShifId = 'removeTimeIntervalIdAndByShifId',
}

export enum PostProjectUrls{
    getAllByFactory = 'getAllByFactory',
    getById = 'getById',
    create = ''
}

export enum PutProjectUrls{
    updateById = 'updateById',
}

export enum DeleteProjectUrls{
    delete = 'delete'
}



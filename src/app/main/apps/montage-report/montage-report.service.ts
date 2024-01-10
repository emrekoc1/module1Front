
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { DataService } from 'app/services/data.service';
import { SnackBarService } from 'app/services/snackbar.service';

@Injectable()
export class MontageReportService {
    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(private data_service: DataService,
        public snackbarService: SnackBarService) { }

    getOverlappingModes(): string[] {
        let overlappingModes = ["stagger", "rotate", "hide", "none"];
        return overlappingModes;
    }

    async get_reports(reportUrls: ReportUrls, start_date, finish_date): Promise<any> {
        console.log(start_date, finish_date)
        return new Promise((resolve, reject) => {
            this.data_service.post_with_jsonReport("report/" + reportUrls,
                { "start_date": start_date, "finish_date": finish_date })
                .toPromise().then(result => {
                    resolve(result['data']);
                }).catch(err => {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject(err);
                });
        });
    }
       async get960data( start_date, finish_date,poid): Promise<any> {
        console.log(start_date, finish_date)
        return new Promise((resolve, reject) => {
            this.data_service.post_with_jsonReport("report/960",
                { "start_date": start_date, "finish_date": finish_date,"poid":poid })
                .toPromise().then(result => {
                    resolve(result['data']);
                }).catch(err => {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject(err);
                });
        });
    }
    async get536data(markaNumber): Promise<any> {
        
        return new Promise((resolve, reject) => {
            this.data_service.post_with_jsonReport("report/536",
                { "markaNumber":markaNumber })
                .toPromise().then(result => {
                    resolve(result['data']);
                }).catch(err => {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject(err);
                });
        });
    }
    async get_orders(): Promise<any> {
      console.log(this.factoryInfo._id)
        return new Promise((resolve, reject) => {
            this.data_service.post_with_json("productionorder/getAllDurbunByFactory",
                {  facID: this.factoryInfo._id })
                .toPromise().then(result => {

                    console.log("dasdasd",result)
                    resolve(result['data']);
                }).catch(err => {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject(err);
                });
        });
    }
    async nonconformance_get_request(url: ReportGetUrls): Promise<any> {
        return new Promise((resolve, reject) => {
            this.data_service.get('nonconformance/' + url).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show("Bir bağlantı hatası oluştu!");
                reject(err);
            });
        });
    }

    async nonconformance_delete_request(_id, url: ReportDeleteUrls): Promise<any> {
        let params = new HttpParams();
        params.append('id', _id);
        return new Promise((resolve, reject) => {
            this.data_service.delete_with_json('nonconformance/' + url, params).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show("Bir bağlantı hatası oluştu!");
                reject(err);
            });
        });
    }

    async nonconformance_post_request(data, url: ReportPostUrls): Promise<any> {
        return new Promise((resolve, reject) => {
            this.data_service.post_with_json('nonconformance/' + url, data).toPromise().then(result => {
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show("Bir bağlantı hatası oluştu!");
                reject(err);
            });
        });
    }

    async nonconformance_put_request(data, url: ReportPutUrls): Promise<any> {
        return new Promise((resolve, reject) => {
            this.data_service.put_with_json('nonconformance/' + url, data).toPromise().then(result => {
                console.log(result)
                if (result['status'] === 200 && result['data']) {
                    resolve(result['data']);
                } else {
                    this.snackbarService.show("Bir bağlantı hatası oluştu!");
                    reject('Data is not received!');
                }

            }).catch(err => {
                this.snackbarService.show("Bir bağlantı hatası oluştu!");
                reject(err);
            });
        });
    }

    // Handle Errors 
    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}
export enum ReportUrls {
    get_531 = "531",
    get_532 = "532",
    get_533 = "533",
    get_534 = "534",
    get_535a = "535-a",
    get_535b = "535-b",
    get_535c = "535-c",
    get_535d = "535-d",
    get_535fire = "535-fire",
    get_535rework = "535-rework",
get_535a_b_2 = "535-a_b_2",
get_535c_2 = "535-c_2",
    get_960 = "960",
    get_orders="productionOrder/getAllByFactory"
}
export enum ReportGetUrls {
    getAllNonconformances = "",
}
export enum ReportDeleteUrls {
    delete = "delete",
}
export enum ReportPostUrls {
    getById = "getById",
}
export enum ReportPutUrls {
    updateById = "updateById",
}

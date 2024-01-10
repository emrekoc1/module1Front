import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';


export class Appointment {
    id: number;
    incumbent: number;
    assignor: string;
    assignor_id: number
    status: boolean
    text: string;
    startDate: Date;
    endDate: Date;
    allDay?: boolean;
    recurrenceRule:string
}

const appointments: Appointment[] = [
    {
        id: 1,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
     
        text: 'Website Re-Design Plan',
        startDate: new Date('2023-09-26T08:30:00.000Z'),
        endDate: new Date('2023-09-26T09:30:00.000Z'),
    }, {
        id: 2,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date('2023-09-26T09:00:00.000Z'),
        endDate: new Date('2023-09-26T11:00:00.000Z'),
        allDay: true,
    }, {
        id: 3,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Install New Router in Dev Room',
        startDate: new Date('2023-09-26T13:30:00.000Z'),
        endDate: new Date('2023-09-26T14:30:00.000Z'),
    }, {
        id: 4,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Approve Personal Computer Upgrade Plan',
        startDate: new Date('2023-09-27T8:00:00.000Z'),
        endDate: new Date('2023-09-27T10:00:00.000Z'),
    }, {
        id: 5,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Final Budget Review',
        startDate: new Date('2023-09-27T05:00:00.000Z'),
        endDate: new Date('2023-09-27T10:35:00.000Z'),
    }, {
        id: 6,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'New Brochures',
        startDate: new Date('2023-09-27T13:30:00.000Z'),
        endDate: new Date('2023-09-27T17:45:00.000Z'),
    }, {
        id: 7,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Install New Database',
        startDate: new Date('2023-09-28T16:45:00.000Z'),
        endDate: new Date('2023-09-28T17:15:00.000Z'),
    }, {
        id: 8,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Approve New Online Marketing Strategy',
        startDate: new Date('2023-09-28T09:00:00.000Z'),
        endDate: new Date('2023-09-28T12:00:00.000Z'),
    }, {
        id: 9,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Upgrade Personal Computers',
        startDate: new Date('2023-09-28T10:15:00.000Z'),
        endDate: new Date('2023-09-28T13:30:00.000Z'),
    }, {
        id: 10,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Customer Workshop',
        startDate: new Date('2023-09-29T08:00:00.000Z'),
        endDate: new Date('2023-09-29T09:00:00.000Z'),
        allDay: true,
    }, {
        id: 11,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Prepare 2023 Marketing Plan',
        startDate: new Date('2023-09-29T15:00:00.000Z'),
        endDate: new Date('2023-09-29T16:30:00.000Z'),
    }, {
        id: 12,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Brochure Design Review',
        startDate: new Date('2023-09-29T14:00:00.000Z'),
        endDate: new Date('2023-09-29T16:30:00.000Z'),
    }, {
        id: 13,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Create Icons for Website',
        startDate: new Date('2023-09-30T08:30:00.000Z'),
        endDate: new Date('2023-09-30T11:30:00.000Z'),
    }, {
        id: 14,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Upgrade Server Hardware',
        startDate: new Date('2023-09-30T13:30:00.000Z'),
        endDate: new Date('2023-09-30T18:00:00.000Z'),
    }, {
        id: 15,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
        recurrenceRule:"",
        text: 'Submit New Website Design',
        startDate: new Date('2023-09-30T11:30:00.000Z'),
        endDate: new Date('2023-09-01T14:00:00.000Z'),
    }, {
        id: 16,
        incumbent: 30,
        assignor: "string",
        assignor_id: 1,
          status: true,
       
        text: 'Launch New Website',
        recurrenceRule: "FREQ=WEEKLY;COUNT=12;BYDAY=MO",
        startDate: new Date('2023-09-25T05:00:00.000Z'),
        endDate: new Date('2023-09-25T07:00:00.000Z'),
    },
];

@Injectable({
    providedIn: 'root'
})
export class TakvimService {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }

    postTakvim(data){
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('postTakvim', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    putTakvim(data){
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('putTakvim', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    deleteTakvim(data){
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('deleteTakvim', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getUser(){
        let data
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('GetUser', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getTakvim(data){
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getTakvim', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getAtananTakvim(data){
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_yeni_versiyon('getAtananTakvim', data).toPromise().then(result => {
                console.log(result) // resolve ile dönüyor

                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    




    getAppointments(): Appointment[] {
        return appointments;
    }
}


import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { DataService } from 'app/services/data.service';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class MachineRaporServis {

    public factoryInfo = JSON.parse(localStorage.getItem('factory'));

    constructor(public dataService: DataService) { }

    async get_all_machine() {
        return new Promise(async (resolve, reject) => {
            await this.dataService.post_with_json('raporoptik/getMachineStatus', { }).toPromise().then(result => {
                console.log(result);
                if (result['status'] !== 200) {
                    alert('get all batch data error');
                    reject('error');
                } else {
                    console.log("data geldi mi")
                    resolve(result);
                }
            });
        });
    }

 
   
    

  

}



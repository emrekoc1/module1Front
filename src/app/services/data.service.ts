import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private currentProtocol = window.location.protocol;
    private url =this.currentProtocol === 'https:' ? `${environment.api_urls}/` : `${environment.api_url}/`;
    private reporturl = this.currentProtocol === 'https:' ? `${environment.report_urls}/` : `${environment.report_url}/`;
   // private url = environment.api_url + '/';
    //private reporturl = environment.report_url + '/';
     private reporturl1 = environment.report_url1 + '/';
    private httpOptions: any;
    private httpOptions_with_token: any;
    facID: any
    user: any;

    constructor(private http: HttpClient, public router: Router, private jwtHelper: JwtHelperService,) {
        this.facID

        let token
        if (!localStorage.getItem('token')) {
            token = "1693908851"
            this.facID = 0
        } else {
            token = localStorage.getItem('token')
            const decodedToken = this.decodeToken(token);
            this.facID = JSON.parse(localStorage.getItem("currentUser")).facID
            console.log('Çözülen JWT İçeriği:', decodedToken);

            function getCurrentUnixTimestamp() {
                return Math.floor(Date.now() / 1000); // Şu anki zamanı milisaniye cinsinden alıp saniyeye çeviriyoruz
            }
            const currentUnixTimestamp = getCurrentUnixTimestamp();
            console.log(currentUnixTimestamp);
            console.log(currentUnixTimestamp - decodedToken.exp)
            console.log(this.facID)
            if (decodedToken.exp < currentUnixTimestamp) {
                console.log("logout oluşturuldu")
                this.logout()
            }
        }






        this.user = JSON.parse(localStorage.getItem('currentUser'));

        // console.log("gelen süreyi artık görebiliyoruz.",this.user.facID)
        // let cevrimSuresi = 1*60*1000
        // console.log( Date.now() - this.user.facID)
        // console.log(cevrimSuresi)
        // if(cevrimSuresi < Date.now() - this.user.facID)
        // {
        //     alert("kullanım süresi dolmuştur.")


        // }
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.httpOptions_with_token = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem('token'))
            })
        };
    }
    decodeToken(token: string): any {
        const decodedToken = this.jwtHelper.decodeToken(token);
        return decodedToken;
    }
    logout() {
        console.log("burası mı", this.facID)

        let datas = { logoToken: this.facID }
        new Promise(async (resolve, reject) => {
            await this.post_yeni_versiyon('lflowlogOut', datas).toPromise().then(result => {
              
                    localStorage.removeItem('token');
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('factory');
                    localStorage.removeItem('dept_with_work_and_machine');
                    this.router.navigateByUrl('/pages/auth/login-2');
               


            }).catch(err => {
                reject(err);
            });
        });



    }
    autoLogout() {
        const token = localStorage.getItem('token');
        console.log("süre kontrol ediliyor")
        if (this.jwtHelper.isTokenExpired(token)) {
            // Token süresi dolduğunda oturumu kapatın
            this.logout();
        }
    }


    login(path, data): Observable<any> {
        console.log(this.url + path, JSON.stringify(data));
        return this.http.post<any>(this.url + path, JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    sendMail(path, data): Observable<any> {
        console.log(this.url + path, JSON.stringify(data));
        return this.http.post<any>(this.url + path, JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    get(path): Observable<any> {
        return this.http.get<any>(this.url + path, this.httpOptions_with_token)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    post_with_json(path, data): Observable<any> {
        return this.http.post<any>(this.url + path, data,
            this.httpOptions_with_token)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    post_yeni_versiyon(path, data): Observable<any> {
        return this.http.post<any>(this.url + path, data)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }
    post_yeni_versiyonURL(path, data): Observable<any> {
        return this.http.post<any>(this.reporturl + path, data)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }
    put_with_json(path, data): Observable<any> {
        return this.http.put<any>(this.url + path, data, this.httpOptions_with_token)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    delete_with_json(path, params: HttpParams): Observable<any> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem('token')),
            }),
            params: params
        };

        return this.http.delete<any>(this.url + path, options)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    post_with_jsonReport(path, data): Observable<any> {
        return this.http.post<any>(this.reporturl + path, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'report_token': 'bulutify_rest_api'
            })
        })
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    post_with_jsonReport1(path, data): Observable<any> {
        return this.http.post<any>(this.reporturl1 + path, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'report_token': 'bulutify_rest_api'
            })
        })
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    postData(url, list): Observable<any[]> {
        const body = new URLSearchParams();
        Object.keys(list).forEach(function (item) {
            body.set(item, list[item]);
        });
        const options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('x-access-token', this.user.token)
        };
        console.log("sadasd", body);

        return this.http.post<any[]>(url, body.toString(), options);

    }

    errorHandl(error): string {
        console.log(error);
        const errorMessage = '';
        return 'error';
    }


}

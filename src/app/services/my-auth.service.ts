import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SnackBarService } from './snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor(private data_service: DataService,  public router: Router,
    private jwtHelper: JwtHelperService, 
    private snackbarService : SnackBarService) { }

  async login(phone, password) {
    return new Promise(async (resolve, reject) => {
      await this.data_service.login("users/login", { "phone": phone, "password": password }).toPromise().then(result => {
        if (result['status'] != 200) {
          this.snackbarService.show("Giriş yapılamadı, lütfen tekrar deneyiniz!")
          reject("Login error")
        } else {
          this.snackbarService.show("Giriş Yapıldı")
         
          resolve(result);
        }
      })
    })
  }
  async resetPasword(sicil_no,password) {
    return new Promise(async (resolve, reject) => {
      await this.data_service.login("users/paswordReset", { "sicil_no": sicil_no, "password": password }).toPromise().then(result => {
        if (result['status'] != 200) {
          this.snackbarService.show("Giriş yapılamadı, lütfen tekrar deneyiniz!")
          reject("Login error")
        } else {
          resolve(result);
        }
      })
    })
  }
  async PaswordYenileme(sicil_no,email) {
    return new Promise(async (resolve, reject) => {
      await this.data_service.login("users/paswordForget", { "sicil": sicil_no, "email": email }).toPromise().then(result => {
        if (result['status'] != 200) {
          this.snackbarService.show("Giriş yapılamadı, lütfen tekrar deneyiniz!")
          reject("Login error")
        } else {
          resolve(result);
        }
      })
    })
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('factory');
    localStorage.removeItem('dept_with_work_and_machine');
    this.router.navigateByUrl('/pages/auth/login-2');
}
  autoLogout() {
    const token = localStorage.getItem('token');
    console.log("süre kontrol ediliyor")
    if (this.jwtHelper.isTokenExpired(token)) {
      // Token süresi dolduğunda oturumu kapatın
      this.logout();
    }
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { MyAuthService } from 'app/services/my-auth.service';
import { Router } from '@angular/router';
import { environment} from 'environments/environment'
import { DataService } from 'app/services/data.service';
@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Login2Component implements OnInit
{
    public form:FormGroup;
    public hata : String;
    public UserRef = "/User";
    public usertable;
    public value ;
    public girise_basildi ;
    public buldu:boolean=false;
    public fabrikaListesi =[];
    public giris_izni:boolean=false;
    //public gelen_url="https://bulutify.herokuapp.com/"
    public gelen_url = environment.api_url+"/";
    loginForm: FormGroup;
    button_spinner: boolean;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        public auth_service:MyAuthService,
        public router: Router,
        public dataservice:DataService
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

 
    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            phone   : ['', Validators.required],
            password: ['', Validators.required]
        });
    }

 
    async login() {
        // this.button_spinner=true;
        // this.loginForm.disable();
        localStorage.clear();
        await this.auth_service.login(this.loginForm.value.phone,this.loginForm.value.password).then(result=>{
            console.log(result);
            this.loginForm.enable();
            this.button_spinner=false;
            localStorage.setItem('currentUser', JSON.stringify(result['data']['user']));
            localStorage.setItem('token', JSON.stringify(result['data']['token']));
            //localStorage.setItem("factory",JSON.stringify(result['data']['factory']));
           // localStorage.setItem("dept_with_work_and_machine",JSON.stringify(result['data']['dept_with_work_and_machine']));
            // console.log(localStorage.getItem('token'))
            let data =localStorage.getItem('currentUser')
            if (!result['data']['user'].password_status) {
                this.router.navigate(['/pages/auth/reset-password']);
            }else{
                console.log("mememeresads")
            
                this.router.navigate(['/apps/duyru']);
                
            }
            //
            
        }).catch(err=>{

            console.log("dasadadadada")
            // alert("Kullanıcı adı Şifrenizi tekrar kontrol ediniz.")
            // // this.button_spinner=false;
            // // this.loginForm.enable();
            // this.router.navigate(['/pages/auth/login-2']);
            // console.log(err);
        })
       
        
    }


       
    async get_more_information(){
        
    }
    

   
}

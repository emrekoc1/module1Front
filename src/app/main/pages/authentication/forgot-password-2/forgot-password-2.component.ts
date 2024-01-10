import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { MyAuthService } from 'app/services/my-auth.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'forgot-password-2',
    templateUrl  : './forgot-password-2.component.html',
    styleUrls    : ['./forgot-password-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ForgotPassword2Component implements OnInit
{
    forgotPasswordForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public auth_service:MyAuthService,
        public router: Router,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            sicil: ['', [Validators.required]]
        });
    }

    button_spinner: boolean;
    async restPasword(){
         // this.button_spinner=true;
        // this.loginForm.disable();
        localStorage.clear();
        await this.auth_service.PaswordYenileme(this.forgotPasswordForm.value.sicil,this.forgotPasswordForm.value.email).then(result=>{
            console.log(result);
            if(result['status']= 200){
                alert("Mailinize Şifre Sıfırlama İsteyi Gönderilmiştir. Şifrenizi Sıfırlayıp giriş yapabilirsiniz.")
            }
          
          
            
        }).catch(err=>{

           
        })
       
    }
}

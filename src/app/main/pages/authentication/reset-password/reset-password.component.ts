import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyAuthService } from 'app/services/my-auth.service';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'reset-password',
    templateUrl  : './reset-password.component.html',
    styleUrls    : ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ResetPasswordComponent implements OnInit, OnDestroy
{
    resetPasswordForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,public auth_service:MyAuthService,
        public router: Router
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

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    async resetPassword(): Promise<void> {
      
       
            localStorage.clear();
            await this.auth_service.resetPasword(this.resetPasswordForm.value.email,this.resetPasswordForm.value.password).then(result=>{
                console.log(result);
                if(result["status"] == 200){
                   alert("Güncelleme yapılmıştır. Giriş Sayfasına yönlendiriliyorsunuz")
                   this.router.navigate(['/apps/duyru']);
                }else{
                    alert("Tekrar deneyiniz")
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
    

    ngOnInit(): void
    {
        this.resetPasswordForm = this._formBuilder.group({
          
            email          : ['', [Validators.required]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes

        console.log("data gelsin")
        // // this.resetPasswordForm.get('password').valueChanges
        // //     .pipe(takeUntil(this._unsubscribeAll))
        // //     .subscribe(() => {
        // //         this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
        // //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {passwordsNotMatching: true};
};

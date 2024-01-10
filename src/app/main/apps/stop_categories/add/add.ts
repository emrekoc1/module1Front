import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { StopCategoriesService } from '../stop_categories.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-stop-reason-category',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AddStopReasonCategory implements OnInit {

    add_form: FormGroup;
    public is_click:boolean=false;
    factory_informations: any;
    constructor(public stop_service: StopCategoriesService, public activatedRoute: ActivatedRoute, public fb: FormBuilder,public router:Router) {

        this.factory_informations = JSON.parse(localStorage.getItem("factory"))
        this.add_form = this.fb.group({
            name: ['', Validators.required],
            code: ['', Validators.required],
            type:['',Validators.required]
        })


    }


    async ngOnInit() {
       
    }


    add_stop_reason_category(){
        const data = {
            "name": this.add_form.value.name,
            "facID": this.factory_informations._id, 
            "code": this.add_form.value.code,
            "type": parseInt(this.add_form.value.type) 
        }
        this.stop_service.add_stop_category(data).then(result=>{
            this.router.navigate(['apps/stop_categories/list'])
        }).catch(err=>{
            alert(err)
        })


    }

}
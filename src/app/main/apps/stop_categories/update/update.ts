import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { StopCategoriesService } from '../stop_categories.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-stop-category',
    templateUrl: './update.html',
    styleUrls: ['./update.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class UpdateStopReasonCategory implements OnInit {

    add_form: FormGroup;
    public is_click: boolean = false;
    factory_informations: any;
    selected_category_id: any;
    selected_category_info: any;
    constructor(public stop_service: StopCategoriesService, public activatedRoute: ActivatedRoute, public fb: FormBuilder, public router: Router) {
        this.activatedRoute.params.subscribe(data => {
            this.selected_category_id = data.id;
            console.log(data);
        })
        this.factory_informations = JSON.parse(localStorage.getItem("factory"))
        this.add_form = this.fb.group({
            name: ['', Validators.required],
            code: ['', Validators.required],
            type: ['', Validators.required]
        })


    }


    async ngOnInit() {
        await this.stop_service.get_single_category_info({ "category_id": this.selected_category_id }).then(result => {
            this.selected_category_info = result;
            const data = {
                "name": result['name'],
                "code": result['code'],
                "type": result['type'].toString()

            }
            this.add_form.patchValue(data)
        }).catch(err => {
            alert("get single category error");
        })


    }


    update_category() {
        const data = {
            "category_id": this.selected_category_id,
            "name": this.add_form.value.name,
            "facID": this.factory_informations._id,
            "code": this.add_form.value.code,
            "type": parseInt(this.add_form.value.type)

        }
        this.stop_service.update_stop_category(data).then(result => {
            this.router.navigate(['apps/stop_categories/list'])
        }).catch(err => {
            alert(err)
        })


    }

}
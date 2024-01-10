import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { StopCategoriesService } from '../../stop_categories.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-all-machine-stop-add',
    templateUrl: './add.html',
    styleUrls: ['./add.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AddAllMachineStopComponent implements OnInit {
    selected_machine_id: any;
    selected_machine_info: any;
    add_form: FormGroup;
    data_all_stop_category: any;
    selected_stop_reason_list: any;
    show_category_field: boolean = false;
    public is_click: boolean = false;
    public factory_info = JSON.parse(localStorage.getItem('factory'));
    constructor(public stop_service: StopCategoriesService, public activatedRoute: ActivatedRoute, public fb: FormBuilder, public router: Router) {
        this.activatedRoute.params.subscribe(data => {
            this.selected_machine_id = data.id;
            console.log(data);
        });


        this.add_form = this.fb.group({
            category: ['', Validators.required],
            reason: ['', Validators.required]
        });


    }


    async ngOnInit() {
        await this.stop_service.get_all_stop_category().then((result: any) => {
            console.log(result);
            this.data_all_stop_category = result.filter(f => f.code === '001');
        });
        await this.stop_service.get_single_machine_info({ machine_id: this.selected_machine_id }).then(result => {
            this.selected_machine_info = result;
        }).catch(err => {
            alert(err + 'get single machine error');
        });
    }

    async add_stop_reason_for_all_machine() {
        console.log('adding stop reason for machine');
        console.log(this.add_form.value);
        const data = {
            stop_reasonID: this.add_form.value.reason,
            machineID: this.selected_machine_id,
            facID: this.factory_info._id
        };

        this.stop_service.add_reason_to_all_machine(data).then(result => {
            this.router.navigate(['apps/stop_categories/machine-stops']);
        }).catch(err => {
            alert(err);
        });

    }

    async get_reason_by_category(value: any) {
        console.log(value);
        var selected_stop_category = this.data_all_stop_category.find((a: any) => a._id === value);
        if (selected_stop_category.stop_reasons.length > 0) {
            this.show_category_field = true;
            this.selected_stop_reason_list = selected_stop_category.stop_reasons;
        } else {
            alert('seçtiğiniz kategoride neden/nedenler bulunmuyor');
        }

    }


}

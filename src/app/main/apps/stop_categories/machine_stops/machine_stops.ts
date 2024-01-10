import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import DataSource from "devextreme/data/data_source";
import { StopCategoriesService } from '../stop_categories.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../stock/stock.service';
import { IFactoryService } from '../../ifactory/ifactory.service';
@Component({
    selector: 'app-machine_stops',
    templateUrl: './machine_stops.html',
    styleUrls: ['./machine_stops.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class MachineStopsComponent implements OnInit {
    MachineList: any;



    dataSource: DataSource;
    dialogRef: any;
    selected_machine_id: any;
    selected_reason_id: any;
    constructor(public dialog: MatDialog,public stop_service: StopCategoriesService, public batch_service: StopCategoriesService, private fb: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute) {


        this.dataSource = new DataSource({
            key: "_id",
            load: async function (loadOptions: any) {
                return await stop_service.getMachineListWithFactory().then(result => {
                    console.log(result);
                    return {
                        data: result
                    };
                }).catch(err => {
                    alert(err);
                })

            }
        });


    }


    async ngOnInit() {
        await this.stop_service.getMachineListWithFactory().then(result => {
            this.MachineList = result;
        })

    }

    delete_stop_category_from_machine() {
        console.log(this.selected_machine_id, this.selected_reason_id);
        const data = {
            "machine_id":this.selected_machine_id,
            "stop_reason_id":this.selected_reason_id
        }
        this.stop_service.delete_stop_reason_from_machine(data).then(result=>{
            this.dataSource.reload();
            this.close()
        }).catch(err=>{
            alert(err);
        })

    }

    openDialog(content,height,width) {
        this.dialogRef = this.dialog.open(content, { height: height, width: width});

        this.dialogRef.afterClosed().subscribe(result => {
        });
    }
    close() {
        this.dialogRef.close();
    }

    go_to_add_machine_stop_reason(id){
        this.router.navigate(['/apps/stop_categories/machine-stops/add-machine-stop', { id: id }])
    }


}

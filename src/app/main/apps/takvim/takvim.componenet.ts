import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Appointment, TakvimService } from './takvim.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import moment, { Moment } from 'moment';
import { DxSchedulerModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { forEach } from 'lodash';
import notify from 'devextreme/ui/notify';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CustomAppointmentFormComponent } from './custom-appointment-form.component';
@Component({
    selector: 'app-takvim',
    templateUrl: './takvim.component.html',
    styleUrls: ['./takvim.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class TakvimComponent implements OnInit {
    user_type: any
    user_id: any
    appointmentForm: FormGroup;
    constructor(
        private _snackBar: MatSnackBar,
        public takvimService: TakvimService,
        public dialog: MatDialog,

        private fb: FormBuilder,
        public router: Router
    ) {
        
        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type;
        this.user_id = JSON.parse(localStorage.getItem("currentUser"))._id;
        this.appointmentForm = this.fb.group({
            text: ['', Validators.required],
            description: [''],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            incumbent: [this.user_id, Validators.required],
            selectedUserId: [''], // Yeni eklenen alan
            recurrenceRule: ['', Validators.required],
            numberField: ['1', Validators.required],//tekrar sayısı
            selected: ['WEEKLY', Validators.required],
            isChecked: [false, Validators.required],
            secilenTekrarGun: [''],

        });
        this.getTakvim()
    }
    getTakvim() {
        let data = {
            user_id: this.user_id
        }
        this.takvimService.getTakvim(data).then(result => {
            console.log(result["data"]);
            this.appointmentsData = result["data"]
        }).catch(err => {
            console.log("err,", err)
        })
    }

    openAppointmentDialog() {
        // Yeni görev ekleme formunu açmak için bir modal pencereyi açın
        const dialogRef = this.dialog.open(CustomAppointmentFormComponent, {
            width: '700px', // Modal pencere genişliği
        });

        dialogRef.afterClosed().subscribe(result => {
            // Modal pencere kapatıldığında yapılacak işlemleri burada tanımlayabilirsiniz
            if (result) {
                console.log("bunu kaydettik", result)
//burada çalışmaya devam edilecek 
this.takvimService.postTakvim(result).then(gelenData => {
    console.log(gelenData);

}).catch(err => {
    console.log("err,", err)
})
//result gelen datalar yorumlanacak
                // Eğer bir sonuç dönerse (örneğin yeni görev eklendiyse), işlemleri burada yapabilirsiniz
                this.showToast('Added', result.text, 'success');
            }
        });
    }
    ngOnInit(): void {
    }

    appointmentsData: Appointment[];

    currentDate: Date = new Date();
    addAppointment() {
        
        if (this.appointmentForm.valid) {
            // Form verilerini kullanarak yeni görevi oluşturun ve ekleyin
            const newAppointment = this.appointmentForm.value;
            // this.appointmentsData dizisine yeni görevi ekleyin
            
            this.appointmentsData.push(newAppointment);
           
            // Görev eklendikten sonra formu sıfırlayın
            this.appointmentForm.reset();

            // Başarı mesajı gösterin
            this.showToast('Added', newAppointment.text, 'success');
        } else {
            // Form hatalıysa hata mesajı gösterin
            this.showToast('Error', 'Form is incomplete or invalid', 'error');
        }
    }
    showToast(event, value, type) {
        notify(`${event} "${value}"` + ' task', type, 800);
    }

    onAppointmentAdded(e) {
        console.log("data burada mı")
        console.log(e.appointmentData)

        let data = {
            allDay: e.appointmentData.allDay,
            endDate: e.appointmentData.endDate,
            startDate: e.appointmentData.startDate,
            text: e.appointmentData.text,
            recurrenceRule: e.appointmentData.recurrenceRule,
            selectedUserId:this.user_id,
            assignor_id:this.user_id,
            
        }
        this.takvimService.postTakvim(data).then(gelenData => {
            console.log(gelenData);
        
        }).catch(err => {
            console.log("err,", err)
        })
        this.showToast('Added', e.appointmentData.text, 'success');
    }

    onAppointmentUpdated(e) {
        console.log(e.appointmentData)
        let data = {
            allDay: e.appointmentData.allDay,
            endDate: e.appointmentData.endDate,
            startDate: e.appointmentData.startDate,
            text: e.appointmentData.text,
            recurrenceRule: e.appointmentData.recurrenceRule,
            id:e.appointmentData.id,
            
        }
        this.takvimService.putTakvim(data).then(gelenData => {
            console.log(gelenData);
            this.showToast('Updated', e.appointmentData.text, 'info');
            this.getTakvim()
        }).catch(err => {
            console.log("err,", err)
        })
       
    }

    onAppointmentDeleted(e) {
       let data={ id:e.appointmentData.id}
        this.takvimService.deleteTakvim(data).then(gelenData => {
            console.log(gelenData);
            this.showToast('DENEME', e.appointmentData.text, 'warning');
            this.getTakvim()
        }).catch(err => {
            console.log("err,", err)
        })
        
    }


}

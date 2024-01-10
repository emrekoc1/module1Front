import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TakvimService } from './takvim.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-custom-appointment-form',
  templateUrl: './custom-appointment-form.component.html',
  styleUrls: ['./custom-appointment-form.component.css']
})

export class CustomAppointmentFormComponent implements OnInit {
  user_id:any
  appointmentForm: FormGroup;
  userdata: any[] = [];
 
  incumbent = new FormControl('');
  gunler: any = [{ name: "Pazartesi", value: "MO" },
  { name: "Salı", value: "TU" },
  { name: "Çarşamba", value: "WE" },
  { name: "Perşembe", value: "TH" },
  { name: "Cuma", value: "FR" },
  { name: "Cumartesi", value: "SA" },
  { name: "Pazar", value: "SU" }]
  isChecked: boolean = false
  filteredOptions: Observable<string[]>;
  constructor(
    private fb: FormBuilder, public takvimService: TakvimService,
    public dialogRef: MatDialogRef<CustomAppointmentFormComponent>
  ) {
    this.user_id = JSON.parse(localStorage.getItem("currentUser"))._id;
    this.appointmentForm = this.fb.group({
      text: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      incumbent: ['', Validators.required],
      selectedUserId: [''], // Yeni eklenen alan
      recurrenceRule: ['', Validators.required],
      numberField: ['1', Validators.required],//tekrar sayısı
      selected:['WEEKLY', Validators.required],
      isChecked:[false, Validators.required],
      secilenTekrarGun:[this.secilenTekrarGun],
      assignor_id:[this.user_id]
    });
    this.getUser();

  }
  selectedUserId
  acKapa(){
    if(this.isChecked){
      this.isChecked= false
    }else{
      this.isChecked= true
    }}
  ngOnInit(): void {
    this.filteredOptions = this.incumbent.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }
  selectedStates: any
  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value)
    this.appointmentForm.controls['selectedUserId'].setValue(event.option.value);
  }

   
  

  onChangeDepartman(event: any): void {
    console.log(event)
    this.appointmentForm.controls['selected'].setValue(event.option.value);

  }
  secilenTekrarGun :any
  secilenGun(data) {
      this.secilenTekrarGun = data
      this.appointmentForm.controls['secilenTekrarGun'].setValue(this.secilenTekrarGun);
      this.appointmentForm.controls['isChecked'].setValue(this.isChecked);

  }

  getUser() {
    this.takvimService.getUser().then(result => {
      console.log("gelen user", result["postUserNot"]);
      this.userdata = result["postUserNot"];
      this.selectedStates = this.userdata
    }).catch(err => {
      console.log("err,", err)
    });
  }



  saveAppointment() {

    if (
      this.appointmentForm.controls['text'].valid &&
    
      this.appointmentForm.controls['startDate'].valid &&
      this.appointmentForm.controls['endDate'].valid
    ) {
      // Formunuz geçerli, işlemi devam ettirebilirsiniz
      const newAppointment = this.appointmentForm.value;
      this.dialogRef.close(newAppointment);
    } else {
      // Form geçersiz, kullanıcıya gerekli alanları doldurması gerektiğini bildirin veya başka bir işlem yapabilirsiniz.
      console.log('Form geçersiz. Lütfen gerekli alanları doldurun.');
    }
  }
  turkceBuyukHarf(str) {
    var upperCaseStr = "";
    var turkceChars = {
      "i": "İ",
      "ı": "I",
      "ğ": "Ğ",
      "ü": "Ü",
      "ş": "Ş",
      "ö": "Ö",
      "ç": "Ç"
    };
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      upperCaseStr += turkceChars[char.toLowerCase()] || char.toUpperCase();
    }
  
    return upperCaseStr;
  }
  private _filter(value: string): string[] {

    let filterValue = value
    filterValue = this.turkceBuyukHarf(filterValue)
    console.log(filterValue)
    return this.userdata
      .filter(option => option.user_name.toUpperCase().includes(filterValue))

  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyDepartmentService } from './../mydepartment.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarModule,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { filter } from 'lodash';
@Component({
    selector: 'app-departman-evrak-dokuman',
    templateUrl: './evrak-dokuman.component.html',
    styleUrls: ['./evrak-dokuman.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,

})
export class DepartmanEvrakDokumanComponent implements OnInit {
    user_type: any
    constructor(
        public evrakService: MyDepartmentService,
        public dialog: MatDialog,
        private fb: FormBuilder, private _snackBar: MatSnackBar,
        public router: Router
    ) {

        this.user_type = JSON.parse(localStorage.getItem("currentUser")).user_type
        this.evrakGet()
        // this.searchanket()
    }
    displayedColumns = ['belge_no', 'belge_adi', 'belge_aciklama', 'revizyon_no', 'islem', 'islem2', 'islem3']
    filteredData: any
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


    step = 0;

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim().toUpperCase();
      
        this.filteredData = this.groupedData.filter(group => {
          // Grup adı ve açıklaması ile eşleşen grupları al
          const groupMatches = group.name.toUpperCase().includes(filterValue) ||
            group.description.toUpperCase().includes(filterValue);
      
          // Grubun içindekiler arasında eşleşen bir belge var mı kontrol et
          const icindekilerMatch = group.icindekiler.some(item =>
            item.belge_no.toUpperCase().includes(filterValue)
          );
      
          // Grup veya içindekilerden herhangi biri eşleşiyorsa bu grup gösterilir
          return groupMatches || icindekilerMatch;
        });
      }
    datakontrol1 = []
    calismaDuzelt = []
    dataget: any;
    calisma: any = []

    gor(data: any) {
        console.log(data)
    }
    sil(data: any) {
        console.log(data)
    }
    guncelle(data: any) {
        console.log(data)
    }
    customPanelClass: string = 'custom-snackbar';
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    metin: any = "";
    openSnackBar(message: string, action: string, id: number, type: number) {
        const snackBarRef = this._snackBar.open(message, action, {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'my_snackbar_class',

        });
        snackBarRef.onAction().subscribe(() => {

            this.evrakService.evrakDelete(id)
                .then(result => {
                    if (result["status"] === 200) {
                        alert("Silme işlemi yapıldı");
                        this.calismaDuzelt = []
                        this.evrakGet()
                    } else {
                        alert("Silme işlemi Yapılamadı");
                    }
                })
                .catch(err => {
                    alert(err);
                });
        });
    }
    evrakSil(id: any) {
        this.openSnackBar("Evrak Silinecektir.", "ONAYLA", id, 0)
    }
    groupedData: any[] = [];
    ngOnInit(): void {
       
    }
    groupDataByBaId() {
        const groupedDataMap = new Map<number, any>();
    
        for (const item of this.filteredData) {
          const { b_a_id, name, description, kategori_id } = item;
    
          if (groupedDataMap.has(b_a_id)) {
            const group = groupedDataMap.get(b_a_id);
            group.icindekiler.push(item);
          } else {
            groupedDataMap.set(b_a_id, {
              name,
              description,
              kategori_id,
              icindekiler: [item]
            });
          }
        }
    
        this.groupedData = Array.from(groupedDataMap.values());
        this.filteredData = this.groupedData
        console.log(this.filteredData)
      }
    yenile: boolean = true
    egitimAc(data: any) {
        window.open(data, '_blank');
    }
    preventPlayback(event: MouseEvent): void {
        event.preventDefault();
    }
    async evrakGet() {
        let statusbul;
        this.evrakService.get_all_evrak(JSON.parse(localStorage.getItem("currentUser"))).then(result => {
            this.dataget = result;
            if (result["status"] = 200) {

                this.dataget = result["data"]
                console.log(this.dataget)
                this.filteredData = this.dataget
                this.groupDataByBaId();
            }
        }).catch(err => {
            console.log("err,", err)
        })
    }
}


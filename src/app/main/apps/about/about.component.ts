import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataSource from "devextreme/data/data_source";
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  constructor() {
 

  }

 
  ngOnInit(): void {
  }

 
}

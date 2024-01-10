import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departmans',
  templateUrl: './departmans.component.html',
  styleUrls: ['./departmans.component.scss']
})
export class DepartmansComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}

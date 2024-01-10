import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface DataItem {
  id: number;
  name: string;
  start_date: string | null;
  end_date: string | null;
  statu: number;
  statu_name: string;
  ust_is: number;
  children?: DataItem[]; // children'i ekledik
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss'],
})
export class YapilacaklarComponent implements OnInit {
  data: DataItem[] = [];

  constructor(
    public dialog: MatDialog,
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  async isListesiGetir() {
    try {
      const result = await this.homeService.getIsListesi();
      this.data = result['data'];
      console.log(this.data);
    } catch (err) {
      console.log("err,", err);
    }
  }
  getTaskColor(task): any {
    switch (task.statu) {
      case 1:
        return;
      case 2:
        return { 'background-color': 'yellow' };
      case 3:
        return { 'background-color': 'green' };
      default:
        return {};
    }
  }

  ngOnInit(): void {
    this.isListesiGetir();
  }
}

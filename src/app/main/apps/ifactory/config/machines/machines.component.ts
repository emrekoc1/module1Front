import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  @Input() data:any;
  dialogRef: any;
  public selected_machine_data:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(content, size) {
    this.dialogRef = this.dialog.open(content, { height: "auto", width: "40%" });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }
  close() {
    this.dialogRef.close();
  }
}

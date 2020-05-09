import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogComponent>) { }

  ngOnInit(): void {
  }

  onSuccess(){
    this.dialogRef.close();
  }

}

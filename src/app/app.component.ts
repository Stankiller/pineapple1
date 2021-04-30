import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  qty: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pineapple1';

  qty: string = '';

  constructor(public dialog: MatDialog) {}

  /*showDialog() {
    const dialogRef = this.dialog.open(Dialog,{
      width: '250px',data:{product:this.product, qty: this.qty}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
}
/*@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
})
export class Dialog{
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}*/

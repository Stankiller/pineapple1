import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

export interface DialogData {
  qty: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'pineapple1';

  qty: string | any;
  mediasub: Subscription | any;
  mediaXs: boolean | any;

  constructor(public dialog: MatDialog,private mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediasub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.mediaXs = result.mqAlias === 'xs' ? true : false;
    });
  }

  ngOnDestroy(): void{
    this.mediasub.unsubscribe();
  }
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

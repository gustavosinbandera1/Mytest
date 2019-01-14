import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  date: Date;
  data: any; /*data in modal*/
  type: string; /*films,starships, vehicles to change background modal */
  objectKeys = Object.keys;

  constructor(@Inject(MAT_DIALOG_DATA) public dataModal: any) {
    this.data = dataModal.data;
    this.type = dataModal.type;

    this.data.edited = this.formatTime(this.data.edited);
    this.data.created = this.formatTime(this.data.created);
  }
  ngOnInit() {
  }

  formatTime(time: any): string {
    let timeString: string;
    const date = new Date(time);
    timeString = date.getFullYear().toString() + '/';
    timeString += date.getMonth() + '/';
    timeString += date.getDay();
    return timeString;
  }

  isArray(obj: any ) {
    return Array.isArray(obj);
 }

 navigate(url) {
   window.open(url);
 }
}



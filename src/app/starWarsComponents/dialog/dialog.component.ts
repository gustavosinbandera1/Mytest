import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { People } from '../../interfaces/people';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  date: Date;
  actor: People;
  type: number; /*0=films  information 1= starships information 2= vehicles information */
  objectKeys = Object.keys;
  constructor(@Inject(MAT_DIALOG_DATA) public dataModal: any) {
    this.actor = dataModal.data;
    this.type = dataModal.type;
    this.actor.edited = this.formatTime(this.actor.edited);
    this.actor.created = this.formatTime(this.actor.created);
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
}



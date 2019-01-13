import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { People } from '../../interfaces/people';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  date: Date;
  person: People;
  actor: any;
  constructor(@Inject(MAT_DIALOG_DATA) public dataModal: any) {
   this.actor = dataModal.data;
   console.log('el actor');
   console.log(this.actor);
   
    this.actor.edited = this.formatTime(this.actor.edited); 
    this.actor.created = this.formatTime(this.actor.created);
 
   //this.actor.data.edited
               
    }
  ngOnInit() {
  }

  formatTime(time: any): string {
    let timeString: string;
    const date = new Date(time);
    timeString = date.getFullYear().toString() + '/';
    timeString += date.getMonth() + '/';
    timeString += date.getDay();
    console.log('el tiempo');
    console.log(timeString);
    
    
    return timeString;
  }
}



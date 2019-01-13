import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit, OnInit {
@Input() tabs: any[];
@ViewChild('tabGroup') tabGroup;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup.selectedIndex);
  }
  /* 
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
  } */
  tabChanged(tabEvent: MatTabChangeEvent): void {
  console.log('tabChangeEvent => ', tabEvent);
  console.log('index => ', tabEvent.index);
  }
}

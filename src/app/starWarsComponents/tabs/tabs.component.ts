import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit, OnInit {
@Input() tabs: any[];
@Output() tabChange: EventEmitter<any> = new EventEmitter();
@ViewChild('tabGroup') tabGroup;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup.selectedIndex);
  }

  tabChanged(tabEvent: MatTabChangeEvent): void {
  console.log('tabChangeEvent => ', tabEvent);
  console.log('index => ', tabEvent.index);
  this.tabChange.emit(tabEvent.index);
  }
}

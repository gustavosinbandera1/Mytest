import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() datas: any[] = [];
  @Input() imgUrl: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  clickItem(data: any) {
    this.onClickItem.emit(data);
  }

}

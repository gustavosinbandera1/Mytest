import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../../interfaces/people';
@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit {
  @Input() person: People;
// tslint:disable-next-line: no-output-on-prefix
  @Output() onClickActor: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  clickActor(actor: People) {
    this.onClickActor.emit(actor);
  }

}

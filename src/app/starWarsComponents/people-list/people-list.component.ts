import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { People } from '../../interfaces/people';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @Input() peoples: People[] = [];
// tslint:disable-next-line: no-output-on-prefix
  @Output() onClickActor: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


  showActor(actor: People) {
    console.log('hola');
    console.log(actor);
    this.onClickActor.emit(actor);
  }

}

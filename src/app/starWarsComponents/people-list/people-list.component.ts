import { Component, OnInit, Input} from '@angular/core';
import { People } from '../../interfaces/people';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @Input() peoples: People[] = [];
  constructor() { }

  ngOnInit() {
  }


  showActor(actor: People) {
    console.log('hola');
    console.log(actor);
  }

}

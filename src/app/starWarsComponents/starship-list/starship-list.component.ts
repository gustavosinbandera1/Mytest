import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
 @Input() starShips: any;
  constructor() { }

  ngOnInit() {
  }
  clickStarShip(starship) {

  }
}

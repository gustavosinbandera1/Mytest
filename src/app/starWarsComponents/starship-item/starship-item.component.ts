import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship-item',
  templateUrl: './starship-item.component.html',
  styleUrls: ['./starship-item.component.scss']
})
export class StarshipItemComponent implements OnInit {
  @Input() starShip: any;
  constructor() { }

  ngOnInit() {
  }

}


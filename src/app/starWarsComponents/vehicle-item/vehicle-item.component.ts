import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss']
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: any;
  constructor() { }

  ngOnInit() {
  }

}

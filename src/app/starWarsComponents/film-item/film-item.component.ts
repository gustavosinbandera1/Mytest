import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Film } from 'src/app/interfaces/film';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  isActive = false;
  constructor() { }

  ngOnInit() {
  }
}

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Film } from 'src/app/interfaces/film';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickFilm: EventEmitter<any> = new EventEmitter();
  isActive = false;
  constructor() { }

  ngOnInit() {
  }
  selectFilm(film: Film) {
    this.onClickFilm.emit({
      film: film
    });
  }

}

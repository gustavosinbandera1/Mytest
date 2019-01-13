import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StartWarsService } from '../../_services/start-wars.service';
import { People } from '../../interfaces/people';
import { Film } from '../../interfaces/film';
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  @Input() films: Film[] = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickFilm: EventEmitter<any> = new EventEmitter<any>();
  peoples: People[] = [];
  selecteFilm: Film;


  constructor(private http: StartWarsService) {
   }

  ngOnInit() {
  }

  clickFilm(film: Film) {
    console.log('vamos a pasar');
    console.log(film);
    this.onClickFilm.emit(film);
  }

}

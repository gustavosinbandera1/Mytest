import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StartWarsService } from '../../_services/start-wars.service';
import { People } from '../../interfaces/people';
import { Film } from '../../interfaces/film';
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClickFilm: EventEmitter<any> = new EventEmitter<any>();
  films: Film[];
  peoples: People[] = [];
  selecteFilm: Film;
  constructor(private http: StartWarsService) {
    this.getAllFilms();
   }

  ngOnInit() {
  }

  getAllFilms() {
    this.http.getAllFilms().subscribe(films => {
      console.log('los films');
      console.log(films);
      this.films = films;
      console.log(this.films);
    }, (error) => {
      console.log('error');
      console.log(error);
    }
    );
  }
/*
  getAllPeople() {
    this.http.getAllPeople().subscribe(peoples => {
      this.peoples = peoples;
    }, (error) => {
      console.log(error);
    });
  }
*/
  clickFilm(film: Film) {
    console.log('vamos a pasar');
    console.log(film);
    this.onClickFilm.emit(film);
  }

}

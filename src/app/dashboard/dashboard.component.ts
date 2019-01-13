import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../_services/start-wars.service';
import { People } from '../interfaces/people';
import { Film } from '../interfaces/film';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  films: Film[];
  peoples: People[] = [];
  selectedFilm: Film;
  constructor(private http: StartWarsService) {
  this.getAllFilms();
  this.getAllPeople();
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

  getAllPeople() {
    this.http.getAllPeople().subscribe(peoples => {
      this.peoples = peoples;
    }, (error) => {
      console.log(error);
    });
  }

}

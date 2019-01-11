import { Component } from '@angular/core';
import { StartWarsService } from '../_services/start-wars.service';
import { People } from '../interfaces/people';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: any[] = [];
  peoples: People[] = [];
  constructor(private http: StartWarsService) {
    this.getAllFilms();
    this.getAllPeople();
  }

  getAllFilms() {
    this.http.getAllFilms().subscribe(films => {
      this.films = films;
    }, (error) => {
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

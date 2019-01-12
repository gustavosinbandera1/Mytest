import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../_services/start-wars.service';
import { People } from '../interfaces/people';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  films: any[] = [];
  peoples: People[] = [];
  constructor(private http: StartWarsService) {
  this.getAllFilms();
  this.getAllPeople();
  }

  ngOnInit() {
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

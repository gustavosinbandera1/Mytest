import { Component } from '@angular/core';
import { StartWarsService } from '../_services/start-wars.service';
import { Observable, of, throwError  } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: any[] = [];

  constructor(private http: StartWarsService) {
    this.getAllFilms('films');
  }

  ionViewDidLoad() {
    this.getAllFilms('films');
  }
  getAllFilms(films: String) {
    this.http.getApiData(`${films}`)
    .subscribe((data) => { /*success*/
      console.log(data);
      this.films = data;
    },
    (error) => {
      console.log(error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../_services/start-wars.service';
import { People } from '../interfaces/people';
import { Film } from '../interfaces/film';
import { DialogComponent } from '../starWarsComponents/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  films: Film[]; /*store all film on API */
  selectedFilm: Film = Film[0] || {};
  actors: string[]; /*to store actors for any film*/
  actorsData: People[];
  tabsConfig: any = [];
  show = true;

  constructor(
    private http: StartWarsService,
    public dialog: MatDialog) {
    this.getAllFilms();
    this.tabsConfig = [
      {icon: 'high_quality', link: 'Films', title: 'Films'},
      {icon: 'collections_b', link: 'stzarShips', title: 'StarShips'},
      {icon: 'crop_original', link: 'Vehicles', title: 'Vehicles'}
    ];
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

  onSelectFilm(film: Film) {
    this.selectedFilm = film;
    this.actors =  this.getPeopleByFilm(film);
    this.actorsData =  this.getDetailActors(this.actors);
  }

  getPeopleByFilm(film: Film): string[]  {
    return film.characters;
  }

  getDetailActors(actors: string[]): People[] {
    const actorsDetail: People[] = [];
    for (const actor of actors) {
       const id: string = new URL(actor).pathname.split('/')[3] ;
      this.http.getPerson(id).subscribe(person => {
        actorsDetail.push(person);
      }, (error) => {
        console.log(error);
      });
    }
    return actorsDetail;
  }

  openModal(data) {
    console.log('modal');
    console.log(data);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data
    };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  getActiveTap(index) {
    console.log('el tap cambio');
    console.log(index);
  }
}

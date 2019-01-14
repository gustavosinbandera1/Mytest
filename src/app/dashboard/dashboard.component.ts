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
  starShips: any[];
  vehicles: any[];
  actors: string[]; /*to store actors for any film*/
  actorsData: any[];
  tabsConfig: any = [];
  activeTab: any = 0;  /*to know actual selected tab*/
  imgUrl: string[] = [
    'Attack_of_the_Clones.jpg',
    'Return_of_the_Jedi.jpg',
    'Revenge_of_the_Sith.jpg',
    'The_Phantom_Menace.jpg',
    'new_hope.jpg',
    'starwars.jpg'
  ];
  constructor(
    private http: StartWarsService,
    public dialog: MatDialog) {
    this.getAllFilms();
    this.getAllStarShips();
    this.getAllVehicles();
    this.tabsConfig = [
      {icon: 'high_quality', link: 'Films', title: 'Films'},
      {icon: 'collections_b', link: 'starShips', title: 'StarShips'},
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

  getAllStarShips() {
    this.http.getAllStarShips().subscribe(starShips => {
      this.starShips = starShips;
    }, (error) => {
      console.log(error);
    });
  }

  getAllVehicles() {
    this.http.getAllVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  onSelectFilm(film: Film) {
    this.actors =  this.getPeopleByFilm(film);//save url people
    this.actorsData =  this.getDetailActors(this.actors);
  }

  onSelectVehicle(vehicle: any) {

  }

  onSelectStarShip() {

  }

  getPeopleByFilm(film: Film): string[]  {
    return film.characters;
  }

  /* getDetailActors(actors: string[]) {
    const IdArray: any[] = [];

    for (const actor of actors) {
      const id: string = new URL(actor).pathname.split('/')[3] ;
      IdArray.push(id);
    }

    this.http.getPersons(IdArray).subscribe(persons => {
      console.log('las personas');
      console.log(this.actorsData);
    }, (error) => {
      console.log(error);
    });
  } */



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

  getActiveTap(indexTab: any) {
    this.activeTab = indexTab;
    console.log(indexTab);
  }
}

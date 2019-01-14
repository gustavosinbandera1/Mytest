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

  films: Film[] = []; /*store all film on API */
  starShips: any[] = []; /*store all starShips on API */
  vehicles: any[] = []; /*store all vehicles on API */

  actorsData: any[] = []; /*to store information about actors on film */

  filmsData: any[] = []; /*to store films info get with url films*/
  vehiclesData: any[] = [];


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

    this.tabsConfig = [
      {icon: 'high_quality', link: 'Films', title: 'Films'},
      {icon: 'collections_b', link: 'starShips', title: 'StarShips'},
      {icon: 'crop_original', link: 'Vehicles', title: 'Vehicles'}
    ];
  }

  ngOnInit() {
    this.getAllFilms();
    this.getAllStarShips();
    this.getAllVehicles();
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
    this.actorsData =  this.getUrlDetails(film.characters, 'people');
  }

  onSelectStarShip(starship: any) {
    this.filmsData = this.getUrlDetails(starship.films, 'films');
  }

  onSelectVehicle(vehicle: any) {
    this.vehiclesData = this.getUrlDetails(vehicle.films, 'films');
  }

  getUrlDetails(urls: string[], route: string): any[] {
    const itemsDetail: any[] = [];

    for (const url of urls) {
      const id: string = new URL(url).pathname.split('/')[3] ;
      this.http.getDataById(id, route).subscribe(data => {
        itemsDetail.push(data);
      }, (error) => {
        console.log(error);
      });
    }
    return itemsDetail;
  }

  openModal(data: any, type: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data, type
    };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getActiveTap(indexTab: any) {
    this.activeTab = indexTab;
  }
}

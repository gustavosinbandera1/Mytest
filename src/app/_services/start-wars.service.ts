import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { People } from '../interfaces/people';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class StartWarsService {

  private _url: any = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }
  /*this method allow me get data from api rest, only pass route url param*/

  /*main function in API */
  getApiData(infoUrl): Observable<any> {
    return this.http.get<any[]>(this._url + `/${infoUrl}`)
      .pipe(
        map( (data) => {
          if  (data['results']) {
            return data['results'];
          } else {
            return data;
          }
        })
      );
  }

  getAllFilms(): Observable<Film[]> {
    return this.getApiData('films');
  }

  getPerson(id: string): Observable<People> {
    return this.getApiData(`people/${id}`);
  }

  getAllVehicles(): Observable<any[]> {
    return this.getApiData('vehicles');
  }

  getAllStarShips(): Observable<any[]> {
    return this.getApiData('starships');
  }
}

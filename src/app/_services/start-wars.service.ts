import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { People } from '../interfaces/people';
import { Film } from '../interfaces/film';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  getPerson(id: any): Observable<any> {
    return this.getApiData(`people/${id}`);
  }
 /*
 getPersons(ids: any[]): Observable<any> {
   let params = new HttpParams();
   params = params.append('ids', JSON.stringify(ids));
  return this.http.get<any[]>(this._url + `/people/`, {params})
  .pipe(
    map( (data) => {
      if  (data['results']) {
        console.log('la respuesta en service');
        console.log(data);
        return data['results'];
      } else {
        console.log('la respuesta en service');
        console.log(data);
        return data;
      }
    })
  );
 }*/

  getAllVehicles(): Observable<any[]> {
    return this.getApiData('vehicles');
  }

  getAllStarShips(): Observable<any[]> {
    return this.getApiData('starships');
  }
}

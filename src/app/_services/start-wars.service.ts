import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StartWarsService {
  private _url: any = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }
  /*this method allow me get data from api rest, only pass route url param*/
  getApiData(infoUrl): Observable<any[]> {
    return this.http.get<any[]>(this._url + `/${infoUrl}`)
      .pipe(
        map( (data) => {
          return data['results'];
        })
      );
  }
}

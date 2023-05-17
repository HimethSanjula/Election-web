import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {getEndElections, getStartElection} from "../../model/election/election";


@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  _url = 'http://localhost:8000';
  constructor(private _http:HttpClient) { }

  getElections() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.get<any>(this._url+'/api/elections',httpOptions);
  }

  getElection(id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.get<any>(this._url+'/api/election/'+id,httpOptions);
  }

  getStartElection(startElec: getStartElection) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }),
    };

    return this._http.post<any>(this._url + '/api/electionsby', startElec, httpOptions);
  }

  getEndElection(endElec: getEndElections) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }),
    };

    return this._http.post<any>(this._url + '/api/electionsby', endElec, httpOptions);
  }

}

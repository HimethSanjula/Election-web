import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Election} from "../../model/election/election";
import {Participate} from "../../model/participate/participate";

@Injectable({
  providedIn: 'root'
})
export class ParticipateService {

  _url = 'http://localhost:8000';
  constructor(private _http:HttpClient) { }

  addParticipate(participate: Participate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      })
    };
    return this._http.post<any>(this._url+'/api/electionparticipant/create',participate,httpOptions);
  }

  getParticipate(id:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.get<any>(this._url+'/api/electionparticipant/'+id,httpOptions);
  }

}

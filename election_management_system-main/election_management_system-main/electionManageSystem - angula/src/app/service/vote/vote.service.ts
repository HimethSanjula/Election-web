import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  _url = 'http://localhost:8000';

  constructor(private _http:HttpClient) { }

  getPartyVoteResults(electionId:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };
    return this._http.post<any>(this._url+'/api/partyvoteresultsbycount/',electionId,httpOptions);
  }

  getCandiVoteResults(candi:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };
    return this._http.post<any>(this._url+'/api/candidatevoteresultsbycount/',candi,httpOptions);
  }

}

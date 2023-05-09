import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {getPartyElectionBy, Partie} from "../../model/partie/partie";
import {Candidate, getCandidatesByParty} from "../../model/candidate/candidate";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  _url = 'http://localhost:8000';
  constructor(private _http:HttpClient) { }

  addCandidate(candidate: Candidate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.post<any>(this._url+'/api/candidate/create',candidate,httpOptions);
  }

  getCandidate(id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.get<any>(this._url+'/api/candidate/'+id,httpOptions);
  }

  getCandidatesByParty(partyId: getCandidatesByParty) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }),
    };

    return this._http.post<any>(this._url + '/api/candidatesby', partyId, httpOptions);
  }

  upddateCandidate(id: string,candidate:Candidate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.put<any>(this._url+'/api/candidate/update/'+id,candidate,httpOptions);
  }

}

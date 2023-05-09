import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user/user";
import {CandidateVote, PartyVote} from "../../model/vote/vote";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  _url = 'http://localhost:8000';

  constructor(private _http:HttpClient) { }

  partyVote = new PartyVote("", "", "")

  addVoteParty(partyVote:PartyVote){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };
    return this._http.post<any>(this._url+'/api/partyvote/',partyVote,httpOptions);
  }

  addVoteCandidate(candidateVote:CandidateVote){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };
    return this._http.post<any>(this._url+'/api/candidatevote/',candidateVote,httpOptions);
  }

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

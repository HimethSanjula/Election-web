import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Election} from "../../model/election/election";
import {getPartyElectionBy, Partie} from "../../model/partie/partie";

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  _url = 'http://localhost:8000';

  constructor(private _http: HttpClient) {
  }

  addPartie(partie: Partie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.post<any>(this._url + '/api/party/create', partie, httpOptions);
  }

  getParty(id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.get<any>(this._url+'/api/party/'+id,httpOptions);
  }

  getPartiesByElectionId(electionId: getPartyElectionBy) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }),
    };

    return this._http.post<any>(this._url + '/api/partiesby', electionId, httpOptions);
  }

  updateParty(id: string,party:Partie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.put<any>(this._url+'/api/party/update/'+id,party,httpOptions);
  }

}

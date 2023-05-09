import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ElectionService} from "../service/election/election.service";
import {Election} from "../model/election/election";
import {PartieService} from "../service/partie/partie.service";
import { getCandidatesByParty } from '../model/candidate/candidate';
import {CandidateService} from "../service/candidate/candidate.service";

export interface electionData {

  _id: string,
  election_name: string,
  location: string,
  date: string,
  start_time: string,
  end_time: string,
  description: string,
  image_name: string,

}

@Injectable({
  providedIn: 'root',
})


export class ElectionController {

  electionData!: electionData[];
  party_id!: string;

  constructor(private router: Router,private _candidateservice: CandidateService,private _partieService: PartieService, private _electionService: ElectionService) {
  }

  electionModel = new Election("", "", "", "", "", "", "", false)
  getCandidatesByPartyModel = new getCandidatesByParty("")

  getElections() {
    this._electionService.getElections().subscribe(
      response => {
        console.log('success', response);
        this.electionModel = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getParty(id: string) {
    this.party_id = id;
    this._partieService.getParty(id).subscribe(
      response => {
        console.log('success', response);
      }, error => {
        console.log('failed', error);
      }
    );
  }

}

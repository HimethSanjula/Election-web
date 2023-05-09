import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {ElectionService} from "../../service/election/election.service";
import {Election} from "../../model/election/election";
import {PartieService} from "../../service/partie/partie.service";
import {CandidateService} from "../../service/candidate/candidate.service";
import {getPartyElectionBy, Partie} from "../../model/partie/partie";
import {Candidate, getCandidatesByParty} from "../../model/candidate/candidate";

interface electionData {

  _id: string,
  election_name: string,
  location: string,
  date: string,
  start_time: string,
  end_time: string,
  description: string,
  image_name: string,

}

export interface getPartyElection {
  election_id: string
  party_banner: string
  party_color: string
  party_description: string
  party_icon: string
  party_name: string
  status: true
  __v: string
  _id: string

}

export interface getCandidatesParty {
  candidate_name: string,
  party_id: string,
  candidate_image: string,
  candidate_number: string,
  candidate_description: string
  status: true
  __v: string
  _id: string

}

interface participate {
  election_id: string,
  participants: string[],
  length: string,
  __v: string,
  _id: string,
};
@Component({
  selector: 'app-election-details',
  templateUrl: './election-details.component.html',
  styleUrls: ['./election-details.component.css']
})
export class ElectionDetailsComponent implements OnInit {


  election_id!: string;
  party_id!: string;
  candidate_id!: string;

  electionData!: electionData[];
  getPartyElection!: getPartyElection[];

  getCandidatesParty!: getCandidatesParty[];

  participate!: participate[];

  constructor(private _userService: UserService, private router: ActivatedRoute, private _electionService: ElectionService, private _partieService: PartieService, private _candidateservice: CandidateService) {
  }

  electionModel = new Election("", "", "", "", "", "", "");
  partyModel = new Partie("", "", "", "", "", "")
  getCandidatesByPartyModel = new getCandidatesByParty("")
  candidateModel = new Candidate("", "", "", "", "")
  getPartyByElectionIdModel = new getPartyElectionBy("");


  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      // @ts-ignore
      this.election_id = params.get('id').toString();
      console.log(this.election_id);
      this.getElection(this.election_id);
      this.getPartiesByElection();
    })
  }

  getElection(id: string) {
    this._electionService.getElection(id).subscribe(
      response => {
        console.log('success', response);
        this.electionModel = response;
        console.log(this.electionModel)
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
        this.partyModel = response;
        this.getCandidatesByParty();
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getPartiesByElection() {
    this.getPartyByElectionIdModel.election_id = this.election_id;
    this._partieService.getPartiesByElectionId(this.getPartyByElectionIdModel).subscribe(
      response => {
        console.log('success', response);
        this.getPartyElection = response;
        console.log(this.getCandidatesParty)
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getCandidate(id: string) {
    this.candidate_id = id;
    this._candidateservice.getCandidate(id).subscribe(
      response => {
        console.log('success', response);
        this.candidateModel = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getCandidatesByParty() {
    this.getCandidatesByPartyModel.party_id = this.party_id;
    this._candidateservice.getCandidatesByParty(this.getCandidatesByPartyModel).subscribe(
      response => {
        console.log('success', response);
        this.getCandidatesParty = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

}

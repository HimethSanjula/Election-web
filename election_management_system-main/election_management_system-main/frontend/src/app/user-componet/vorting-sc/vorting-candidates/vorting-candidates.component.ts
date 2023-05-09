import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getCandidatesByParty} from "../../../model/candidate/candidate";
import {CandidateService} from "../../../service/candidate/candidate.service";
import {Partie} from "../../../model/partie/partie";
import {PartieService} from "../../../service/partie/partie.service";
import {VoteService} from "../../../service/vote/vote.service";
import {PartyVote} from "../../../model/vote/vote";
import {User} from "../../../model/user/user";
import {UserService} from "../../../service/user/user.service";
import {ElectionService} from "../../../service/election/election.service";
import {Election} from "../../../model/election/election";


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

@Component({
  selector: 'app-vorting-candidates',
  templateUrl: './vorting-candidates.component.html',
  styleUrls: ['./vorting-candidates.component.css']
})
export class VortingCandidatesComponent implements OnInit {

  currentTime!: string;
  election_id!: string;
  party_id!: string;
  user_id!: string;
  getCandidatesParty!: getCandidatesParty[];
  is_candidate_votable! : boolean;
  showContent = false;

  constructor(private router: Router, private _voteService: VoteService, private route: ActivatedRoute, private _candidateservice: CandidateService, private _partieService: PartieService,private _userService: UserService,private _electionService:ElectionService) {

  }

  getCandidatesByPartyModel = new getCandidatesByParty("")
  partyModel = new Partie("", "", "", "", "", "")
  partyVote = new PartyVote("", "", "")

  userModel = new User("", "", "", "", "", "", "", "", "", "", "", undefined)
  electionModel = new Election("", "", "", "", "", "", "")

  ngOnInit(): void {
    this.time();
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.party_id = params.get('id').toString();
      // @ts-ignore
      this.user_id = params.get('uId').toString();
      console.log("partyid", this.party_id);
      console.log("userid", this.user_id);
      this.getCandidatesByParty();
      this.getParty();
      this.getUser();
    });
  }

  voteDetails(id: string) {
    this.router.navigate([`vote-candidate-details/` + id,this.election_id,this.user_id]);
  }

  fingerPrint() {
    this.partyVote.elecId = this.election_id;
    this.partyVote.partyId = this.party_id;
    this.partyVote.userId = this.user_id;
    this.router.navigate([`vote-scan`],
    {queryParams:{voteModel:JSON.stringify(this.partyVote)}});
  }

  time() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
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

  getParty() {
    this._partieService.getParty(this.party_id).subscribe(
      response => {
        console.log('success', response);
        this.partyModel = response;
        this.election_id = this.partyModel.election_id;
        console.log(this.election_id);
        this.getElection();
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getUser() {
    this._userService.getUser(this.user_id).subscribe(
      response => {
        console.log('success', response);
        this.userModel = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getElection() {
    this._electionService.getElection(this.election_id).subscribe(
      response => {
        console.log('success', response);
        this.electionModel = response;
        this.is_candidate_votable = response['candidate_votable'];
        console.log(this.is_candidate_votable);
        this.showContent = this.is_candidate_votable;
      }, error => {
        console.log('failed', error);
      }
    );
  }

}

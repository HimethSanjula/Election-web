import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CandidateService} from "../../../service/candidate/candidate.service";
import {Candidate} from "../../../model/candidate/candidate";
import {CandidateVote} from "../../../model/vote/vote";
import {VoteService} from "../../../service/vote/vote.service";

@Component({
  selector: 'app-vote-sc',
  templateUrl: './vote-sc.component.html',
  styleUrls: ['./vote-sc.component.css']
})
export class VoteScComponent implements OnInit{

  constructor(private router:Router,private route: ActivatedRoute,private _voteService: VoteService, private _candidateservice: CandidateService) {
  }

  candidateModel = new Candidate("", "", "", "", "")
  candidateVote = new CandidateVote("", "", "", "");
  currentTime!:string;
  candidate_id!: string;
  election_id!:string;
  party_id!: string;
  user_id!: string;

  ngOnInit(): void {
    this.time();
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.candidate_id = params.get('id').toString();
      // @ts-ignore
      this.election_id = params.get('eId').toString();
      // @ts-ignore
      this.user_id = params.get('uId').toString();
      console.log(this.candidate_id);
      console.log(this.election_id);
      console.log(this.user_id);
      this.getCandidate();
    });
  }


  fingerPrint(){
    this.candidateVote.elecId = this.election_id;
    this.candidateVote.partyId = this.party_id;
    this.candidateVote.candidateId= this.candidate_id;
    this.candidateVote.userId = this.user_id;
    this.router.navigate([`vote-scan-candidate`],
    {queryParams:{candiModel:JSON.stringify(this.candidateVote)}});
  }

  time(){
    setInterval(()=>{
      this.currentTime = new Date().toLocaleTimeString();
    },1000);
  }

  getCandidate() {
    this._candidateservice.getCandidate(this.candidate_id).subscribe(
      response => {
        console.log('success', response);
        this.candidateModel = response;
        this.party_id = this.candidateModel.party_id;
      }, error => {
        console.log('failed', error);
      }
    );
  }



}

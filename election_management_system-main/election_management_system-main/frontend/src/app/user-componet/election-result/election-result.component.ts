import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Chart, registerables} from 'node_modules/chart.js';
import { VoteService } from 'src/app/service/vote/vote.service';
import {CandidateService} from "../../service/candidate/candidate.service";
import {PartieService} from "../../service/partie/partie.service";
import {getPartyElectionBy} from "../../model/partie/partie";
import {getCandidatesByParty} from "../../model/candidate/candidate";
import {Election, electionId, getCandiVote} from "../../model/election/election";
import { ElectionService } from 'src/app/service/election/election.service';

Chart.register(...registerables);

export interface getPartyElection {
  count: any;
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
  count: any;
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
  selector: 'app-election-result',
  templateUrl: './election-result.component.html',
  styleUrls: ['./election-result.component.css']
})
export class ElectionResultComponent implements OnInit{

  currentTime!:string;
  party_id!: string;
  election_id!: string;
  getPartyElection!: getPartyElection[];
  getCandidatesParty!: getCandidatesParty[];
  partyIdArray: string[] = [];
  candiIdArray: string[] = [];
  partyNameArray: string[] = [];
  candiNameArray: string[] = [];
  countArray: any[]=[];
  candiCountArray: any[]=[];

  constructor(private _candidateservice: CandidateService,private _electionService: ElectionService, private route: ActivatedRoute, private _partieService: PartieService, private _voteService: VoteService) {
  }

  getPartyByElectionIdModel = new getPartyElectionBy("");
  getCandidatesByPartyModel = new getCandidatesByParty("");
  electionIdModel = new electionId("");
  getCandiVoteModel = new getCandiVote("", "");
  electionModel = new Election("", "", "", "", "", "", "");

  ngOnInit(): void {
    this.time();
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.election_id = params.get('id').toString();
      console.log('electionId', this.election_id);

    })
    this.getPartiesByElection();
    this.getElection();
  }

  getElection() {
    this._electionService.getElection(this.election_id).subscribe(
      response => {
        console.log('success', response);
        this.electionModel = response;
        console.log(this.electionModel)
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
        response.forEach(party=>{
          // @ts-ignore
          this.partyIdArray.push(party._id);
          this.partyNameArray.push(party.party_name);
        });
        console.log(this.partyIdArray,this.partyNameArray);
        this.barChart(this.partyNameArray,this.countArray);
        this.doughnutChart(this.partyNameArray,this.countArray);
        this.getPartyElection = response;
        this.getPartyVoteResults();
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
        // this.partyModel = response;
        this.getCandidatesByParty();
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getPartyVoteResults() {
    this.electionIdModel.electionId = this.election_id;
    this._voteService.getPartyVoteResults(this.electionIdModel).subscribe(
      response => {
        console.log('success', response);

        this.partyIdArray.forEach(partyId=>{
          const partyResult = response.find(item => item._id.partyId === partyId);
          if (partyResult) {
            const count = partyResult.count;
            console.log(`Party  has ${count} votes.`);
            this.getPartyElection.forEach(partyData => {
              if (partyData._id === partyResult._id.partyId) {
                partyData.count = count;
                this.countArray.push(partyData.count);
                console.log(this.countArray);
              }
            })
          } else {
            console.log(`No results found for party.`);
          }
        });

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
        response.forEach(candi=>{
          // @ts-ignore
          this.candiIdArray.push(candi._id);
          this.candiNameArray.push(candi.candidate_name);
        });
        console.log(this.candiIdArray,this.candiNameArray);
        this.candiBarChart(this.candiNameArray,this.candiCountArray);
        this.candiDoughnutChart(this.candiNameArray,this.candiCountArray);
        this.getCandiVoteResults();
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getCandiVoteResults() {
    this.getCandiVoteModel.electionId = this.election_id;
    this.getCandiVoteModel.partyId = this.party_id;
    this._voteService.getCandiVoteResults(this.getCandiVoteModel).subscribe(
      response => {
        console.log('success', response);

        this.candiIdArray.forEach(candiId=>{
          const candiResult = response.find(item => item._id.candidateId === candiId);
          if (candiResult) {
            const count = candiResult.count;
            console.log(`candi  has ${count} votes.`);
            this.getCandidatesParty.forEach(candiData => {
              if (candiData._id === candiResult._id.candidateId) {
                candiData.count = count;
                this.candiCountArray.push(candiData.count);
                console.log(this.candiCountArray);
              }
            })
          } else {
            console.log(`No results found for candi.`);
          }
        });

      }, error => {
        console.log('failed', error);
      }
    );
  }


  barChart(partyName:any,count:any) {
    const ctx = document.getElementById('barChart');

    // @ts-ignore
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: partyName,
        datasets: [{
          label: '# of Votes',
          data: count,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  doughnutChart(partyName:any,count:any) {
    const ctx = document.getElementById('doughnutChart');

    // @ts-ignore
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: partyName,
        datasets: [{
          label: 'My First Dataset',
          data: count,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ],
          hoverOffset: 4
        }]
      }
    });

  }


  candiBarChart(candiName:any,count:any) {
    const ctx = document.getElementById('candiBarChart');

    // @ts-ignore
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: candiName,
        datasets: [{
          label: '# of Votes',
          data: count,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  candiDoughnutChart(candiName:any,count:any) {
    const ctx = document.getElementById('candiDoughnutChart');

    // @ts-ignore
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: candiName,
        datasets: [{
          label: 'My First Dataset',
          data: count,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      }
    });

  }

  time(){
    setInterval(()=>{
      this.currentTime = new Date().toLocaleTimeString();
    },1000);
  }


}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getEndElections} from "../../model/election/election";
import {ElectionService} from "../../service/election/election.service";

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

@Component({
  selector: 'app-election-history',
  templateUrl: './election-history.component.html',
  styleUrls: ['./election-history.component.css']
})
export class ElectionHistoryComponent implements OnInit {

  electionData!: electionData[];

  ngOnInit(): void {
    this.getEndElections();
  }

  constructor(private router: Router,private route: ActivatedRoute, private _electionService: ElectionService) {
  }

  getEndElectionModel = new getEndElections(false);

  partyHistory(id:any){
    this.router.navigate([`party-history/` + id]);
  }

  getEndElections() {
    this.getEndElectionModel.is_ended = true;
    this._electionService.getEndElection(this.getEndElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.electionData = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

}

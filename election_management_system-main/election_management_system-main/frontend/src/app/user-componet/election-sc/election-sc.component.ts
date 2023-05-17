import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ElectionService} from "../../service/election/election.service";
import {Election, getEndElections} from "../../model/election/election";


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
  selector: 'app-election-sc',
  templateUrl: './election-sc.component.html',
  styleUrls: ['./election-sc.component.css']
})
export class ElectionScComponent {

  electionData!: electionData[];

  ngOnInit(): void {
    this.getElections();
  }

  electionDetails(id:string){
    this.router.navigate([`election-details/` + id]);
  }

  constructor(private router: Router, private _electionService: ElectionService) {
  }

  electionModel = new Election("", "", "", "", "", "", "")
  getEndElectionModel = new getEndElections(false);


 
  getElections() {
    this.getEndElectionModel.is_ended = false;
    this._electionService.getEndElection(this.getEndElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.electionData = response;
        this.electionModel = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }




}

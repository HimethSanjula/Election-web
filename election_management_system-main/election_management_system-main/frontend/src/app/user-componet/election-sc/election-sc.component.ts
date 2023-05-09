import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ElectionService} from "../../service/election/election.service";
import {Election} from "../../model/election/election";


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

  getElections() {
    this._electionService.getElections().subscribe(
      response => {
        console.log('success', response);
        this.electionModel = response;
        this.electionData = response;
        console.log(this.electionModel)
      }, error => {
        console.log('failed', error);
      }
    );
  }




}

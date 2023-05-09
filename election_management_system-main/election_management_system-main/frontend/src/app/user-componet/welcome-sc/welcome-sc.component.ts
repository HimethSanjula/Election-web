import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {getStartElection, getStartElectionId} from "../../model/election/election";
import {ElectionService} from "../../service/election/election.service";

interface electionData {

  _id: string,

}

@Component({
  selector: 'app-welcome-sc',
  templateUrl: './welcome-sc.component.html',
  styleUrls: ['./welcome-sc.component.css']
})
export class WelcomeScComponent implements OnInit {

  electionData!: electionData[];
  ngOnInit(): void {
    this.getStartedElection();
  }

  elections() {
    this.router.navigate([`elections`]);
  }

  userReg() {
    this.router.navigate([`user-register`]);

  }

  fogrotPass() {
    this.router.navigate([`user-login`]);
  }

  electionResult(id:any) {
    this.router.navigate([`election-result/` + id]);
  }

  login(){
    this.router.navigate([`user-login`]);
  }


  showContent = false;


  toggleContent() {
    this.showContent = !this.showContent;
  }

  constructor(private router: Router, private _electionService: ElectionService) {
  }

  getStartElectionModel = new getStartElection(false);
  getStartElectionId = new getStartElectionId("");

  getStartedElection() {
    this.getStartElectionModel.is_started = true;
    this._electionService.getStartElection(this.getStartElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.electionData = response;
        if (response.length === 1) {
          console.log(true);
          this.toggleContent();

        } else {
          console.log(false);
        }
      }, error => {
        console.log('failed', error);
      }
    );
  }


}

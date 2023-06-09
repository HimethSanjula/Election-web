import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ElectionService} from "../../service/election/election.service";
import {Election, getEndElections, getStartElectionIs} from "../../model/election/election";
import {NgForm} from "@angular/forms";
import {ElectionController} from "../../controller/election.controller";

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
  selector: 'app-manage-election-sc',
  templateUrl: './manage-election-sc.component.html',
  styleUrls: ['./manage-election-sc.component.css']
})
export class ManageElectionScComponent implements OnInit {

  selectedFile!: File;
  imageUrl!: string;
  electionData!: electionData[];
  currentElectionId!: string;
  buttonState: { [id: string]: boolean } = {};
  // @ts-ignore
  startButtonShowB!:boolean = false;
  startElectionId!:string;
  btnd:boolean = false;

  @ViewChild('electionDetails') form: NgForm | undefined;

  ngOnInit(): void {
    this.getElections();
    this.getStartedElection();
  }

  constructor(private router: Router, private _electionService: ElectionService) {
  }

  viewElectionPage(id: string) {
    this.router.navigate([`view-election/` + id]);
  }

  // @ts-ignore
  electionModel = new Election("", "", "", "", "", "", this.selectedFile)
  getStartElectionModel = new getStartElectionIs(false);
  getEndElectionModel = new getEndElections(false);

  getElections() {
    this.getEndElectionModel.is_ended = false;
    this._electionService.getEndElection(this.getEndElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.electionData = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  startButton(id: string) {
    this.currentElectionId = id;

  }

  startButtonShow(id:any){
    if (this.startButtonShowB){
      console.log("ok");
      this.buttonState[id] = true;

      // Disable other start buttons
      const startButtons = document.querySelectorAll(".start-btn") as NodeListOf<HTMLButtonElement>;
      startButtons.forEach(button => {
        if (button.dataset['electionId'] !== id) {
          button.disabled = true;
        }
      });
    }else {
      console.log("no");
    }
  }

  startElection(id: any) {
    console.log(this.currentElectionId);
    this._electionService.startElection(id).subscribe(
      response => {
        console.log('success', response);
        this.getStartedElection();

      }, error => {
        console.log('failed', error);
      }
    );
  }

  getStartedElection() {
    this.getStartElectionModel.is_started = true;
    this._electionService.getStartElection(this.getStartElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.startElectionId = response[0]["_id"]
        // console.log(this.startElectionId);
        if (response.length === 1) {
          this.startButtonShowB = true;
          console.log(this.startButtonShowB);
          this.startButtonShow(this.startElectionId);
          this.btnd = true;
        } else {
         
        }
      }, error => {
        console.log('failed', error);
      }
    );
  }

  stopButton(id: string) {
    this.currentElectionId = id;
  }

  stopElection(id: any) {
    console.log(this.currentElectionId);
    this._electionService.stopElection(id).subscribe(
      response => {
        console.log('success', response);
        this.buttonState[id] = false;

        // Enable all start buttons
        const startButtons = document.querySelectorAll(".start-btn") as NodeListOf<HTMLButtonElement>;
        startButtons.forEach(button => {
          button.disabled = false;
          this.btnd = false;
          this.getElections();
        });
      }, error => {
        console.log('failed', error);
      }
    );
  }


  startBtnOff(){
    const startButtons = document.querySelectorAll(".start-btn") as NodeListOf<HTMLButtonElement>;
      startButtons.forEach(button => {
        if (button.dataset['electionId'] !== this.startElectionId) {
          button.disabled = true;
        }
      });
  }

}

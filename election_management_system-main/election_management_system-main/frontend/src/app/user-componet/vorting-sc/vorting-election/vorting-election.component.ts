import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ElectionService} from "../../../service/election/election.service";
import {Election, getStartElection} from "../../../model/election/election";

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
  selector: 'app-vorting-election',
  templateUrl: './vorting-election.component.html',
  styleUrls: ['./vorting-election.component.css']
})
export class VortingElectionComponent implements OnInit{

  electionData!: electionData[];

  constructor(private router:Router,private route: ActivatedRoute,private _electionService: ElectionService) {

  }

  electionModel = new Election("", "", "", "", "", "", "");
  getStartElectionModel = new getStartElection(false);


  currentTime!:string;
  userId!: string;

  ngOnInit(): void {
    this.time();
    this.getStartedElection();
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.userId = params.get('id').toString();
      console.log(this.userId);

    });
  }

  voteParty(id:string){
  this.router.navigate([`vote-parties/`+ id,this.userId]);
}

  time(){
    setInterval(()=>{
      this.currentTime = new Date().toLocaleTimeString();
    },1000);
  }

  getStartedElection() {
    this.getStartElectionModel.is_started = true;
    this._electionService.getStartElection(this.getStartElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.electionData = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }




}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getPartyElectionBy} from "../../../model/partie/partie";
import {PartieService} from "../../../service/partie/partie.service";

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

@Component({
  selector: 'app-vorting-parties',
  templateUrl: './vorting-parties.component.html',
  styleUrls: ['./vorting-parties.component.css']
})
export class VortingPartiesComponent implements OnInit{

  constructor(private router:Router,private route: ActivatedRoute,private _partieService: PartieService) {

  }

  getPartyByElectionIdModel = new getPartyElectionBy("");

  currentTime!:string;
  startElectionId!: string;
  userId!: string;
  getPartyElection!: getPartyElection[];

  ngOnInit(): void {
    this.time();
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.startElectionId = params.get('id').toString();
      // @ts-ignore
      this.userId = params.get('uId').toString();
      console.log(this.startElectionId);
      console.log("userid",this.userId);
      this.getPartiesByElection();
    });
  }
  candidatePage(id:string){
    this.router.navigate([`vote-candidate/`+ id,this.userId]);
  }

  time(){
    setInterval(()=>{
      this.currentTime = new Date().toLocaleTimeString();
    },1000);
  }

  getPartiesByElection() {
    this.getPartyByElectionIdModel.election_id = this.startElectionId;
    this._partieService.getPartiesByElectionId(this.getPartyByElectionIdModel).subscribe(
      response => {
        console.log('success', response);
        this.getPartyElection = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }



}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ElectionService} from "../../service/election/election.service";
import {ElectionController} from "../../controller/election.controller";
import {Election} from "../../model/election/election";
import {NgForm} from "@angular/forms";
import {getPartyElectionBy, Partie} from "../../model/partie/partie";
import {PartieService} from "../../service/partie/partie.service";
import {CandidateService} from "../../service/candidate/candidate.service";
import {Candidate, getCandidatesByParty} from "../../model/candidate/candidate";
import {Participate} from "../../model/participate/participate";
import {ParticipateService} from "../../service/participate/participate.service";
import {UserService} from "../../service/user/user.service";

interface userData {
  _id: string,
  first_name: string,
  middle_name: string,
  last_name: string,
  email: string,
  gender: string,
  home_address: string,
  city: string,
  postal_code: string,
  date_of_birth: string,
  phone_number: string,
  password: string,
  status: string
  __v: string,
  fingerprint_id: string
}
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

interface participate {
  election_id: string,
  participants: string[],
  length: string,
  __v: string,
  _id: string,
};

@Component({
  selector: 'app-view-election-sc',
  templateUrl: './view-election-sc.component.html',
  styleUrls: ['./view-election-sc.component.css']
})
export class ViewElectionScComponent implements OnInit {

  @ViewChild('electionDetails') form: NgForm | undefined;
  @ViewChild('partieDetails') partieDetails: NgForm | undefined;
  election_id!: string;
  party_id!: string;
  candidate_id!: string;
  participate_id!: string;

  selectedFile!: File;

  bannerFile!: File;
  iconFile!: File;
  photoFile!: File;
  imageUrl!: string;
  selectedColor!: string;

  electionData!: electionData[];
  getPartyElection!: getPartyElection[];

  getCandidatesParty!: getCandidatesParty[];

  participate!: participate[];
  userData!: userData[];
  participantId!:string;

  constructor(private route:Router,private _userService: UserService, private router: ActivatedRoute, private _electionService: ElectionService, private _partieService: PartieService, private _candidateservice: CandidateService, private _participateService: ParticipateService) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      // @ts-ignore
      this.election_id = params.get('id').toString();
      console.log(this.election_id);
      this.getElection(this.election_id);
      this.getPartiesByElection();
      this.getParticipateByElection(this.election_id);
    })
  }

  partieModel = new Partie(this.election_id, "", "", "", "", "")

  candidate = {
    votable:false
  };

  selectCandidate(event:any){
    console.log(this.candidate.votable);
  }

  onSelectedBanner(event: any) {
    this.bannerFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.partyModel.party_banner = base64String;
    }
    reader.readAsDataURL(this.bannerFile);
  }

  onSelectedIcon(event: any) {
    this.iconFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.partyModel.party_icon = base64String;
    }
    reader.readAsDataURL(this.iconFile);
  }

  onColorChange(event: any) {
    this.selectedColor = event
    this.partyModel.party_color = this.selectedColor
    console.log(this.selectedColor);
  }

  onSelectedPhoto(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.electionModel.image_name = base64String;
    }
    reader.readAsDataURL(this.selectedFile);

  }


  onSelectedProfile(event: any) {
    this.photoFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.candidateModel.candidate_image = base64String;
    }
    reader.readAsDataURL(this.photoFile);
  }

  // @ts-ignore
  electionModel = new Election("", "", "", "", "", "", "",false);
  partyModel = new Partie("", "", "", "", "", "")

  participateModel = new Participate("", [])
  getPartyByElectionIdModel = new getPartyElectionBy("");

  candidateModel = new Candidate("", "", "", "", "")
  getCandidatesByPartyModel = new getCandidatesByParty("")

  getElection(id: string) {
    this._electionService.getElection(id).subscribe(
      response => {
        console.log('success', response);
        this.electionModel = response;
        console.log(this.electionModel)
      }, error => {
        console.log('failed', error);
      }
    );
  }

  updateElection(id: string) {
    this._electionService.updateElection(id, this.electionModel).subscribe(
      response => {
        console.log('success', response);
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
        this.partyModel = response;
        this.getCandidatesByParty();
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
        this.getPartyElection = response;
        console.log(this.getCandidatesParty)
      }, error => {
        console.log('failed', error);
      }
    );
  }

  editPartyBtn() {
    this.getParty(this.party_id);
  }

  updateParty() {
    this._partieService.updateParty(this.party_id, this.partyModel).subscribe(
      response => {
        console.log('success', response);
        console.log(this.partyModel);
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getCandidate(id: string) {
    this.candidate_id = id;
    this._candidateservice.getCandidate(id).subscribe(
      response => {
        console.log('success', response);
        this.candidateModel = response;
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
      }, error => {
        console.log('failed', error);
      }
    );
  }

  updateCandidate() {
    this._candidateservice.upddateCandidate(this.candidate_id, this.candidateModel).subscribe(
      response => {
        console.log('success', response);
        console.log(this.candidateModel);
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getParticipateByElection(id:string) {
    this._participateService.getParticipate(id).subscribe(
      response => {
        console.log('success', response);
        this.participateModel.participants = response[0]["participants"];
        console.log(this.participateModel.participants);
        for (let i=0; i<this.participateModel.participants.length; i++){
          this.participantId = this.participateModel.participants[i];
          console.log(this.participantId);
          this.getParticipateUser(this.participantId);
        }

      }, error => {
        console.log('failed', error);
      }
    );
  }

  getParticipateUser(id:string) {
    this._userService.getParticipateUser(id).subscribe(
      response => {
        console.log('success', response);
        // this.userData = response;

      }, error => {
        console.log('failed', error);
      }
    );
  }

  addPartie() {
    this.partieModel.election_id = this.election_id;
    this._partieService.addPartie(this.partieModel).subscribe(
      response => {
        console.log('success', response, this.partieModel);
        this.getPartiesByElection();
        this.partieDetails?.reset();
      }, error => {
        console.log('failed', error);
      }
    );
    console.log(this.partieModel);
  }

  logout(){
    this.route.navigate([``]);
  }

  // convertBase64ToBlob(base64: string): Blob {
  //   const binaryString = atob(base64);
  //   const bytes = new Uint8Array(binaryString.length);
  //   for (let i = 0; i < binaryString.length; i++) {
  //     bytes[i] = binaryString.charCodeAt(i);
  //   }
  //   return new Blob([], {type: 'image/*'}); // Change the type according to your image format
  // }
  //
  // getDetails() {
  //   var base64String = this.electionModel.image_name;
  //   console.log()
  //   //     const blob = this.convertBase64ToBlob(base64String);
  //   //     const image = URL.createObjectURL(blob);
  //   //     // @ts-ignore
  //   //     currentElection.image_name = image;
  // }


}

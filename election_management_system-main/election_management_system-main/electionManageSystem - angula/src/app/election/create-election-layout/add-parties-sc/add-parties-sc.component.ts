import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {getPartyElectionBy, Partie} from "../../../model/partie/partie";
import {PartieService} from "../../../service/partie/partie.service";
import {CandidateService} from "../../../service/candidate/candidate.service";
import {Candidate} from "../../../model/candidate/candidate";
import {NgForm} from "@angular/forms";
import {getActiveUser} from 'src/app/model/user/user';
import {UserService} from "../../../service/user/user.service";

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

@Component({
  selector: 'app-add-parties-sc',
  templateUrl: './add-parties-sc.component.html',
  styleUrls: ['./add-parties-sc.component.css']
})
export class AddPartiesScComponent implements OnInit {

  @ViewChild('partieDetails') partieDetails: NgForm | undefined;
  @ViewChild('candidateDetails') candidateDetails: NgForm | undefined;

  election_id!: string;
  party_id!: string;
  getPartyElection!: getPartyElection[];
  userData!: userData[];

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      // @ts-ignore
      this.election_id = params.get('id').toString();
      console.log(this.election_id);
      this.getPartiesByElection();
      this.getActiveUser();
    })
  }

  constructor(private router: ActivatedRoute, private _userService: UserService, private route: Router, private _partieService: PartieService, private _candidateService: CandidateService) {
  }

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  participatePage(id: string) {
    this.route.navigate([`create-election/add-participate/` + id]);
  }

  // @ts-ignore
  partieModel = new Partie(this.election_id, "", "", "", "", "")
  // @ts-ignore
  getPartyByElectionIdModel = new getPartyElectionBy("");
  activeUser = new getActiveUser(false, false)

  // @ts-ignore
  candidateModel = new Candidate("", "", "", "", "")
  bannerFile!: File;
  iconFile!: File;
  photoFile!: File;
  imageUrl!: string;
  selectedColor!: string;

  onSelectedBanner(event: any) {
    this.bannerFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.partieModel.party_banner = base64String;
    }
    reader.readAsDataURL(this.bannerFile);
  }

  onSelectedIcon(event: any) {
    this.iconFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.partieModel.party_icon = base64String;
    }
    reader.readAsDataURL(this.iconFile);
  }

  onColorChange(event: any) {
    this.selectedColor = event
    this.partieModel.party_color = this.selectedColor
    console.log(this.selectedColor);
  }

  onSelectedPhoto(event: any) {
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

  getPartiesByElection() {
    this.getPartyByElectionIdModel.election_id = this.election_id;
    this._partieService.getPartiesByElectionId(this.getPartyByElectionIdModel).subscribe(
      response => {
        console.log('success', response);
        this.getPartyElection = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getPartyId(id: string) {
    this.party_id = id;
    console.log(this.party_id)
  }

  addCandidate() {
    this.candidateModel.party_id = this.party_id;
    this._candidateService.addCandidate(this.candidateModel).subscribe(
      response => {
        console.log('success', response, this.candidateModel);
        this.candidateDetails?.reset();
      }, error => {
        console.log('failed', error);
      }
    );
    console.log(this.candidateModel);
  }

  getActiveUser() {
    this.activeUser.is_active = true;
    this.activeUser.status = true;
    this._userService.getActiveUsers(this.activeUser).subscribe(
      response => {
        console.log('success', response);
        this.userData = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Election, newElection} from "../../model/election/election";
import {ElectionService} from "../../service/election/election.service";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-create-election-layout',
  templateUrl: './new-election-sc.component.html',
  styleUrls: ['./new-election-sc.component.css']
})
export class NewElectionScComponent implements OnInit {

  @ViewChild('electionDetails') electionDetails: NgForm | undefined;
  ngOnInit(): void {
  }

  constructor(private router: Router, private _electionService: ElectionService) {
  }

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  partiesPage(id: string) {
    this.router.navigate([`create-election/add-parties/` + id]);
  }

  // @ts-ignore
  electionModel = new Election("", "", "", "", "", "", "",false)
  newElectionModel = new newElection("", "", false)

  selectedFile!: File;

  candidate = {
    votable:false
  };

  selectCandidate(event:any){
    console.log(this.candidate.votable);
  }

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.electionModel.image_name = base64String;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  addElection() {
    this.electionModel.candidate_votable = this.candidate.votable;
    this._electionService.addElection(this.electionModel).subscribe(
      response => {
        console.log('success', response, this.electionModel);
        this.newElectionModel = response;
        this.electionDetails?.reset();
      }, error => {
        console.log('failed', error);
      }
    );
    console.log(this.electionModel);
  }

}

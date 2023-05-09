import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VoteService} from "../../service/vote/vote.service";
import {CandidateService} from "../../service/candidate/candidate.service";
import {Candidate} from "../../model/candidate/candidate";
import {CandidateVote} from "../../model/vote/vote";
import {UserService} from "../../service/user/user.service";
import {timer} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-vote-scan-candidate',
  templateUrl: './vote-scan-candidate.component.html',
  styleUrls: ['./vote-scan-candidate.component.css']
})
export class VoteScanCandidateComponent {

  userFingerIdArray: any[] = [];
  progress: number = 0;
  errorMsg2!: string;
  // @ts-ignore
  timerId!: NodeJS.Timer;
  doneBtnDisabled = true;
  showMsg = false;
  seconds = 30;

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  userRedirect() {
    this.router.navigate([``]);
  }


  ngOnInit(): void {
    this.getUser();
    this.startTimer();
    this.route.queryParams.subscribe(params => {
        const partyVoteModelString = params['candiModel'];
        if (partyVoteModelString) {
          this.candidateModel = JSON.parse(partyVoteModelString);
          console.log(this.candidateModel);
        }
      }
    )
  }

  startTimer() {
    this.userScan();
    this.timerId = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  constructor(private router: Router, private _userService: UserService, private route: ActivatedRoute, private _voteService: VoteService, private _candidateservice: CandidateService) {
  }

  candidateModel = new Candidate("", "", "", "", "")
  candidateVote = new CandidateVote("", "", "", "");

  userScan() {
    this._userService.scanUser().subscribe(
      response => {
        console.log('success', response);

        this.userFingerIdArray.forEach(fid => {
          if (response === fid) {
            console.log("success");
            this.showMsg = true;
            this.errorMsg2 = "Scan Successfull!";
            this.doneBtnDisabled = false;
          } else {
            console.log("Unsuccess");
          }

        }, error => {
          console.log('failed', error);
        });
      }, error => {
        console.log('failed', error);
        this.errorMsg2 = "something went wrong,Try again!";
      });
  }

  addVoteCandidate() {
    this._voteService.addVoteCandidate(this.candidateVote).subscribe(
      response => {
        console.log('success', response);
        this.errorMsg2 = "Vote Added!";
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getUser() {
    this._userService.getUsers().subscribe(
      response => {
        console.log('success', response);

        response.forEach(user => {
          this.userFingerIdArray.push(user.fingerprint_id);
        });
        console.log("fid", this.userFingerIdArray);

      }, error => {
        console.log('failed', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import {timer} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {fingerPrintId, User} from "../../model/user/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {PartyVote} from "../../model/vote/vote";
import {VoteService} from "../../service/vote/vote.service";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-vote-scan',
  templateUrl: './vote-scan.component.html',
  styleUrls: ['./vote-scan.component.css']
})
export class VoteScanComponent {

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

  partyVote = new PartyVote("", "", "")

  userRedirect() {
    this.router.navigate([``]);
  }

  ngOnInit(): void {
    this.getUser();
    this.startTimer();
    this.route.queryParams.subscribe(params => {
        const partyVoteModelString = params['voteModel'];
        if (partyVoteModelString) {
          this.partyVote = JSON.parse(partyVoteModelString);
          console.log(this.partyVote);
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


  constructor(private router: Router, private _voteService: VoteService, private route: ActivatedRoute, private _userService: UserService) {
  }


  userModel = new User("", "", "", "", "", "", "", "", "", "", "", "123")
  fingerPrint = new fingerPrintId("");

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

  addVoteParty() {
    this._voteService.addVoteParty(this.partyVote).subscribe(
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

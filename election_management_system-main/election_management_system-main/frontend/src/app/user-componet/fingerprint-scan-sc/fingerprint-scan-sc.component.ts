import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {UserService} from "../../service/user/user.service";
import {fingerPrintId, User} from "../../model/user/user";
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {PartyVote} from "../../model/vote/vote";

@Component({
  selector: 'app-fingerprint-scan-sc',
  templateUrl: './fingerprint-scan-sc.component.html',
  styleUrls: ['./fingerprint-scan-sc.component.css']
})
export class FingerprintScanScComponent {

  userFingerIdArray: any[] = [];
  progress: number = 0;
  errorMsg2!: string;
  seconds = 30;
  // @ts-ignore
  timerId!: NodeJS.Timer;
  doneBtnDisabled = true;
  showMsg = false;

  partyVote = new PartyVote("", "", "")

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        const userModelString = params['userModel'];
        const partyVoteModelString = params['voteModel'];
        if (userModelString) {
          this.userModel = JSON.parse(userModelString);
          this.partyVote = JSON.parse(partyVoteModelString);
          console.log(this.userModel);
        }
        this.partyVote = JSON.parse(partyVoteModelString);
        console.log(this.partyVote);
      }
    )
    this.getUser();
    this.startTimer();
  }

  startTimer() {
    this.enrollUserScan();
    this.timerId = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  progressBar() {
    timer(0, 1000)
      .pipe(takeUntil(timer(15000)))
      .subscribe(() => {
        this.progress += 17;
      });
  }


  userRedirect() {
    this.router.navigate([``]);
  }

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  userModel = new User("", "", "", "", "", "", "", "", "", "", "", "123")
  fingerPrint = new fingerPrintId("");

  constructor(private router: Router, private route: ActivatedRoute, private _userService: UserService) {
  }

  enrollUserScan() {
    this.progressBar();
    let fid: number = this.userFingerIdArray.length;

    if (fid === 127) {
      console.log("can't add user");
      this.errorMsg2 = "Only 127 users can be added to this system!";
    } else {
      fid = fid + 1;
      this.fingerPrint.fingerid = fid.toString();
      this.userModel.fingerprint_id = fid.toString();
      console.log(this.fingerPrint.fingerid);

      this._userService.enrollUser(this.fingerPrint).subscribe(
        response => {
          console.log('success', response);
          this.regUser();
        }, error => {
          console.log('failed', error);
          this.errorMsg2 = "something went wrong,Try again!";
        }
      );
    }

  }

  regUser() {
    this._userService.addUser(this.userModel).subscribe(
      response => {
        console.log('success', response, this.userModel);
        this.errorMsg2 = "Add Successfull!";
        this.showMsg = true;
        this.doneBtnDisabled = false;
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

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login-scan',
  templateUrl: './login-scan.component.html',
  styleUrls: ['./login-scan.component.css']
})
export class LoginScanComponent implements OnInit {

  userId!: string;
  userFingerIdArray: any[] = [];
  progress: number = 0;
  // @ts-ignore
  timerId!: NodeJS.Timer;
  doneBtnDisabled = true;
  showMsg = false;
  seconds = 30;
  errorMsg2!: string;


  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.userId = params.get('id').toString();
      console.log(this.userId);
      this.getUser();
      this.startTimer();
    })
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


  constructor(private router: Router, private route: ActivatedRoute, private _userService: UserService) {
  }


  userScan() {
    this._userService.scanUser().subscribe(
      response => {
        console.log('success', response);

        this.userFingerIdArray.forEach(fid => {
          if (response === fid) {
            console.log("success");
            this.errorMsg2 = "Scan Successfull!";
            this.showMsg = true;
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

  election() {
    this.router.navigate([`vorting-election/` + this.userId]);
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

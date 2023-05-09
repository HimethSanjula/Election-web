import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {fingerPrintId, getActiveUser, User} from "../../model/user/user";
import {UserService} from "../../service/user/user.service";
import {Admin} from "../../model/admin/admin";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {fadeInItems} from "@angular/material/menu";
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-add-user-sc',
  templateUrl: './add-user-sc.component.html',
  styleUrls: ['./add-user-sc.component.css']
})
export class AddUserScComponent implements OnInit {

  @ViewChild('addUser') addUser: NgForm | undefined;

  showContent = false;
  showMsg = false;
  userEmailArray: any[] = [];
  userFingerIdArray: any[] = [];
  alreadyExit = false;
  errorMsg!: string;
  errorMsg2!: string;
  progress: number = 0;
  seconds = 30;
  timerId!: NodeJS.Timer;
  doneBtnDisabled = true;

  ngOnInit(): void {
    this.getUser();
    // this.enrollUserScan();
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


  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  userModel = new User("", "", "", "", "", "", "", "", "", "", "", "")
  activeUser = new getActiveUser(false, false)
  fingerPrint = new fingerPrintId("");

  constructor(private _userService: UserService, private router: Router) {
    // @ts-ignore
    this.modal = document.getElementById('modal');
  }

  userRedirect() {
    this.toggleContent();
    this.addUser?.reset();
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  emailCheck() {
    if (this.userEmailArray.length === 0) {
      this.showContent = true;
      console.log('ok');
    } else {
      this.userEmailArray.forEach(email => {
        if (this.userModel.email === email) {
          this.alreadyExit = true;

        } else {
        }
      });
      this.toggle();
    }
  }

  toggle() {
    if (this.alreadyExit) {
      console.log("Your email is already exits!");
      this.errorMsg = "Your email is already exits!";
    } else {
      this.showContent = true;
      this.startTimer();
    }
  }

  getUser() {
    this._userService.getUser().subscribe(
      response => {
        console.log('success', response);

        response.forEach(user => {
          this.userEmailArray.push(user.email);
          this.userFingerIdArray.push(user.fingerprint_id);
        });
        console.log("email", this.userEmailArray);
        console.log("fid", this.userFingerIdArray);

      }, error => {
        console.log('failed', error);
      }
    );
  }

  enrollUserScan() {
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
          this.userAdd();
        }, error => {
          console.log('failed', error);
          this.errorMsg2 = "something went wrong,Try again!";
        }
      );
    }

  }

  userAdd() {
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


}

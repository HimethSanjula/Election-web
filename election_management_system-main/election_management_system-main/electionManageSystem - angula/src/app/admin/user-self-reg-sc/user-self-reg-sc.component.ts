import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {getActiveUser, User} from "../../model/user/user";
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

@Component({
  selector: 'app-user-self-reg-sc',
  templateUrl: './user-self-reg-sc.component.html',
  styleUrls: ['./user-self-reg-sc.component.css']
})
export class UserSelfRegScComponent implements OnInit {

  currentUserId!:string;
  userData!: userData[];
  ngOnInit(): void {
    this.getNewUser();
  }

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  userModel = new User("", "", "", "", "", "", "true", "", "", "", "", "F123")
  activeUser = new getActiveUser(false, false)

  constructor(private _userService: UserService) {
  }

  getNewUser() {
    this.activeUser.is_active = false;
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

  acceptBtn(id: string) {
    this.currentUserId = id;
    // console.log(this.currentUserId)
  }

  userActivate(id:string){
    console.log(id)
    this._userService.activateUser(id).subscribe(
      response => {
        console.log('success', response);
        this.getNewUser();
      }, error => {
        console.log('failed', error);
      }
    );
  }

}

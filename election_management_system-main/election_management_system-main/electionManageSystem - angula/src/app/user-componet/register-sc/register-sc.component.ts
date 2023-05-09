import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {User} from "../../model/user/user";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-register-sc',
  templateUrl: './register-sc.component.html',
  styleUrls: ['./register-sc.component.css']
})
export class RegisterScComponent {

  ngOnInit(): void {  }

  fingerPrint(){
    this.router.navigate([`scan-fingerprint`]);
  }

  options:AnimationOptions = {
    path:"/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  userModel = new User("","", "", "", "", "", "", "", "", "", "", "123")

  constructor(private router:Router,private _userService: UserService) {
  }

  onSubmit() {
    this._userService.addUser(this.userModel).subscribe(
      response => {
        console.log('success', response, this.userModel);
        this.formClear();
      }, error => {
        console.log('failed', error);
      }
    );
  }







  formClear() {
    this.userModel.first_name = "";
    this.userModel.middle_name = "";
    this.userModel.last_name = "";
    this.userModel.email = "";
    this.userModel.gender = "";
    this.userModel.home_address = "";
    this.userModel.city = "";
    this.userModel.postal_code = "";
    this.userModel.date_of_birth = "";
    this.userModel.phone_number = "";
    this.userModel.password = "";
  }
}

import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User, userLogin} from "../../model/user/user";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-login-sc',
  templateUrl: './login-sc.component.html',
  styleUrls: ['./login-sc.component.css']
})
export class LoginScComponent {

  userId!:string;
  constructor(private router: Router, private _userService: UserService) {
  }

  userLoginModel = new userLogin("", "");
  userModel = new User("", "", "", "", "", "", "", "", "", "", "", undefined)

  login() {
    this._userService.userLogin(this.userLoginModel).subscribe(
      response => {
        console.log('success', response);
        this.userModel = response;
        if (response.length === 1){
          this.userId = response[0]['_id'];
          console.log("login success",this.userId);

          this.router.navigate([`login-scan/`+ this.userId]);

        }else {
          console.log("login fail");
        }

      }, error => {
        console.log('failed', error);
      }
    );

  }


}

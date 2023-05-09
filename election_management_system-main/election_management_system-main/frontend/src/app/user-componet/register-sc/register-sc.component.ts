import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/user/user";
import {UserService} from "../../service/user/user.service";


@Component({
  selector: 'app-register-sc',
  templateUrl: './register-sc.component.html',
  styleUrls: ['./register-sc.component.css']
})
export class RegisterScComponent {

  showContent = false;
  userEmailArray: any[] = [];
  userFingerIdArray: any[] = [];
  alreadyExit = false;
  errorMsg!: string;
  errorMsg2!: string;

  ngOnInit(): void {
    this.getUser();
  }

  fingerPrint(){
    // @ts-ignore
    this.router.navigate([`scan-fingerprint`],
      {queryParams:{userModel:JSON.stringify(this.userModel)}});
  }

  userModel = new User("", "", "", "", "", "", "", "", "", "", "", "123")

  constructor(private router:Router,private _userService:UserService) {
  }

  emailCheck() {
    if (this.userEmailArray.length === 0) {
      this.showContent = true;
      console.log('ok');
    } else {
      this.userEmailArray.forEach(email => {
        if (this.userModel.email === email) {
          this.alreadyExit = true;
          console.log(this.alreadyExit);
        } else {

        }
      });
      this.toggle();
    }
  }

  toggle(){
    if (this.alreadyExit){
      console.log("Your email is already exits!");
      this.errorMsg = "Your email is already exits!";
    }else {
      this.fingerPrint();
    }
  }

  getUser() {
    this._userService.getUsers().subscribe(
      response => {
        console.log('success', response);

        response.forEach(user => {
          this.userEmailArray.push(user.email);

        });
        console.log("email", this.userEmailArray);

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

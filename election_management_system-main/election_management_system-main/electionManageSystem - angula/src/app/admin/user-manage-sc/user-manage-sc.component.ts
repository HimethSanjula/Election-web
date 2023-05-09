import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {UserService} from "../../service/user/user.service";
import {getActiveUser, User} from "../../model/user/user";
import {NgForm} from "@angular/forms";

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
  selector: 'app-user-manage-sc',
  templateUrl: './user-manage-sc.component.html',
  styleUrls: ['./user-manage-sc.component.css']
})

export class UserManageScComponent implements OnInit {

  currentUserId!: string;
  userData!: userData[];
  @ViewChild('edituser') form: NgForm | undefined;

  ngOnInit(): void {
    this.getActiveUser();
  }

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  userModel = new User("", "", "", "", "", "", "", "", "", "", "", "F123")
  activeUser = new getActiveUser(false, false)
  constructor(private _userService: UserService) {
  }


  getActiveUser() {
    this.activeUser.is_active = true;
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

  editButton(id: string) {
    this.currentUserId = id;
    let currentAdmin = this.userData?.find((a) => {
      return a._id === id
    });
    this.form?.setValue({
      first_name: currentAdmin!.first_name,
      middle_name: currentAdmin!.middle_name,
      last_name: currentAdmin!.last_name,
      email: currentAdmin!.email,
      gender: currentAdmin!.gender,
      home_address: currentAdmin!.home_address,
      city: currentAdmin!.city,
      postal_code: currentAdmin!.postal_code,
      date_of_birth: currentAdmin!.date_of_birth,
      phone_number: currentAdmin!.phone_number,
      password: currentAdmin!.password,
      repassword: currentAdmin!.password,
    })
  }

  editAdmin(id: string) {
    this._userService.updateUser(id, this.userModel).subscribe(
      response => {
        console.log('success', response);
        this.formClear();
        this.getActiveUser();
      }, error => {
        console.log('failed', error);
      }
    );
    console.log(this.currentUserId);
  }

  removeButton(id: string) {
    this.currentUserId = id;
    console.log(this.currentUserId);
  }

  removeUser(id: string) {
    let currentAdmin = this.userData?.find((a) => {
      return a._id === id
    });
    this._userService.deleteUser(id).subscribe(
      response => {
        console.log('success', response);
        this.getActiveUser();
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

import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {Admin, getActiveAdmin} from "../../model/admin/admin";
import {AdminService} from "../../service/admin/admin.service";
import {NgForm} from "@angular/forms";

interface adminData {
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
  __v: string
}

@Component({
  selector: 'app-admin-manage',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  currentAdminId!: string;
  adminData!: adminData[];
  @ViewChild('editadmin') form: NgForm | undefined;

  ngOnInit(): void {
    this.getActiveAdmin();
  }

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  adminModel = new Admin("", "", "", "", "", "", "", "", "", "", "")
  activeAdmin = new getActiveAdmin(false);
  constructor(private _adminService: AdminService) {
  }


  getActiveAdmin() {
    this.activeAdmin.status = true;
    this._adminService.getActiveAdmin(this.activeAdmin).subscribe(
      response => {
        console.log('success', response);
        this.adminData = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }


  editButton(id: string) {
    this.currentAdminId = id;
    var currentAdmin = this.adminData?.find((a) => {
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
    this._adminService.updateAdmin(id, this.adminModel).subscribe(
      response => {
        console.log('success', response);
        console.log(this.currentAdminId);
        this.formClear();
        this.getActiveAdmin();
      }, error => {
        console.log('failed', error);
      }
    );
  }

  removeButton(id: string) {
    this.currentAdminId = id;
    console.log(this.currentAdminId);
  }

  removeAdmin(id: string) {
    let currentAdmin = this.adminData?.find((a) => {
      return a._id === id
    });
    this._adminService.deleteAdmin(id).subscribe(
      response => {
        console.log('success', response);
        this.getActiveAdmin();
      }, error => {
        console.log('failed', error);
      }
    );

  }

  formClear() {
    this.adminModel.first_name = "";
    this.adminModel.middle_name = "";
    this.adminModel.last_name = "";
    this.adminModel.email = "";
    this.adminModel.gender = "";
    this.adminModel.home_address = "";
    this.adminModel.city = "";
    this.adminModel.postal_code = "";
    this.adminModel.date_of_birth = "";
    this.adminModel.phone_number = "";
    this.adminModel.password = "";
  }
};


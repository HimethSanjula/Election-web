import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {AppComponent} from '../../app.component';
import {AdminService} from "../../service/admin/admin.service";
import {adminLogin} from "../../model/admin/admin";

@Component({
  selector: 'app-admin-login-sc',
  templateUrl: './admin-login-sc.component.html',
  styleUrls: ['./admin-login-sc.component.css']
})
export class AdminLoginScComponent {

  public showContent = false;
  adminId!: string;
  errMsg!: string;

  constructor(private router: Router, private _adminService: AdminService) {
  }

  adminLoginModel = new adminLogin("", "");

  login() {
    this._adminService.adminLogin(this.adminLoginModel).subscribe(
    response => {
        console.log('success', response);
      this.adminLoginModel = response;
       if (response.length === 1) {
         this.adminId = response[0]['_id'];
         console.log("login success", this.adminId);
        this.showContent = true;
          this.router.navigate([`dash/`+ this.adminId]);
        } else {
          console.log("login fail");
         this.errMsg = "login Unsuccessfully!"
        }

     }, error => {
        console.log('failed', error);
       }
    );
  }

}


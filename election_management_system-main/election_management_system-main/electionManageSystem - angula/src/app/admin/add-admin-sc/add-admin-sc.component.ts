import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Admin, getActiveAdmin} from "../../model/admin/admin";
import {AdminService} from "../../service/admin/admin.service";
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-admin-sc',
  templateUrl: './add-admin-sc.component.html',
  styleUrls: ['./add-admin-sc.component.css']
})
export class AddAdminScComponent implements OnInit {

  @ViewChild('addAdmin') addAdmin: NgForm | undefined;

  ngOnInit(): void {
    this.getAdmin();
  }

  adminEmailArray: any[] = [];
  alreadyExit = false;
  errorMsg!: string;

  options: AnimationOptions = {
    path: "/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  adminModel = new Admin("", "", "", "", "", "", "", "", "", "", "")

  constructor(private _adminService: AdminService, private router: Router) {
  }

  adminRedirect() {
    this.router.navigate([`admin-manage`]);
  }


  onSubmit() {
    this.adminEmailArray.forEach(email => {
      if (this.adminModel.email === email) {
        this.alreadyExit = true;
      } else {

      }
    });

    if (this.alreadyExit) {
      console.log("Your email is already exits!");
      this.errorMsg = "Your email is already exits!";
    } else {
      this._adminService.addAdmin(this.adminModel).subscribe(
        response => {
          console.log('success', response, this.adminModel);
          this.addAdmin?.reset();
          this.adminRedirect();
        }, error => {
          console.log('failed', error);
        }
      );
    }

  }

  getAdmin() {
    this._adminService.getAdmin().subscribe(
      response => {
        console.log('success', response);

        response.forEach(admin => {
          this.adminEmailArray.push(admin.email);
        });
        console.log(this.adminEmailArray);

      }, error => {
        console.log('failed', error);
      }
    );
  }

}




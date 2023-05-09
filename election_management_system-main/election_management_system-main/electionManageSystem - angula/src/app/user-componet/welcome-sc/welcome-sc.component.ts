import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-sc',
  templateUrl: './welcome-sc.component.html',
  styleUrls: ['./welcome-sc.component.css']
})
export class WelcomeScComponent {

  constructor(private router:Router) {
  }


  userLogin(){
    this.router.navigate([`user-login`]);
  }
  userReg(){
    this.router.navigate([`user-register`]);

  } fogrotPass(){
    this.router.navigate([`user-login`]);
  }


}

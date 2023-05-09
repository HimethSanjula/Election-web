import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-sc',
  templateUrl: './login-sc.component.html',
  styleUrls: ['./login-sc.component.css']
})
export class LoginScComponent {

  constructor(private router:Router) {
  }


  election(){
    this.router.navigate([`elections`]);
  }

}

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-v-welcome',
  templateUrl: './v-welcome.component.html',
  styleUrls: ['./v-welcome.component.css']
})
export class VWelcomeComponent {
  constructor(private router: Router) {
  }


  electionResult() {
    this.router.navigate([`election-result`]);
  }

  vote() {
    this.router.navigate([`vorting-election`]);
  }

}

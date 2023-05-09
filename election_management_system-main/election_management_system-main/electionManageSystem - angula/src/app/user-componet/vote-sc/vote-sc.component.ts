import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vote-sc',
  templateUrl: './vote-sc.component.html',
  styleUrls: ['./vote-sc.component.css']
})
export class VoteScComponent {

  constructor(private router:Router) {
  }


  fingerPrint(){
    this.router.navigate([`scan-fingerprint`]);
  }

}

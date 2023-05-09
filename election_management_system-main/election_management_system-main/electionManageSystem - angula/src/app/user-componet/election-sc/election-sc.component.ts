import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-election-sc',
  templateUrl: './election-sc.component.html',
  styleUrls: ['./election-sc.component.css']
})
export class ElectionScComponent {

  constructor(private router:Router) {
  }


  parties(){
    this.router.navigate([`parties`]);
  }


}

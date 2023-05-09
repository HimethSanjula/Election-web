import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidates-sc',
  templateUrl: './candidates-sc.component.html',
  styleUrls: ['./candidates-sc.component.css']
})
export class CandidatesScComponent {

  constructor(private router:Router) {
  }


  candidateDetails(){
    this.router.navigate([`candidate-details`]);
  }

}

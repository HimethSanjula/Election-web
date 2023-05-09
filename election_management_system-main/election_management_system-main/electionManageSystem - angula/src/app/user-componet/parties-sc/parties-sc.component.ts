import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-parties-sc',
  templateUrl: './parties-sc.component.html',
  styleUrls: ['./parties-sc.component.css']
})
export class PartiesScComponent {

  constructor(private router:Router) {
  }


  candidates(){
    this.router.navigate([`candidates`]);
  }

}

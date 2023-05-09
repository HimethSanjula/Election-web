import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-done-sc',
  templateUrl: './create-done-sc.component.html',
  styleUrls: ['./create-done-sc.component.css']
})
export class CreateDoneScComponent implements OnInit {

  constructor(private router:Router) {
  }


  dashboad(){
    this.router.navigate([``]);
  }

  ngOnInit(): void {
  }

}

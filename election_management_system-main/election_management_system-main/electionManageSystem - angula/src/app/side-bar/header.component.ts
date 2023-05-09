import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ButtonsComponent} from "../admin/admin-manage/buttons.component";
@Component({
  selector: 'app-side-bar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {
  }

  adminManage(){
    this.router.navigate([`admin-manage`]);

  }
  dashboard(){
    this.router.navigate([`dash`]);

  }

  addAdmin(){
    this.router.navigate([`add-admin`]);
  }
  userManage(){
    this.router.navigate([`user-manage`]);
  }
  addUser(){
    this.router.navigate([`add-user`]);
  }
  selfRegistraion(){
    this.router.navigate([`user-self`]);
  }
  electionManage(){
    this.router.navigate([`election-manage`]);
  }
  createElection(){
    this.router.navigate([`create-election`]);
  }

  electionHistory(){
    this.router.navigate([`election-history`]);
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ElectionService} from "../service/election/election.service";
import {Election, getEndElections, getStartElection} from "../model/election/election";
import {getActiveUser} from "../model/user/user";
import {UserService} from "../service/user/user.service";
import {AdminService} from "../service/admin/admin.service";
import {Admin, adminId, getActiveAdmin} from '../model/admin/admin';

interface electionData {

  _id: string,
  election_name: string,
  location: string,
  date: string,
  start_time: string,
  end_time: string,
  description: string,
  image_name: string,

}

interface adminData {
  _id: string,
  first_name: string,
  middle_name: string,
  last_name: string,
  email: string,
  gender: string,
  home_address: string,
  city: string,
  postal_code: string,
  date_of_birth: string,
  phone_number: string,
  password: string,
  status: string
  __v: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  adminId!:string;
  adminData!: adminData[];


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.adminId = params.get('id').toString();
      console.log("adminId ",this.adminId);
  });
    this.getStartedElection();
    this.getNewUser();
    this.getActiveUser();
    this.getActiveAdmin();
    this.getActiveElections();
    this.getEndElections();
    this.getLoginAdmin();
  }

  constructor(private router: Router,private route:ActivatedRoute, private _adminService: AdminService, private _userService: UserService, private _electionService: ElectionService) {
  }

  getStartElectionModel = new getStartElection(false);
  electionModel = new Election("", "", "", "", "", "", "", false)
  activeUser = new getActiveUser(false, false)
  activeAdmin = new getActiveAdmin(false);
  getEndElectionModel = new getEndElections(false);
  getLoginAdminModel = new adminId("");
  adminModel = new Admin("", "", "", "", "", "", "", "", "", "", "");

  electionData!: electionData[];
  name: string | undefined = "Not Started";
  newUserCount!: string;
  activeUserCount!: string;
  activeAdminCount!: string;
  activeElectionCount!: string;
  endElectionCount!: string;


  getStartedElection() {
    this.getStartElectionModel.is_started = true;
    this._electionService.getStartElection(this.getStartElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.electionData = response;
        if (response.length === 1) {
          console.log(true);
          this.name = "Started"
        } else {
          console.log(false);
          this.name = "Not Started"
        }
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getNewUser() {
    this.activeUser.is_active = false;
    this.activeUser.status = true;
    this._userService.getActiveUsers(this.activeUser).subscribe(
      response => {
        console.log('success', response);
        this.newUserCount = response.length;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getActiveUser() {
    this.activeUser.status = true;
    this.activeUser.is_active = true;
    this._userService.getActiveUsers(this.activeUser).subscribe(
      response => {
        console.log('success', response);
        this.activeUserCount = response.length;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getActiveAdmin() {
    this.activeAdmin.status = true;
    this._adminService.getActiveAdmin(this.activeAdmin).subscribe(
      response => {
        console.log('success', response);
        this.activeAdminCount = response.length;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getLoginAdmin() {
    this.getLoginAdminModel.id = this.adminId;
    this._adminService.getLoginAdmin(this.adminId).subscribe(
      response => {
        console.log('success', response);
        this.adminModel = response;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getActiveElections() {
    this._electionService.getElections().subscribe(
      response => {
        console.log('success', response);
        this.activeElectionCount = response.length;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  getEndElections() {
    this.getEndElectionModel.is_ended = true;
    this._electionService.getEndElection(this.getEndElectionModel).subscribe(
      response => {
        console.log('success', response);
        this.endElectionCount = response.length;
      }, error => {
        console.log('failed', error);
      }
    );
  }

  logout(){
    this.router.navigate([``]);
  }



}

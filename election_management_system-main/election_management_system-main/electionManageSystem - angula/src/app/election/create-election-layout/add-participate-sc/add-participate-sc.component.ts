import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";
import {Participate} from "../../../model/participate/participate";
import {ParticipateService} from "../../../service/participate/participate.service";

interface userData {
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
  __v: string,
  fingerprint_id: string
  isChecked: false
}

@Component({
  selector: 'app-add-participate-sc',
  templateUrl: './add-participate-sc.component.html',
  styleUrls: ['./add-participate-sc.component.css']
})
export class AddParticipateScComponent implements OnInit {

  userData!: userData[];
  isChecked = false;
  userId!: string;
  election_id!: string;
  selectAllChecked = false;
  finish() {
    this.router.navigate([`create-election/done`]);
    this.addParticipate();
  }

  ngOnInit(): void {
    this.getUser();
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.election_id = params.get('id').toString();
      console.log(this.election_id);

    })
  }

  constructor(private route: ActivatedRoute, private _userService: UserService, private _participateService: ParticipateService, private router: Router) {
  }

  participateModel = new Participate("", [])

  getUser() {
    this._userService.getUser().subscribe(
      response => {
        console.log('success', response);
        this.userData = response;

      }, error => {
        console.log('failed', error);
      }
    );
  }

  selectUser(data: any) {
    this.userId = data;
  }

  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      console.log('check');
      this.addItem(this.userId)
    } else {
      console.log('uncheck')
    }
  }

  selectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    this.userData.forEach((data) => {
     // @ts-ignore
      data.isChecked = this.selectAllChecked;
     this.addItem(data._id)
    });
  }

  unselectAll(){
    this.selectAllChecked = !this.selectAllChecked;
    this.userData.forEach((data) => {
      // @ts-ignore
      data.isChecked = this.selectAllChecked = false;
    });
  }

  public addItem(item: any): void {
    this.participateModel.participants.push(item);
    console.log(this.participateModel)
  }

  addParticipate() {
    this.participateModel.election_id = this.election_id;
    this._participateService.addParticipate(this.participateModel).subscribe(
      response => {
        console.log('success', response, this.participateModel);
      }, error => {
        console.log('failed', error);
      }
    );
    console.log(this.participateModel);
  }


}

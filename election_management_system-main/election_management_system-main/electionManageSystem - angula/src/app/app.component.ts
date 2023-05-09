import {Component} from '@angular/core';
import {adminLogin} from "./model/admin/admin";
import {AdminService} from "./service/admin/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';



}

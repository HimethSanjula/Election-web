import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Admin, adminId, adminLogin, getActiveAdmin} from "../../model/admin/admin";
import {getActiveUser} from "../../model/user/user";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  _url = 'http://localhost:8000';
  constructor(private _http:HttpClient) { }

  addAdmin(admin: Admin) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.post<any>(this._url+'/api/admin/create',admin,httpOptions);
  }


  getAdmin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.get<any>(this._url+'/api/admins',httpOptions);
  }

  getActiveAdmin(active:getActiveAdmin) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }),
    };

    return this._http.post<any>(this._url+'/api/adminsby',active,httpOptions);
  }

  getLoginAdmin(loginAdmin: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }),
    };

    return this._http.get<any>(this._url+'/api/admin/'+loginAdmin,httpOptions);
  }

  updateAdmin(id: string,admin:Admin) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.put<any>(this._url+'/api/admin/update/'+id,admin,httpOptions);
  }

  deleteAdmin(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };

    return this._http.delete<any>(this._url+'/api/admin/delete/'+id,httpOptions);
  }

 adminLogin(adminlogin: adminLogin) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    };
    return this._http.post<any>(this._url + '/api/adminsby', adminlogin, httpOptions)

  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './side-bar/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ButtonsComponent } from './admin/admin-manage/buttons.component';
import { AddAdminScComponent } from './admin/add-admin-sc/add-admin-sc.component';
import { AddUserScComponent } from './admin/add-user-sc/add-user-sc.component';
import { UserSelfRegScComponent } from './admin/user-self-reg-sc/user-self-reg-sc.component';
import { ManageElectionScComponent } from './election/manage-election-sc/manage-election-sc.component';
import { NewElectionScComponent } from './election/create-election-layout/new-election-sc.component';
import { ElectionDetailsScComponent } from './election/election-details-sc/election-details-sc.component';
import { AddPartiesScComponent } from './election/create-election-layout/add-parties-sc/add-parties-sc.component';
import { AddParticipateScComponent } from './election/create-election-layout/add-participate-sc/add-participate-sc.component';
import { CreateDoneScComponent } from './election/create-election-layout/create-done-sc/create-done-sc.component';
import { WelcomeScComponent } from './user-componet/welcome-sc/welcome-sc.component';
import { RegisterScComponent } from './user-componet/register-sc/register-sc.component';
import { FingerprintScanScComponent } from './user-componet/fingerprint-scan-sc/fingerprint-scan-sc.component';
import { LoginScComponent } from './user-componet/login-sc/login-sc.component';
import { ElectionScComponent } from './user-componet/election-sc/election-sc.component';
import { PartiesScComponent } from './user-componet/parties-sc/parties-sc.component';
import { CandidatesScComponent } from './user-componet/candidates-sc/candidates-sc.component';
import { VoteScComponent } from './user-componet/vote-sc/vote-sc.component';
import { AdminLoginScComponent } from './admin/admin-login-sc/admin-login-sc.component';
import { AdminRegisterScComponent } from './admin/admin-register-sc/admin-register-sc.component';
import {LottieModule} from "ngx-lottie";
import {ColorPickerModule} from "ngx-color-picker";
import {UserManageScComponent} from "./admin/user-manage-sc/user-manage-sc.component";
import { ViewElectionScComponent } from './election/view-election-sc/view-election-sc.component';
import {MatRadioModule} from "@angular/material/radio";
import { ElectionHistoryComponent } from './election/election-history/election-history.component';
import { PartiesHistoryComponent } from './election/parties-history/parties-history.component';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ButtonsComponent,
    AddAdminScComponent,
    AddUserScComponent,
    UserSelfRegScComponent,
    ManageElectionScComponent,
    NewElectionScComponent,
    ElectionDetailsScComponent,
    AddPartiesScComponent,
    AddParticipateScComponent,
    CreateDoneScComponent,
    AdminLoginScComponent,
    WelcomeScComponent,
    RegisterScComponent,
    FingerprintScanScComponent,
    LoginScComponent,
    ElectionScComponent,
    PartiesScComponent,
    CandidatesScComponent,
    VoteScComponent,
    AdminRegisterScComponent,
    UserManageScComponent,
    ViewElectionScComponent,
    ElectionHistoryComponent,
    PartiesHistoryComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LottieModule.forRoot({player: playerFactory}),
        ColorPickerModule,
        MatRadioModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

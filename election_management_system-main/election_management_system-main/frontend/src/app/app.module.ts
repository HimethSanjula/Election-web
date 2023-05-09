import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScComponent } from './user-componet/welcome-sc/welcome-sc.component';
import { RegisterScComponent } from './user-componet/register-sc/register-sc.component';
import { FingerprintScanScComponent } from './user-componet/fingerprint-scan-sc/fingerprint-scan-sc.component';
import { LoginScComponent } from './user-componet/login-sc/login-sc.component';
import { ElectionScComponent } from './user-componet/election-sc/election-sc.component';
import { PartiesScComponent } from './user-componet/parties-sc/parties-sc.component';
import { CandidatesScComponent } from './user-componet/candidates-sc/candidates-sc.component';
import { VoteScComponent } from './user-componet/vorting-sc/vote-sc/vote-sc.component';
import {FormsModule} from "@angular/forms";
import {LottieComponent, LottieModule} from "ngx-lottie";
import {HttpClientModule} from "@angular/common/http";
import { ElectionDetailsComponent } from './user-componet/election-details/election-details.component';
import { VWelcomeComponent } from './user-componet/vorting-sc/v-welcome/v-welcome.component';
import { VortingElectionComponent } from './user-componet/vorting-sc/vorting-election/vorting-election.component';
import { VortingPartiesComponent } from './user-componet/vorting-sc/vorting-parties/vorting-parties.component';
import { VortingCandidatesComponent } from './user-componet/vorting-sc/vorting-candidates/vorting-candidates.component';
import { ElectionResultComponent } from './user-componet/election-result/election-result.component';
import { LoginScanComponent } from './user-componet/login-scan/login-scan.component';
import { VoteScanComponent } from './user-componet/vote-scan/vote-scan.component';
import { VoteScanCandidateComponent } from './user-componet/vote-scan-candidate/vote-scan-candidate.component';

export function playerFactory(): any {
  return import('lottie-web');
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScComponent,
    RegisterScComponent,
    FingerprintScanScComponent,
    LoginScComponent,
    ElectionScComponent,
    PartiesScComponent,
    CandidatesScComponent,
    VoteScComponent,
    ElectionDetailsComponent,
    VWelcomeComponent,
    VortingElectionComponent,
    VortingPartiesComponent,
    VortingCandidatesComponent,
    ElectionResultComponent,
    LoginScanComponent,
    VoteScanComponent,
    VoteScanCandidateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LottieModule.forRoot({player:playerFactory}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

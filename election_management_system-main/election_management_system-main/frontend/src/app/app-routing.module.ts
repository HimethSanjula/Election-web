import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FingerprintScanScComponent} from "./user-componet/fingerprint-scan-sc/fingerprint-scan-sc.component";
import {WelcomeScComponent} from "./user-componet/welcome-sc/welcome-sc.component";
import {RegisterScComponent} from "./user-componet/register-sc/register-sc.component";
import {LoginScComponent} from "./user-componet/login-sc/login-sc.component";
import {ElectionScComponent} from "./user-componet/election-sc/election-sc.component";
import {ElectionDetailsComponent} from "./user-componet/election-details/election-details.component";
import {VWelcomeComponent} from "./user-componet/vorting-sc/v-welcome/v-welcome.component";
import {VortingElectionComponent} from "./user-componet/vorting-sc/vorting-election/vorting-election.component";
import {VortingPartiesComponent} from "./user-componet/vorting-sc/vorting-parties/vorting-parties.component";
import {VortingCandidatesComponent} from "./user-componet/vorting-sc/vorting-candidates/vorting-candidates.component";
import {VoteScComponent} from "./user-componet/vorting-sc/vote-sc/vote-sc.component";
import {ElectionResultComponent} from "./user-componet/election-result/election-result.component";
import {LoginScanComponent} from "./user-componet/login-scan/login-scan.component";
import {VoteScanComponent} from "./user-componet/vote-scan/vote-scan.component";
import {VoteScanCandidateComponent} from "./user-componet/vote-scan-candidate/vote-scan-candidate.component";


const routes: Routes = [
  {path: "scan-fingerprint", component: FingerprintScanScComponent},
  {path: "user-register", component: RegisterScComponent},
  {path: "scan-fingerprint", component: FingerprintScanScComponent},
  {path: "user-login", component: LoginScComponent},
  {path: "vote-scan", component: VoteScanComponent},
  {path: "vote-scan-candidate", component: VoteScanCandidateComponent},
  {path: "login-scan/:id", component: LoginScanComponent},
  {path: "elections", component: ElectionScComponent},
  {path: "election-details/:id", component: ElectionDetailsComponent},
  {path: "vorting-election/:id", component: VortingElectionComponent},
  {path: "vote-parties/:id/:uId", component: VortingPartiesComponent},
  {path: "vote-candidate/:id/:uId", component: VortingCandidatesComponent},
  {path: "vote-candidate-details/:id/:eId/:uId", component: VoteScComponent},
  {path: "election-result/:id", component: ElectionResultComponent},

  {path: '', component: WelcomeScComponent},
  // {path: '', component: VWelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ButtonsComponent} from './admin/admin-manage/buttons.component';
import {UserManageScComponent} from "./admin/user-manage-sc/user-manage-sc.component";
import {AddAdminScComponent} from "./admin/add-admin-sc/add-admin-sc.component";
import {AddUserScComponent} from "./admin/add-user-sc/add-user-sc.component";
import {UserSelfRegScComponent} from "./admin/user-self-reg-sc/user-self-reg-sc.component";
import {ManageElectionScComponent} from "./election/manage-election-sc/manage-election-sc.component";
import {NewElectionScComponent} from "./election/create-election-layout/new-election-sc.component";
import {AddPartiesScComponent} from "./election/create-election-layout/add-parties-sc/add-parties-sc.component";
import {
  AddParticipateScComponent
} from "./election/create-election-layout/add-participate-sc/add-participate-sc.component";
import {CreateDoneScComponent} from "./election/create-election-layout/create-done-sc/create-done-sc.component";
import {AdminRegisterScComponent} from "./admin/admin-register-sc/admin-register-sc.component";
import {AdminLoginScComponent} from "./admin/admin-login-sc/admin-login-sc.component";
import {WelcomeScComponent} from "./user-componet/welcome-sc/welcome-sc.component";
import {LoginScComponent} from "./user-componet/login-sc/login-sc.component";
import {RegisterScComponent} from "./user-componet/register-sc/register-sc.component";
import {FingerprintScanScComponent} from "./user-componet/fingerprint-scan-sc/fingerprint-scan-sc.component";
import {ElectionScComponent} from "./user-componet/election-sc/election-sc.component";
import {PartiesScComponent} from "./user-componet/parties-sc/parties-sc.component";
import {CandidatesScComponent} from "./user-componet/candidates-sc/candidates-sc.component";
import {VoteScComponent} from "./user-componet/vote-sc/vote-sc.component";
import {ViewElectionScComponent} from "./election/view-election-sc/view-election-sc.component";
import {ElectionHistoryComponent} from "./election/election-history/election-history.component";
import {PartiesHistoryComponent} from "./election/parties-history/parties-history.component";

const routes: Routes = [
  {path: 'admin-manage', component: ButtonsComponent},
  {path: 'add-admin', component: AddAdminScComponent},
  {path: 'user-manage', component: UserManageScComponent},
  {path: 'add-user', component: AddUserScComponent},
  {path: 'user-self', component: UserSelfRegScComponent},
  {path: 'election-manage', component: ManageElectionScComponent},
  {path: 'create-election', component: NewElectionScComponent},
  {path: 'create-election/add-parties/:id', component: AddPartiesScComponent},
  {path: 'create-election/add-participate/:id', component: AddParticipateScComponent},
  {path: 'create-election/done', component: CreateDoneScComponent},
  {path: 'admin-login', component: AdminLoginScComponent},
  {path: "admin-register", component: AdminRegisterScComponent},
  {path: "user-login", component: LoginScComponent},
  {path: "user-register", component: RegisterScComponent},
  {path: "scan-fingerprint", component: FingerprintScanScComponent},
  {path: "elections", component: ElectionScComponent},
  {path: "parties", component: PartiesScComponent},
  {path: "candidates", component: CandidatesScComponent},
  {path: "candidate-details", component: VoteScComponent},
  {path: "view-election/:id", component: ViewElectionScComponent},
  {path: "election-history", component: ElectionHistoryComponent},
  {path: "party-history/:id", component: PartiesHistoryComponent},

  {path: '', component: AdminLoginScComponent},
  {path: 'dash', component: DashboardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

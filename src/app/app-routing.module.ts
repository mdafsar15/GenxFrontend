import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginWithAdmin } from "../app/containers/user-authentication/loginwithadmin/login.component";
import { RegisterComponent } from "../app/containers/user-authentication/register/register.component";
import { PasswordUpdateComponent } from "../app/containers/user-authentication/password-update/password-update.component";
import { UserActivateComponent } from "../app/containers/user-authentication/user-activate/user-activate.component";
import { ForgotPasswordComponent } from "../app/containers/user-authentication/forgot-password/forgot-password.component";
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { LoginWithUser } from "../app/containers/user-authentication/loginwithuser/login.component";
import { DashboardAdmin } from "./containers/dashboardAdmin/dashboard.component";
import { DashboardUser } from "./containers/dashboardUser/dashboard.component";
import { AuthguardService } from './services/authguard.service';



const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "loginAdmin", component: LoginWithAdmin },
  { path: "loginUser", component: LoginWithUser },
  { path: "register", component: RegisterComponent },
  { path: "passwordupdate", component: PasswordUpdateComponent },
  { path: "user/verification/:token", component: UserActivateComponent },
  { path: "user/forgotPassword/:token", component: ForgotPasswordComponent },

  {path:"dashboard" , component:DashboardComponent},
  {path:"dashboardadmin" , component:DashboardAdmin,canActivate:[AuthguardService]},
  {path:"dashboarduser" , component:DashboardUser,canActivate:[AuthguardService]}
];

    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

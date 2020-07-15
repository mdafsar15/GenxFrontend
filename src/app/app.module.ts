 import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginWithAdmin } from "../app/containers/user-authentication/loginwithadmin/login.component";
import { RegisterComponent } from "../app/containers/user-authentication/register/register.component";
import { PasswordUpdateComponent } from "./containers/user-authentication/password-update/password-update.component";
import { UserActivateComponent } from "./containers/user-authentication/user-activate/user-activate.component";
import { ForgotPasswordComponent } from "./containers/user-authentication/forgot-password/forgot-password.component";
import { DashboardComponent } from "./containers/dashboard/dashboard.component"
import { LoginWithUser } from "../app/containers/user-authentication/loginwithuser/login.component";
import { DashboardUser } from "./containers/dashboardUser/dashboard.component";
import { DashboardAdmin } from "./containers/dashboardAdmin/dashboard.component";

import {MatChipsModule} from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material';
import { AuthService } from './services/auth.service';
import { Headers, Http, HttpModule } from '@angular/http'; 




@NgModule({
  declarations: [
    AppComponent,
    LoginWithAdmin,
    RegisterComponent,
    PasswordUpdateComponent,
    UserActivateComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    LoginWithUser,
    DashboardUser,
    DashboardAdmin
   
  ],
  imports: [
    
     BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatDatepickerModule,
    HttpModule
  ],
  entryComponents: [],
  providers: [DatePipe,AuthService],
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

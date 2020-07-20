import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



import { Headers, Http, HttpModule } from '@angular/http'; 
import { AuthService } from 'src/app/services/auth.service';
import { RegisterModel } from 'src/app/model/register-model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardUser implements OnInit {
  displaytoken: string;
  products :RegisterModel[];
  token: string = "";
  private getApiUrl = 'http://localhost:8080/api/user';

  constructor(private snackBar: MatSnackBar,private formBuilder:FormBuilder,
    private myservice:UserserviceService,private router:Router,
    private authService: AuthService,
    private http: Http) {         
  }
  ngOnInit() {    
    this.displaytoken = this.authService.token;

    this.authService.getUser()
    .subscribe(
      data => 
      {
        this.products = data;
      }
    )
   
  }


  // onSubmit()
  // {
  // this.myservice.getUser().subscribe(
  
  //   response =>{
  // console.log("message:"+response.message);
  // //added token in the local storage 
  // localStorage.getItem('token');
  // console.log("token",response.token);
  //     this.snackBar.open(response.message, "succesfull", {duration:5000})
  //     // this.router.navigate(["/dashboardadmin"]);
  //  },
  //  (error:any)=> {
  //    this.snackBar.open(error.error.message, "failed to get Data", {duration:5000})
    
  //  }
  // );
  
  // }
  getUser(){
    this.myservice.getUser().subscribe(
      (response:any) =>{
    var HeadersForUserAPI = new Headers();
    if(this.token){
      localStorage.getItem('token');
      console.log(this.token);
        HeadersForUserAPI.append('Authorization','Bearer ' + this.token);
        console.log("GetUser is working");
    }
    return this.http.get(this.getApiUrl,{
        headers: HeadersForUserAPI
    }).map(
        res => res.json());
    }
    );
  }


  logout() {
    console.log("signing out => clearing token");
    this.snackBar.open(" sucessfully logged out", "ok", {
      duration: 5000
    });

    localStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }

}

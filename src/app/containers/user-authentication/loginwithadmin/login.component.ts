import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
//import { LoginModel } from 'src/app/model/login.model';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserModel } from 'src/app/model/user-model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenParams } from '../../Classes/TokenParams';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginWithAdmin implements OnInit {

  tokenParam :TokenParams;
  loginForm:FormGroup;
  loginmodel:UserModel=new UserModel();
  constructor(private snackBar: MatSnackBar,private formBuilder:FormBuilder,
    private myservice:UserserviceService,private router:Router,
    private authService: AuthService) {         
  }

  ngOnInit() {
  
  }

  username = new FormControl(null,[Validators.required]);
  password= new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9@#$%&]{8,20}')]);

  getUserErrorMessage(){
    return this.username.hasError('required')? "Enter Username":
    this.username.hasError('username')? "username not valid":
     "";
   }

   getPasswordErrorMessage(){
    return this.password.hasError('required')? "Enter Password":
    this.password.hasError('pattern')? "minimum 8 characters required":
     "";
   }

onSubmit()
{
// this.loginmodel.username = this.username.value;
// this.loginmodel.password = this.password.value;

// this.myservice.usersLogin(this.loginmodel).subscribe(

//   (response:any) =>{
// console.log("message:"+response.message);
// //added token in the local storage 
// localStorage.setItem('token' , response.token);
// localStorage.setItem('email',this.username.value);
//     this.snackBar.open(response.message, "succesfull", {duration:5000})
//     this.router.navigate(["/dashboardadmin"]);
//  },
//  (error:any)=> {
//    this.snackBar.open(error, "failed to Login", {duration:5000})
  
//  }
// );
this.loginmodel.username = this.username.value;
this.loginmodel.password = this.password.value;
this.authService.login(this.loginmodel)
                .subscribe(
                  data =>
                  {
                     localStorage.setItem('token' , data.token);
                     localStorage.setItem('email',this.username.value);
                   this.tokenParam =data; 
                   this.authService.token= this.tokenParam.token;
                   console.log("Login Success")
                   this.snackBar.open("sucessfully loggin", "ok", {duration:5000})
                   this.router.navigate(["/dashboardadmin"]);
                  },
                  (error:any)=> {
                        this.snackBar.open(error, "failed to Login", {duration:5000})
                      
                      }
                );

}

}

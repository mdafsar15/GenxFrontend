import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
//import { UserDTO } from 'src/app/model/register.model';
import { UserserviceService } from 'src/app/services/userservice.service';
import { RegisterModel } from 'src/app/model/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user:RegisterModel=new RegisterModel();
  registerForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private myservice:UserserviceService,private snackBar: MatSnackBar,private router:Router) { }
  //Form Builder is to validate Data Of Email or Password Type
  ngOnInit() {
    
  }
  username=new FormControl(null,[Validators.required , Validators.pattern('[a-zA-Z]{3,20}')]);
  name=new FormControl(null,[Validators.required , Validators.pattern('[a-zA-Z]{3,20}')]);
  email = new FormControl(null,[Validators.required,Validators.email]);
  password= new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9@#$%&]{8,20}')]);
   salary=new FormControl(null,[Validators.required]);
   age=new FormControl(null,[Validators.required]);
   role=new FormControl(null,[Validators.required]);
  person=String;

  getNameErrorMessage(){
    return this.name.hasError('required')? "Enter name":
    this.name.hasError('pattern')?"Name required minimum 3 character":
     "";
   }

   getEmailErrorMessage(){
    return this.email.hasError('required')? "Enter Email Id":
    this.email.hasError('email')? "EmailId not valid":
     "";
   }

   getPasswordErrorMessage(){
    return this.password.hasError('required')? "Enter Password":
    this.password.hasError('pattern')? "minimum 8 characters required":
     "";
   }

   onSubmit(){
    this.user.username = this.username.value;
     this.user.name = this.name.value;
     this.user.email = this.email.value;
     this.user.password = this.password.value;
     this.user.salary = this.salary.value;
     this.user.age = this.age.value;
     this.user.role = [this.role.value];
     this.myservice.usersRegister(this.user).subscribe(
      (response:any) =>{
        this.snackBar.open(" check mail to verify", "succesfull", {duration:5000})
        this.router.navigate(["/login"]);
     },
     (error:any)=> {
       this.snackBar.open("failed register", "failed", {duration:5000})
     }
     );
   }

}

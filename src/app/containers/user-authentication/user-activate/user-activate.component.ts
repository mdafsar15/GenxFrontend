import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserModel} from '../../../model/user-model';
import {UserserviceService} from '../../../services/userservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
import {Router,ParamMap} from '@angular/router';



@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html',
  styleUrls: ['./user-activate.component.scss']
})
export class UserActivateComponent implements OnInit {

  user: UserModel = new UserModel();
  activeForm: FormGroup;
  token:string;

  constructor(private formBuilder: FormBuilder, private userservice: UserserviceService,private matSnackBar:MatSnackBar,private route: ActivatedRoute,private route2:Router) { 



  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');
    });

  }

  onSubmit() {
    console.log("---------------------------------------");

    this.token=this.route.snapshot.paramMap.get("token");
    // this.userservice.activateUser(this.activeForm,this.token).subscribe((user) => {
  //     this.route2.navigate(['/login']);
  //     this.matSnackBar.open('Your Account Verified SuccessFully','ok',{duration:4000});

  //   },
  //     (error: any) => {

  //       this.matSnackBar.open('Bad Credentials','ok',{duration:4000});
  //       console.log(error)
  //     });
  //   // alert(this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
   }

}

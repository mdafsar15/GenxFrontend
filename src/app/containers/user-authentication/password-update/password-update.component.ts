import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../../services/userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

 
  emailForm: FormGroup;
  loading = false;

  constructor(private userservice: UserserviceService, private router: Router,private matSnackBar:MatSnackBar) { }

  ngOnInit() {

    this.emailForm = new FormGroup({
        emailId: new FormControl('', [Validators.required])

  });
}

  onSubmit()
   {
    console.log("fetched mail form : ",this.emailForm);

    // this.matSnackBar.open('Reset Password Link Sent to Your Mail!!','ok',{duration:5000});
    // this.userservice.sendEmail(this.emailForm.value).subscribe(response => {
    //   console.log("inside send email");
    //   this.matSnackBar.open('Reset Password Link Sent to Your Mail!!','ok',{duration:5000});
    //   console.log("response after backend: " + response);
      


    //   console.log(response.message);
    //   console.log(response.statusCode);
    //   if (response.statusCode === 202) {
    //     this.router.navigate(['/login']);
    //   } else {
    //     this.router.navigate(['/passwordupdate']);
    //   }
    // },
    //   error => {
    //     this.loading = false;
    //   }
    // );

  }


}

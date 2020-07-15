import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http-service.service'
import { Observable } from 'rxjs';
import { UserModel} from '../model/user-model'
import { RegisterModel } from '../model/register-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  subscribe(arg0: (response: any) => Observable<any>) {
    throw new Error("Method not implemented.");
  }

  private userApiUrl = environment.userApiUrl;
  private getApiUrl = environment.getApiUrl;

  private httpOptions={
    headers: new HttpHeaders
     ({'content-type':'application/json',
     token: localStorage.getItem("token")})
    };
  constructor(private httpService:HttpService) { }
  usersRegister(users:RegisterModel):Observable<any>
  {
    
  console.log("--user-----userMAil",users.email);
  console.log("--user-----Pass",users.password);
  return this.httpService.post(this.userApiUrl+environment.registerUrl,users,this.httpOptions);
  }


  usersLogin(login:UserModel):Observable<any>
  {
     return this.httpService.post(this.userApiUrl+environment.loginUrl,login,this.httpOptions);
  }

  getUser()
  {
    console.log(localStorage.getItem('token'));

    console.log("Inside getUser of service");
    console.log(this.httpOptions);
    return this.httpService.get(this.getApiUrl,'Authorization' + 'Bearer ' + localStorage.getItem('token'));

  }
}

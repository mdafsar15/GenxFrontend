import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserModel} from '../model/user-model'

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, Http, HttpModule } from '@angular/http'; 

import {TokenParams } from 'src/app/containers/Classes/TokenParams';
import { RegisterModel } from '../model/register-model';

@Injectable()
export class AuthService {
    
    token: string = "";

    constructor(private http: Http) {}

    private TokenAPI ='http://localhost:8080/api/auth/signin';
    private getApiUrl = 'http://localhost:8080/getAllNotes';
    

    login(login:UserModel): Observable<TokenParams> {
        var headersForTokenAPI = new Headers({'content-type':'application/json'});
       // var data = "grant_type=password&username=" + username + "&password=" + password;

        return this.http.post(this.TokenAPI,login, { headers: headersForTokenAPI })
        .map(res => res.json());
    }

    getUser(): Observable<RegisterModel[]>{
        var HeadersForUserAPI = new Headers();
        if(this.token){
            HeadersForUserAPI.append('Authorization','Bearer ' + this.token);
            console.log("getUser Token",this.token);
        }
        return this.http.get(this.getApiUrl,{
            headers: HeadersForUserAPI
        }).map(
            res => res.json());

      }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  
  post(url: any, body: any, options: any): Observable<any> {
    return this._http.post(url, body, options);
  }

  afsar(url: any, options: any): Observable<any> {
    return this._http.get(url, options);
  }

  get(url: any, options: any): Observable<any> {
    return this._http.get(url, options);
  }

  put(url: any, body: any, options: any): Observable<any> {
    return this._http.put(url, body, options);
  }
  alam(url: any, options: any): Observable<any> {
    return this._http.put(url, options);
  }
  delete(url: any, options: any):Observable<any>{
    return this._http.delete(url, options);
  }
  patch(url: string, body: any, options: any): Observable<any> {
    return this._http.patch(url, body, options);
}

public httpOptions = {
  headers: new HttpHeaders({
    "content-type": "application/json",
    token: localStorage.getItem("token")
  })
};

}
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  constructor(private http: HttpClient) {}

  
    sendDetails(emailAddress: String, userName: String, password: String) {
      console.log("In Send details");
      let emailReqBody = {
        "email" : emailAddress,
        "name" :userName,
        "pass":password
      }
      const options = {
        headers: new HttpHeaders({
          "source":"LandSPage"
        })
      }
      return this.http.post(environment.loginlink + "setCredentials", emailReqBody,options);
      
    }
    
}    





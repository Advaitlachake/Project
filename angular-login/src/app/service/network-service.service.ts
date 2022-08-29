import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { User } from '../user';
import { User1 } from '../user1';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  private usersUrl: string;
  private usersUrl1:string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/setCredentials';
    this.usersUrl1= 'http://localhost:8081/getCredentials';

  }

  
    // sendDetails(emailAddress: String, userName: String, password: String) {
    //   console.log("In Send details");
    //   let emailReqBody = {
    //     "email" : emailAddress,
    //     "username" :userName,
    //     "password":password
    //   }
    //   // const options = {
    //   //   headers: new HttpHeaders({
    //   //     "source":"LandSPage"
    //   //   })
    //   // }
    //   let emailReqBody2 = JSON.stringify(emailReqBody)
    //   console.log(emailReqBody2);
    //   return this.http.post(this.usersUrl, emailReqBody2);
      
    // }
    public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }
    public save(user: User) {
      return this.http.post<User>(this.usersUrl, user);
    }
   public getUserDetails(user1:User1) {
      
    //console.log( this.usersUrl1+'/'+user1.email+'/'+user1.password);
      return this.http.get<any>( this.usersUrl1+'/'+user1.email+'/'+user1.password);
    }
   

  }



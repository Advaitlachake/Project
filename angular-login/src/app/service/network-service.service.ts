import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) public baseURL: String) {}

    sendDetails(emailAddress: String, userName: String, password: String) : void {
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
      
    }
}    





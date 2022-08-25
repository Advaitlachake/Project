import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkServiceService } from '../service/network-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  
  emailValue:string="";
  nameValue:string="";
  passValue:string="";
  
  constructor( private networkService: NetworkServiceService) { }

  ngOnInit(): void {
  }
  
  setDetails():void{
    console.log("in set details register");
    this.networkService.sendDetails(this.emailValue,this.nameValue,this.passValue);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkServiceService } from '../service/network-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  signIn = new FormGroup({

    semail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    spassword: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')] )
  })
  signUp = new FormGroup({
    username: new FormControl('',[Validators.pattern("[A-Za-z0-9]+")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')]),
    repassword: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')])
 }
  )

  
  nameValue:any="";
  emailValue:any="";
  passValue:any="";
  
  constructor( private networkService: NetworkServiceService) { }

  ngOnInit(): void {
  }
  
  setDetails():void{
    //console.log("Status : ",this.signUp.controls.username);
     this.nameValue= this.signUp.controls.username.value;
     this.emailValue=this.signUp.controls.email.value;
     this.passValue=this.signUp.controls.password.value;
     console.log("in set details register");
    console.log("Name value : ",this.signUp.controls.username.value );
     console.log("Email value : ",this.signUp.controls.email.value );
    
     console.log("Pass value : ",this.signUp.controls.password.value );
     console.warn(this.signUp.value);
     this.networkService.sendDetails(this.nameValue,this.emailValue,this.passValue);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkServiceService } from '../service/network-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from '../user';
import { User1 } from '../user1';



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
  semailValue:any="";
  spasswordValue:any="";

  user: User;
  user1:User1;
  constructor( private route: ActivatedRoute, private networkService: NetworkServiceService, private router: Router,) { 

    this.user = new User();
    this.user1=new User1();
  }
  
  ngOnInit(): void {
   
  }

  getDetails():void{
    this.semailValue=this.signIn.controls.semail.value;
    this.spasswordValue=this.signIn.controls.spassword.value;
    console.log("Email value:",this.signIn.controls.semail.value);
    console.log("Password Value",this.signIn.controls.spassword.value);
    this.user1.email=this.semailValue;
    this.user1.password=this.spasswordValue;
    
    this.networkService.getUserDetails(this.user1).subscribe(res => {
      console.log("Response : ",res);
    });
  
  
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
     //this.networkService.sendDetails(this.nameValue,this.emailValue,this.passValue);
     this.user.username=this.nameValue;
     this.user.email=this.emailValue;
     this.user.password=this.passValue;
     this.networkService.save(this.user).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/setCredentials']);
  }
  

}

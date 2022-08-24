import { Component, OnInit } from '@angular/core';
import { NetworkServiceService } from '../service/network-service.service';

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
    this.networkService.sendDetails(this.emailValue,this.nameValue,this.passValue);
  }

}

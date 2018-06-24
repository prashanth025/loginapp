import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../core/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private registerService: RegisterService
     ) { }

  register() {
    
     this.registerService.setRegisters(this.model);
     alert("Thank you for registering with us")
     
  }
  ngOnInit(): void {
    
  }

}


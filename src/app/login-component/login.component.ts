import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { RegisterService } from '../core/services/register.service';
import {AuthonticateService} from '../core/services/authonticate.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponentComponent implements OnInit {
  model: any = {};


  constructor(private router: Router, private registerService: RegisterService, private authonticateService: AuthonticateService) { }

  ngOnInit() {
  }

  login() {
    let user = this.registerService.getUser(this.model);
    if(user){
      if ((this.model.password === user.password) && (this.model.username === user.username)) {
        this.authonticateService.setLoggedinDetails(user);
        this.router.navigate(['/home']);  
      } else {
        alert("Please enter valide username and password");
        return;
      }
    }
    
  }



}

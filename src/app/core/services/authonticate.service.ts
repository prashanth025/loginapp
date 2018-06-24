import { Injectable } from '@angular/core';

@Injectable()
export class AuthonticateService {
  // private user = {};
  private isLoggedIn:boolean;
  constructor() {}

  setLoggedinDetails(isLoggedInDetails :any){
   this.isLoggedIn =isLoggedInDetails;
  }
  getLoggedinDetails(){
    return this.isLoggedIn;
  }
}

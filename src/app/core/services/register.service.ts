import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  users:any=[]
  constructor() { }
  setRegisters(user){
    this.users.push(user);
    console.log(this.users);
   
  }

  getUser(user){   
let User = this.users.find(i => {if(((user.password === i.password)&& (user.username===i.username))){
  return i;
}});
    return User;
  }
}

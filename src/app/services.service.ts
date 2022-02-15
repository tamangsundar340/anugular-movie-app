import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // declare variable
  email = 'a@gmail.com'
  password = '123'

  // inject router in constructor
  constructor(private route:Router) { }

  // function to login
  login(email:string, password:string){
    if(email === this.email && password == this.password){
      return 200;
    }else{
      return 403;
    }
  }

  // lofout funciton
  logout(){
    
  }


}

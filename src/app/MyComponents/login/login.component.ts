import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // declare variable
  errorMessage = "";
  email = "";
  password = "";

  // inject router and services
  constructor(private route:Router, private auth:ServicesService) { }

  ngOnInit(): void {
  }

  // validate forms
  loginForm = new FormGroup({
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, [Validators.required])
  })

  // submit function
  formSubmit(){
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;

    let res = this.auth.login(this.email, this.password)
    if(res === 200){
      this.route.navigate(['home'])
    }else{
      this.errorMessage = "User credential is invalid"
      this.route.navigate(['login'])
    }
    this.loginForm.reset();
  }

}

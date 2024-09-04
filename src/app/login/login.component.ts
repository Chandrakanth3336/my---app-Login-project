import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _loginService:LoginService, private _router:Router){}

public loginForm:FormGroup = new FormGroup({
  email : new FormControl(),
  password :new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$/)])
  
})


login(){
  console.log(this.loginForm.value);
  this._loginService.login(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login Successfull.....");
      // Store The Token

      sessionStorage.setItem("token",data.token);

      // go to Dashboard
      this._router.navigateByUrl("/dashboard");

    },
    (err:any)=>{
      alert("Invalid Credentials");
    }
  )
}
}


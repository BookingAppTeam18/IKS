import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../login.service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../model/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private service: LoginServiceService,
              private router: Router) {

  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login(): void {

    if(this.loginForm.valid) {
      const login: Login = {
        username: this.loginForm.value.username || "",
        password: this.loginForm.value.password || ""
      }
      this.service.getUser(login).subscribe({
        next: (response: Login) => {
          localStorage.setItem('user', response.username);
          this.router.navigate(['home'])
        }
      })
    }
  }

}

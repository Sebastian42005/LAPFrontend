import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginEmail = '';
  loginPassword = '';
  registerEmail = '';
  registerFirstName = '';
  registerLastName = '';
  registerBirthDate: Date;
  registerPassword = '';
  registerRole = '';
  currentTabIndex = 0;

  constructor(private apiService: ApiService,
              private router: Router,
              private matDialogRef: MatDialogRef<LoginComponent>) {
  }

  login() {
    this.apiService.login(this.loginEmail, this.loginPassword).subscribe(response => {
      localStorage.setItem("token", response.token);
      localStorage.setItem("email", this.loginEmail)
      this.matDialogRef.close(true);
    }, error => {
    });
  }

  register() {
    this.apiService.register(this.registerEmail, this.registerFirstName, this.registerLastName, this.registerPassword, this.registerRole, this.registerBirthDate).subscribe(response => {
      this.loginEmail = this.registerEmail;
      this.loginPassword = this.registerPassword;
      this.currentTabIndex = 0;
    });
  }
}

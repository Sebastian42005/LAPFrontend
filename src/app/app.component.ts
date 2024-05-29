import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BuchiFrontend';
  email = '';

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.checkLogin();
  }

  login() {
    this.matDialog.open(LoginComponent).afterClosed().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.checkLogin();
      }
    })
  }

  checkLogin() {
    const email = localStorage.getItem("email");
    if (email != null) {
      this.email = email;
    }
  }
}

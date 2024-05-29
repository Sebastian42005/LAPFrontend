import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../dto/User";

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrl: './admin-create-user.component.scss'
})
export class AdminCreateUserComponent implements OnInit{
  user: User = {} as User;
  edit = false;


  constructor(private apiService: ApiService,
              private matDialogRef: MatDialogRef<AdminCreateUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  ngOnInit() {
    if (this.data != null) {
      this.user = this.data;
      this.edit = true;
    }

  }

  createUser() {
    const apiCall = this.edit ? this.apiService.updateUser(this.user) : this.apiService.createUser(this.user);
    apiCall.subscribe(user => {
      this.matDialogRef.close(user);
    });
  }
}

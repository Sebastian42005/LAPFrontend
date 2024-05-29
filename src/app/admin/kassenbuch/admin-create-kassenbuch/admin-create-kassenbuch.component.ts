import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Kassenbuch} from "../../../dto/Kassenbuch";
import {User} from "../../../dto/User";

@Component({
  selector: 'app-admin-create-kassenbuch',
  templateUrl: './admin-create-kassenbuch.component.html',
  styleUrl: './admin-create-kassenbuch.component.scss'
})
export class AdminCreateKassenbuchComponent implements OnInit{
  kassenbuch: Kassenbuch = {} as Kassenbuch;
  edit = false;
  users: User[]

  constructor(private apiService: ApiService,
              private matDialogRef: MatDialogRef<AdminCreateKassenbuchComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Kassenbuch) {
  }

  ngOnInit() {
    if (this.data != null) {
      this.kassenbuch = this.data;
      this.edit = true;
    }
    this.apiService.getAllUsers().subscribe(users => {
      this.users = users;
      if (this.edit && this.kassenbuch.user) {
        const foundKassenbuchColumn = this.users.find(
          user => user.id === this.kassenbuch.user?.id
        );
        if (foundKassenbuchColumn) {
          this.kassenbuch.user = foundKassenbuchColumn;
        }
      }
    });
  }

  createKassenbuch() {
    const apiCall = this.edit ? this.apiService.updateKassenbuch(this.kassenbuch) : this.apiService.createKassenbuch(this.kassenbuch);
    apiCall.subscribe(kassenbuch => {
      this.matDialogRef.close(kassenbuch);
    });
  }
}

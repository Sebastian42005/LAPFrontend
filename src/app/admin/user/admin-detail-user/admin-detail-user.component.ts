import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../api.service";
import {Location} from "@angular/common";
import {User} from "../../../dto/User";

@Component({
  selector: 'app-admin-detail-user',
  templateUrl: './admin-detail-user.component.html',
  styleUrl: './admin-detail-user.component.scss'
})
export class AdminDetailUserComponent implements OnInit {
  user = {} as User

  constructor(private activateRoute: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.apiService.getUser(param['id']).subscribe(user => {
        this.user = user;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
}

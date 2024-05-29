import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../api.service";
import {Location} from "@angular/common";
import {Kassenbuch} from "../../../dto/Kassenbuch";

@Component({
  selector: 'app-admin-detail-kassenbuch',
  templateUrl: './admin-detail-kassenbuch.component.html',
  styleUrl: './admin-detail-kassenbuch.component.scss'
})
export class AdminDetailKassenbuchComponent implements OnInit {
  kassenbuch = {} as Kassenbuch

  constructor(private activateRoute: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.apiService.getKassenbuch(param['id']).subscribe(kassenbuch => {
        this.kassenbuch = kassenbuch;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
}

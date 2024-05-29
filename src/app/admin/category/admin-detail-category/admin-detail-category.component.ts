import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../api.service";
import {Location} from "@angular/common";
import {Category} from "../../../dto/Category";

@Component({
  selector: 'app-admin-detail-category',
  templateUrl: './admin-detail-category.component.html',
  styleUrl: './admin-detail-category.component.scss'
})
export class AdminDetailCategoryComponent implements OnInit {
  category = {} as Category

  constructor(private activateRoute: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.apiService.getCategory(param['id']).subscribe(category => {
        this.category = category;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
}

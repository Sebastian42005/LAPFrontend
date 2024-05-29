import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Category} from "../../../dto/Category";

@Component({
  selector: 'app-admin-create-category',
  templateUrl: './admin-create-category.component.html',
  styleUrl: './admin-create-category.component.scss'
})
export class AdminCreateCategoryComponent implements OnInit{
  category: Category = {} as Category;
  edit = false;


  constructor(private apiService: ApiService,
              private matDialogRef: MatDialogRef<AdminCreateCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Category) {
  }

  ngOnInit() {
    if (this.data != null) {
      this.category = this.data;
      this.edit = true;
    }

  }

  createCategory() {
    const apiCall = this.edit ? this.apiService.updateCategory(this.category) : this.apiService.createCategory(this.category);
    apiCall.subscribe(category => {
      this.matDialogRef.close(category);
    });
  }
}

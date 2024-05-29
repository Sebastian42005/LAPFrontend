import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../../../api.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminCreateCategoryComponent} from "../admin-create-category/admin-create-category.component";
import {Category} from "../../../dto/Category";

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.scss'
})
export class AdminCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'color', 'kassenbuchList', 'action'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.apiService.getAllCategories().subscribe(categorys => {
      this.dataSource = new MatTableDataSource(categorys);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createCategory() {
    this.matDialog.open(AdminCreateCategoryComponent).afterClosed().subscribe(category => {
      if (category != null) {
        this.dataSource.data.push(category);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  editCategory(category: Category) {
    this.matDialog.open(AdminCreateCategoryComponent, {
      data: { ...category }
    }).afterClosed().subscribe(category => {
      if (category != null) {
        this.dataSource.data = this.dataSource.data.filter(current => current.id != category.id)
        this.dataSource.data.push(category);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  deleteCategory(id: number) {
    this.apiService.deleteCategory(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(category => category.id != id);
    });
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../../../api.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminCreateUserComponent} from "../admin-create-user/admin-create-user.component";
import {User} from "../../../dto/User";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'firstName', 'lastName', 'role', 'birthdate', 'kassenbuchList', 'action'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
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

  createUser() {
    this.matDialog.open(AdminCreateUserComponent).afterClosed().subscribe(user => {
      if (user != null) {
        this.dataSource.data.push(user);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  editUser(user: User) {
    this.matDialog.open(AdminCreateUserComponent, {
      data: { ...user }
    }).afterClosed().subscribe(user => {
      if (user != null) {
        this.dataSource.data = this.dataSource.data.filter(current => current.id != user.id)
        this.dataSource.data.push(user);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(user => user.id != id);
    });
  }
}

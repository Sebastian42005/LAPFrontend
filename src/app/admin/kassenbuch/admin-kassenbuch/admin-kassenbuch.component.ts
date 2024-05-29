import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../../../api.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminCreateKassenbuchComponent} from "../admin-create-kassenbuch/admin-create-kassenbuch.component";
import {Router} from "@angular/router";
import {Kassenbuch} from "../../../dto/Kassenbuch";

@Component({
  selector: 'app-admin-kassenbuch',
  templateUrl: './admin-kassenbuch.component.html',
  styleUrl: './admin-kassenbuch.component.scss'
})
export class AdminKassenbuchComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user', 'transactionList', 'action'];
  dataSource: MatTableDataSource<Kassenbuch>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.apiService.getAllKassenbuchs().subscribe(kassenbuchs => {
      this.dataSource = new MatTableDataSource(kassenbuchs);
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

  createKassenbuch() {
    this.matDialog.open(AdminCreateKassenbuchComponent).afterClosed().subscribe(kassenbuch => {
      if (kassenbuch != null) {
        this.dataSource.data.push(kassenbuch);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  editKassenbuch(kassenbuch: Kassenbuch) {
    this.matDialog.open(AdminCreateKassenbuchComponent, {
      data: { ...kassenbuch }
    }).afterClosed().subscribe(kassenbuch => {
      if (kassenbuch != null) {
        this.dataSource.data = this.dataSource.data.filter(current => current.id != kassenbuch.id)
        this.dataSource.data.push(kassenbuch);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  deleteKassenbuch(id: number) {
    this.apiService.deleteKassenbuch(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(kassenbuch => kassenbuch.id != id);
    });
  }

  displayKassenbuch(kassenbuch: Kassenbuch) {
    this.router.navigate(['admin', 'kassenbuch', kassenbuch.id]).then()
  }
}

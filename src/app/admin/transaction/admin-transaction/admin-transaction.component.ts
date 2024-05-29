import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../../../api.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminCreateTransactionComponent} from "../admin-create-transaction/admin-create-transaction.component";
import {Transaction} from "../../../dto/Transaction";
import {Type} from "../../../dto/Kassenbuch";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrl: './admin-transaction.component.scss'
})
export class AdminTransactionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'transaction_date', 'amount', 'type', 'category', 'action'];
  dataSource: MatTableDataSource<Transaction>;
  total = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.apiService.getAllTransactions().subscribe(transactions => {
      this.dataSource = new MatTableDataSource(transactions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.calculateTotal(transactions);
    })
  }

  calculateTotal(transactions: Transaction[]) {
    let currentTotal = 0;
    transactions.forEach(transition => {
      if (transition.type == Type.REVENUE) {
        currentTotal += transition.amount;
      }else {
        currentTotal -= transition.amount
      }
    })
    this.total = currentTotal;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createTransaction() {
    this.matDialog.open(AdminCreateTransactionComponent).afterClosed().subscribe(transaction => {
      if (transaction != null) {
        this.dataSource.data.push(transaction);
        this.dataSource._updateChangeSubscription();
        this.calculateTotal(this.dataSource.data)
      }
    });
  }

  editTransaction(transaction: Transaction) {
    this.matDialog.open(AdminCreateTransactionComponent, {
      data: { ...transaction }
    }).afterClosed().subscribe(transaction => {
      if (transaction != null) {
        this.dataSource.data = this.dataSource.data.filter(current => current.id != transaction.id)
        this.dataSource.data.push(transaction);
        this.dataSource._updateChangeSubscription();
        this.calculateTotal(this.dataSource.data)
      }
    });
  }

  deleteTransaction(id: number) {
    this.apiService.deleteTransaction(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(transaction => transaction.id != id);
      this.calculateTotal(this.dataSource.data)
    });
  }

  protected readonly Type = Type;

  displayTransaction(transaction: Transaction) {
    this.router.navigate(['admin', 'transaction', transaction.id]).then()
  }
}

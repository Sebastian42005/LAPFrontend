import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Transaction} from "../../../dto/Transaction";
import {Category} from "../../../dto/Category";
import {Type} from "../../../dto/Kassenbuch";

@Component({
  selector: 'app-admin-create-transaction',
  templateUrl: './admin-create-transaction.component.html',
  styleUrl: './admin-create-transaction.component.scss'
})
export class AdminCreateTransactionComponent implements OnInit{
  transaction: Transaction = {} as Transaction;
  edit = false;
  types: Type[] = [Type.REVENUE, Type.EXPENDITURE]
  categories: Category[]

  constructor(private apiService: ApiService,
              private matDialogRef: MatDialogRef<AdminCreateTransactionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Transaction) {
  }

  ngOnInit() {
    if (this.data != null) {
      this.transaction = this.data;
      this.edit = true;
    }

    this.apiService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      if (this.edit && this.transaction.category) {
        const foundTransactionColumn = this.categories.find(
          category => category.id === this.transaction.category?.id
        );
        if (foundTransactionColumn) {
          this.transaction.category = foundTransactionColumn;
        }
      }
    });
  }

  createTransaction() {
    const apiCall = this.edit ? this.apiService.updateTransaction(this.transaction) : this.apiService.createTransaction(this.transaction);
    apiCall.subscribe(transaction => {
      this.matDialogRef.close(transaction);
    });
  }
}

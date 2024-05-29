import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../api.service";
import {transition} from "@angular/animations";
import {Transaction} from "../../../dto/Transaction";
import {Location} from "@angular/common";

@Component({
  selector: 'app-admin-detailtransaction',
  templateUrl: './admin-detailtransaction.component.html',
  styleUrl: './admin-detailtransaction.component.scss'
})
export class AdminDetailtransactionComponent implements OnInit {
  transaction = {} as Transaction

  constructor(private activateRoute: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.apiService.getTransaction(param['id']).subscribe(transaction => {
        this.transaction = transaction;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminCategoryComponent} from "./admin/category/admin-category/admin-category.component";
import {AdminKassenbuchComponent} from "./admin/kassenbuch/admin-kassenbuch/admin-kassenbuch.component";
import {AdminUserComponent} from "./admin/user/admin-user/admin-user.component";
import {StatisticComponent} from "./statistic/statistic.component";
import {AdminTransactionComponent} from "./admin/transaction/admin-transaction/admin-transaction.component";
import {
  AdminDetailtransactionComponent
} from "./admin/transaction/admin-detailtransaction/admin-detailtransaction.component";
import {AdminDetailCategoryComponent} from "./admin/category/admin-detail-category/admin-detail-category.component";
import {
  AdminDetailKassenbuchComponent
} from "./admin/kassenbuch/admin-detail-kassenbuch/admin-detail-kassenbuch.component";
import {AdminDetailUserComponent} from "./admin/user/admin-detail-user/admin-detail-user.component";

const routes: Routes = [
  {path: 'admin/category', component: AdminCategoryComponent},
  {path: 'admin/category/:id', component: AdminDetailCategoryComponent},
  {path: 'admin/kassenbuch', component: AdminKassenbuchComponent},
  {path: 'admin/kassenbuch/:id', component: AdminDetailKassenbuchComponent},
  {path: 'admin/transaction', component: AdminTransactionComponent},
  {path: 'admin/transaction/:id', component: AdminDetailtransactionComponent},
  {path: 'admin/user', component: AdminUserComponent},
  {path: 'admin/user/:id', component: AdminDetailUserComponent},
  {path: '', component: StatisticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

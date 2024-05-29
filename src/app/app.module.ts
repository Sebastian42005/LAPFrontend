import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import { AdminCategoryComponent } from './admin/category/admin-category/admin-category.component';
import { AdminCreateCategoryComponent } from './admin/category/admin-create-category/admin-create-category.component';
import { AdminKassenbuchComponent } from './admin/kassenbuch/admin-kassenbuch/admin-kassenbuch.component';
import { AdminCreateKassenbuchComponent } from './admin/kassenbuch/admin-create-kassenbuch/admin-create-kassenbuch.component';
import { AdminUserComponent } from './admin/user/admin-user/admin-user.component';
import { AdminCreateUserComponent } from './admin/user/admin-create-user/admin-create-user.component';
import {NgxColorsModule} from "ngx-colors";
import { StatisticComponent } from './statistic/statistic.component';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import { AdminTransactionComponent } from './admin/transaction/admin-transaction/admin-transaction.component';
import { AdminCreateTransactionComponent } from './admin/transaction/admin-create-transaction/admin-create-transaction.component';
import { LoginComponent } from './login/login.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import { AdminDetailtransactionComponent } from './admin/transaction/admin-detailtransaction/admin-detailtransaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminCategoryComponent,
    AdminCreateCategoryComponent,
    AdminKassenbuchComponent,
    AdminCreateKassenbuchComponent,
    AdminUserComponent,
    AdminCreateUserComponent,
    StatisticComponent,
    AdminTransactionComponent,
    AdminCreateTransactionComponent,
    LoginComponent,
    AdminDetailtransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    NgxColorsModule,
    CanvasJSAngularChartsModule,
    MatTabGroup,
    MatTab
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

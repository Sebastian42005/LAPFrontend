import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./dto/User";
import {Kassenbuch} from "./dto/Kassenbuch";
import {Category} from "./dto/Category";
import {Transaction} from "./dto/Transaction";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  //Statistics
  getStatistics() {
    return this.get<{x: Date, y: number}[]>('/statistic');
  }

  // Authentication
  login(email: string, password: string): Observable<{ token: string, role: string }> {
    return this.post<{ token: string, role: string }>(`/auth/login`, {email, password});
  }

  register(email: string, firstname: string, lastname: string, password: string, role: string, birthdate: Date): Observable<any> {
    return this.post(`/auth/register`, {
      email,
      firstname,
      lastname,
      password,
      role,
      birthdate
    });
  }

  //Transaction
  getKassenbuchTransactions(id: number) {
    return this.get(`/kassenbuch/${id}/transactions`)
  }

  //Category

  createCategory(category: Category): Observable<Category> {
    return this.post<Category>('/category', category)
  }

  updateCategory(category: Category) {
    return this.put<Category>('/category', category)
  }

  getAllCategories(): Observable<Category[]> {
    return this.get<Category[]>('/category')
  }

  getCategory(id: number): Observable<Category> {
    return this.get<Category>(`/category/${id}`)
  }

  deleteCategory(id: number): Observable<any> {
    return this.delete(`/category/${id}`)
  }


  //Kassenbuch

  createKassenbuch(kassenbuch: Kassenbuch): Observable<Kassenbuch> {
    return this.post<Kassenbuch>('/kassenbuch', kassenbuch)
  }

  updateKassenbuch(kassenbuch: Kassenbuch) {
    return this.put<Kassenbuch>('/kassenbuch', kassenbuch)
  }

  getAllKassenbuchs(): Observable<Kassenbuch[]> {
    return this.get<Kassenbuch[]>('/kassenbuch')
  }

  getKassenbuch(id: number): Observable<Kassenbuch> {
    return this.get<Kassenbuch>(`/kassenbuch/${id}`)
  }

  deleteKassenbuch(id: number): Observable<any> {
    return this.delete(`/kassenbuch/${id}`)
  }


  //Transaction

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.post<Transaction>('/transaction', transaction)
  }

  updateTransaction(transaction: Transaction) {
    return this.put<Transaction>('/transaction', transaction)
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.get<Transaction[]>('/transaction')
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.get<Transaction>(`/transaction/${id}`)
  }

  deleteTransaction(id: number): Observable<any> {
    return this.delete(`/transaction/${id}`)
  }


  //User

  createUser(user: User): Observable<User> {
    return this.post<User>('/user', user)
  }

  updateUser(user: User) {
    return this.put<User>('/user', user)
  }

  getAllUsers(): Observable<User[]> {
    return this.get<User[]>('/user')
  }

  getUser(id: number): Observable<User> {
    return this.get<User>(`/user/${id}`)
  }

  deleteUser(id: number): Observable<any> {
    return this.delete(`/user/${id}`)
  }


  private get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(baseUrl + url, {
      headers: this.getHeaders()
    });
  }

  private post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(baseUrl + url, body, {
      headers: this.getHeaders()
    });
  }

  private delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(baseUrl + url, {
      headers: this.getHeaders()
    });
  }

  private put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(baseUrl + url, body, {
      headers: this.getHeaders()
    });
  }

  private getHeaders(): any {
    if (localStorage.getItem('token')) {
      return {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    } else return {
      'Authorization': ''
    }
  }
}

export const baseUrl = 'http://localhost:8080';

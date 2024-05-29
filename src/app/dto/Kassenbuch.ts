import {User} from "./User";
import {Transaction} from "./Transaction";

export interface Kassenbuch {
  id: number
  user: User
  transactionList: Transaction[]
}

export enum Type {
  REVENUE = "REVENUE",
  EXPENDITURE = "EXPENDITURE"
}

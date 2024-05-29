import {Transaction} from "./Transaction";

export interface Category {
  id: number
  name: string
  color: string
  transactions: Transaction[]
}

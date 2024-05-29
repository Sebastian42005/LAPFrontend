import {Category} from "./Category";
import {Type} from "./Kassenbuch";

export interface Transaction {
  id: number
  transaction_date: Date
  amount: number
  type: Type
  category: Category
}

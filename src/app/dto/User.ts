import {Kassenbuch} from "./Kassenbuch";

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: Role
  birthdate: Date
  password: string
  kassenbuch: Kassenbuch
}

export enum Role {
  ADMIN,
  USER
}

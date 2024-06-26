import { api } from "../lib/axios";

export interface Transaction {
  id: string
  date: string
  category: string
  name: string
  price: string
  type: string
}

export async function getAllTransactions() {
  const response = await api.get<Transaction[]>('/transactions')

  return response.data
}

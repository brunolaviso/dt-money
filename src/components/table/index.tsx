import { useEffect, useState } from 'react';
import './table.css'
import { Transaction, getAllTransactions } from '../../api/transaction';

export function Table() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    getAllTransactions().then(setTransactions)
  }, [])

  return (
    <div className="table">
      <div className="container table-content">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.name}</td>
                  <td className={transaction.type === 'income' ? 'income' : 'withdraw'}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(Number(transaction.price))}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

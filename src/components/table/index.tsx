import { useEffect, useState } from 'react';
import './table.css'
import { Transaction, getAllTransactions } from '../../api/transaction';

export function Table() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    getAllTransactions().then(setTransactions)
  }, [])

  console.log(transactions)

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
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$ 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw">- R$ 1.259,00</td>
              <td>Casa</td>
              <td>17/02/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

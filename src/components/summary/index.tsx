import { useEffect, useState } from 'react';
import { Card } from '../card'

import "./summary.css";
import { getAllTransactions } from '../../api/transaction';

export function Summary() {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState(0)

  useEffect(() => {
    getAllTransactions().then((transactions) => {
      const income = transactions.reduce((acc, value) => {
        if (value.type === 'income') {
          return acc + Number(value.price)
        }

        return acc
      }, 0)

      const withdraw = transactions.reduce((acc, value) => {
        if (value.type === 'withdraw') {
          return acc + Number(value.price)
        }

        return acc
      }, 0)

      setIncomeAmount(income)
      setWithdrawAmount(withdraw)
    })
  }, [])

  return (
    <div className="summary">
      <div className="container summary-content">
        <Card variant="deposit" amount={incomeAmount} />
        <Card variant="withdraw" amount={withdrawAmount} />
        <Card variant="total" amount={incomeAmount - withdrawAmount} />
      </div>
    </div>
  );
}

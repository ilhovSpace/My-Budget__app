import React,{ useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)

  const incomeAmounts = incomeTransactions.map(
    income => income.incomeAmount
  )
  const expenseAmounts = expenseTransactions.map(
    expense => expense.expenseAmount
  ) 
  
  const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const totalExpense = expenseAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='balance'>
      <h2>My Balance</h2>
      <h3>$ {(totalIncome - totalExpense).toFixed(2)}</h3>
      <div className='income-expense'>
        <div className='plus'>
          <h3>Income</h3>
          <p>+ $ {totalIncome}</p>
        </div>
        <div className='minus'>
          <h3>Expense</h3>
          <p>- $ {totalExpense}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance

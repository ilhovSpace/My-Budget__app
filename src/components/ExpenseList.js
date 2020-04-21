import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext) 

  return (
    <div className='transactions transactions-expense'>
      <h2>Trasaction Expense History</h2>
      <ul className='transaction-list'>
      {expenseTransactions.map(expense => (
          <ExpenseTransaction key={expense.id} expense={expense}></ExpenseTransaction>)
        )}
      </ul>
    </div>
  )
}

export default ExpenseList

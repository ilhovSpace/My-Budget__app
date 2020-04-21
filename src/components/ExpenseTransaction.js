import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const ExpenseTransaction = (props) => {
  const {expenseText, expenseAmount, id } = props.expense
  const {deleteTransaction} = useContext(GlobalContext)
  
  return (
        <li className='transaction'>
          <span className='transaction-text'>{expenseText} </span>
          <span className='transaction-amount'>${expenseAmount}</span>
          <button className='delete-btn' onClick={() => deleteTransaction(id)}>
            <i className='fas fa-trash'></i>
          </button>
        </li>
  )
}

export default ExpenseTransaction

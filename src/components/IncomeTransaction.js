import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const IncomeTransaction = (props) => {
  const {incomeText, incomeAmount, id } = props.income
  const {deleteTransaction} = useContext(GlobalContext)
  
  return (
        <li className='transaction'>
          <span className='transaction-text'>{incomeText} </span>
          <span className='transaction-amount'>${incomeAmount}</span>
          <button className='delete-btn' onClick={() => deleteTransaction(id)}>
            <i className='fas fa-trash'></i>
          </button>
        </li>
  )
}

export default IncomeTransaction

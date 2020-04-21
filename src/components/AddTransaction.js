import React,{ useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuidv4} from 'uuid';

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext)

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: ''
  })

  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: ''
  })

  const onChangeIncome = (e) => {
    setIncome({...income, [e.target.name]: e.target.value})
  }

  const onChangeExpense = (e) => {
    setExpense({...expense, [e.target.name]: e.target.value})
  }

  const onSubmitIncome = (e) => {
    e.preventDefault()
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: income.incomeText,
      incomeAmount: +income.incomeAmount,
    }
    addIncome(newIncomeTransaction) 
    setIncome({
      incomeText: '',
      incomeAmount: '',
    })
  }

  const onSubmitExpense = (e) => {
    e.preventDefault()
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText: expense.expenseText,
      expenseAmount: +expense.expenseAmount,
    }
    addExpense(newExpenseTransaction)
    setExpense({
      expenseText: '',
      expenseAmount: ''
    })
  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={onSubmitIncome}>
        <div className='input-group income'>
          <input 
            type='text' 
            name='incomeText' 
            placeholder='Add Income...' 
            value={income.incomeText}
            autoComplete='off' 
            onChange={onChangeIncome}
            minLength='3'
            required
          />
          <input 
            type='number' 
            name='incomeAmount' 
            placeholder='Amount'
            value={income.incomeAmount} 
            autoComplete='off' 
            onChange={onChangeIncome}
            minLength='1'
            required
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className='input-group expense'>
          <input 
            type='text' 
            name='expenseText'
            placeholder='Add Expence...' 
            value={expense.expenseText}
            autoComplete='off' 
            onChange={onChangeExpense}
            minLength='3'
            required 
          />
          <input 
            type='number'
            name='expenseAmount' 
            placeholder='Amount' 
            value={expense.expenseAmount}
            autoComplete='off'
            onChange={onChangeExpense} 
            minLength='1'
            required  
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
} 

export default AddTransaction

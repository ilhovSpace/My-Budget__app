import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext) 

  return (
    <div className='transactions transactions-income'>
      <h2>Trasaction Income History</h2>
      <ul className='transaction-list'>
        {incomeTransactions.map(income => (
          <IncomeTransaction key={income.id} income={income}></IncomeTransaction>)
        )}
      </ul>
    </div>
  )
}

export default IncomeList

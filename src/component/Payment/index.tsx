import {  TextField } from '@mui/material'
import PaymentSelectUser from './PaymentSelectUser'
import {useState} from 'react'
import './Payment.css'
import PaymentBtnConfirm from './PaymentBtnConfirm'

export default function Payment() {
  const [NameSelected, setNameSelected] = useState('')
  const [ValueSelected, setValueSelected] = useState('')
  return (
    <div className='paymentContainer'>
        <h1>Transferências</h1>
        <div className='paymentSelectBody'>
            <PaymentSelectUser setNameSelected={setNameSelected}/>
            <TextField 
              sx={{width:'100%',margin:"10px 0px"}}
              label={'valor'}
              onChange={e=>setValueSelected(e.target.value)}  
              value={ValueSelected}
            /> 
            <PaymentBtnConfirm NameSelected={NameSelected} ValueSelected={ValueSelected} setValueSelected={setValueSelected}/>
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountRequest, TransactionsRequest, UserRequest } from '../../Api'
import Payment from '../../Payment'
import Table from '../../Table'
import AppBar from './AppBar'
import './Home.css'
export default function Home() {

  return <div>
  <AppBar/>
  <div className='homeContainer'>
    <Payment/>
    <Table/>
  </div>
</div>
  
}

import React,{useState,useEffect} from 'react'
import { TransactionsRequest } from '../Api'
import {  TransactionType } from '../Type'
import { getUserLocalStorage, handleDate, handleMonth } from '../uteis'
import ButtonSelected from './ButtomSelect'
import './Table.css'
import { useSelector } from 'react-redux/es/exports'
import Date from './Date'

export default function Table() {
  const [Transactions, setTransactions] = useState<TransactionType[]>([])
  const [Selected, setSelected] = useState('')
  const [dateSelected, setDateSelected] = useState('')
  const idUserLogged = getUserLocalStorage().usuario
  const updateLayout = useSelector((state:any)=>state.layoutUppdateInformations.update)
  const [load, setload] = useState(false)
  async function getUsersInformations() {
    let dia = parseInt(dateSelected.toString().split(' ')[2])
    let ano = parseInt(dateSelected.toString().split(' ')[3])
    let mes = handleMonth(dateSelected.toString().split(' ')[1])
    
    const transactions = await TransactionsRequest(Selected,dia,mes,ano)
    if (transactions.length === 0) {
      setload(true)
    }else{
      setload(false)
    }
    setTransactions(transactions?.reverse())
  }
  useEffect(()=>{
    getUsersInformations()
  },[Selected,updateLayout,dateSelected])

  return (
    <div>
        <div className='tableContainer '>
          <div className='tableHeader'>
            <ButtonSelected setSelected={setSelected}/>
            <Date setDateSelected={setDateSelected}/>
          </div>
          <div className='tableBody'>
            <table className="table table-striped ">
              <thead>
                  <tr>
                      <th scope="col">Transações</th>
                      <th scope="col">Valor da transação</th>
                      <th scope="col"> <span id='th-2'>Enviado por </span></th>
                      <th  scope="col" ><span id='th-2'>Recebido por </span> </th>
                      <th scope="col">data</th>
                  </tr>
              </thead>
              {
                load ?
                   <tr className='emptyTable'>
                    <td style={{background:"",width:""}}></td>
                    <td style={{background:"",width:""}}>Vazio</td>
                    <td style={{background:"",width:""}}></td>
                    <td></td>
                    <td></td>
                   </tr>
                :
                Transactions?.map((elem,key)=>{
                  return  (
                    <tbody key={key} className=''>
                    <tr >
                      <td style={{background:"",width:""}} scope="row">{key}</td>
                      <td>{elem.obj.value.toFixed(2)}</td>
                      <td>{elem.obj.debitedAccount?.id === idUserLogged ? "Você": elem.obj.debitedAccount?.user.username}</td>
                      <td>{elem.obj.debitedAccount?.id !== idUserLogged ? "Você": elem.obj.creditedAccount?.user.username}</td>
                      <td>{handleDate(elem.obj.createdAt)}</td>
                    </tr>
                  </tbody>
      
                  )
                })
              }
            </table>
          </div>  
        </div>
    </div>
  )
}

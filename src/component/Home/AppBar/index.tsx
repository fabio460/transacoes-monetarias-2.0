import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountRequest, UserRequest } from '../../../Api'
import { getUserLocalStorage } from '../../../uteis'
import { AccountType } from '../../../Type'
import './AppBar.css'
import AvatarMenuList from './AvatarMenuList'
import { useSelector } from 'react-redux/es/exports'
export default function AppBar() {
    const [User, setUser] = useState<{username:string,id:string}>()
    const [Account, setAccount] = useState<AccountType>()
  
    const navigate = useNavigate()
    const sair = ()=>{
        localStorage.removeItem('user')
        navigate('/login')
      }
      
  const id = getUserLocalStorage().usuario
  async function getUsersInformations() {
    const user = await UserRequest()
    const account =await AccountRequest()
    setAccount(account)
    setUser(user)
  }
 
  const updateLayout = useSelector((state:any)=>state.layoutUppdateInformations.update)
  useEffect(()=>{
     getUsersInformations()
  },[updateLayout])
  
  return (
    <nav className="navbar bg-light" style={{padding:"10px 20px"}}>
        <div className="container-fluid">
            <h1 className="navbar-brand">Bem vindo {User?.username}</h1>
            <div className='appBarIMenuRight'>
                <div>Saldo <span className='appBarMenuRightMoney'> {Account && parseFloat(Account?.balance).toFixed(2)}</span> reais</div>
                <AvatarMenuList avatarName={User?.username} sair={sair}/>
            </div>
        </div>
    </nav>
  )
}



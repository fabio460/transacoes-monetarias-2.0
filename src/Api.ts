
import { getUserLocalStorage } from "./uteis"

 const url = 'http://localhost:4000/'
const url2= 'https://api-transacoes-monetarias.vercel.app/'

export async function LoginRequest(username:string,password:string) {
    const res = await fetch(url+'login',{
        headers:{
          "Content-Type":"application/json",
        },
        method:'post',
        body:JSON.stringify({
            username,password
        })
      })
      .then(res=>res.json())
      console.log(res)
      return res
}

export async function AccountRequest() {
    const user = getUserLocalStorage()
    const id = user?.usuario
    const token = user?.JWT
    const res = await fetch(url+'getAccount',{
        headers:{
          "Content-Type":"application/json",
          "x-access-token":token
        },
        method:'post',
        body:JSON.stringify({
            id
        })
      })
      .then(res=>res.json())
      return res
}

export async function UserRequest() {
  const user = getUserLocalStorage()
  const id = user.usuario
  const token = user.JWT
  const res = await fetch(url+'getUser',{
      headers:{
        "Content-Type":"application/json",
        "x-access-token":token
      },
      method:'post',
      body:JSON.stringify({
          id
      })
    })
    .then(res=>res.json())
    return res
}

export async function TransactionsRequest(selectedBy:string,day:number|null,month:number|null,year:number|null) {
  const user = getUserLocalStorage()
  const id = user.usuario
  const token = user.JWT
  const res = await fetch(url+'getTransactions',{
      headers:{
        "Content-Type":"application/json",
        "x-access-token":token
      },
      method:'post',
      body:JSON.stringify({
          id,
          selectedBy,
          day,
          month,
          year
      })
    })
    .then(res=>res.json())
    return res
}

export async function UsersAllRequest() {
  const res = await fetch(url+'getUsers',{
      headers:{
        "Content-Type":"application/json",     
      },
    })
    .then(res=>res.json())
    return res
}

export async function CashOut(value:string,userCashIn:string) {

  const user = getUserLocalStorage()
  const id = user.usuario
  const token = user.JWT
  let valueNumber = parseFloat(value)
  const res = await fetch(url+'cashOut',{
      headers:{
        "Content-Type":"application/json",
        "x-access-token":token
      },
      method:'post',
      body:JSON.stringify({
          id,
          userCashIn,
          value: valueNumber
      })
    })
    .then(res=>res.json()).catch(err=>{
      return err
    })

    return res
}

export async function CreateUser(username:string,password:string) {
  const res = await fetch(url+'createUsers',{
      headers:{
        "Content-Type":"application/json",
      },
      method:'post',
      body:JSON.stringify({
          username,password
      })
    })
    .then(res=>res.json())
    return res
}
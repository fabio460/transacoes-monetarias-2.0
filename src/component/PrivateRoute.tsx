import { CircularProgress } from '@mui/material'
import  { useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AccountRequest } from '../Api'

export const  PrivateRoute = ({children}:{children:JSX.Element})=> {
    const [loading, setLoading] = useState(true)
    const [authenticate, setAutenticate] = useState(false)
    async function AutenticateValidation() {
      const account =await AccountRequest()
      setLoading(false)
      setAutenticate(account) 
    }
    useEffect(() => {
      AutenticateValidation()
    }, [])
    return loading ?
      <div style={{display:'flex',justifyContent:"center",alignItems:"center",height:"90vh"}}>
        <CircularProgress size='200px'/>
      </div> :
      !authenticate ? 
      <div>
       <Navigate to={'/login'}  />
      </div>:
      <div>{children}</div>
}

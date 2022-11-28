import { Button, CircularProgress, FormControl, Input, InputLabel, Typography,IconButton } from '@mui/material'
import React, { createContext, useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {LoginRequest} from '../../Api'
import { setUserLocalStorage } from '../../uteis'
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
export default function Login() {
    const [username, setusername] = useState('')  
    const [password, setpassword] = useState('')
    const [loadding, setloadding] = useState(false)
    const [showPassword, setshowPassword] = useState(false) 
    const navigate = useNavigate()

    const logar =async ()=>{
       setloadding(true)
       const req = await LoginRequest(username,password)
       if (req) {
         setUserLocalStorage(req)
          navigate('/')
       }else{
         alert('usuario ou senha inválidos')
       }
       setloadding(false)
    }

   
  return (
    <div>
        <div className='cadastroContainer'>
          <div className='cadastroLeft'>
             <h1 className='cadastroTitle'>Ola! Seja bem vindo</h1>
             <div className='cadastroText'>
                <div className='cadastroTextItem'>
                  <div>Este é um sistema de tranferência monetária</div>
                  <div>Voçe pode transferir, receber e consultar suas transaçes</div>
                  <div>Faça o login e aproveite</div>
                </div>
             </div>
          </div>
          <div className='cadastroRight'>
            <div className=' cadastroBody'>
              <h2 className='cadastroBodyTitle'>Entre com sua conta</h2>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Nome</InputLabel>
                <Input id="component-simple" 
                    onChange={e=>setusername(e.target.value)}value={username}
                />
              </FormControl>
              <FormControl variant="standard" sx={{margin:"20px 0px"}}>
                <InputLabel htmlFor="component-simple">Senha</InputLabel>
                <Input id="component-simple"  
                  type={showPassword?'text':'password'}
                  onChange={e=>setpassword(e.target.value)}value={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=> setshowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
  
               
              </FormControl>
              <Typography>
                Não é cadastrado? <Link to={'/cadastro'}>Clique aqui  </Link>
              </Typography>
              {loadding ?
                <Button disabled variant='contained' sx={{color:'white',bgcolor:'',marginTop:"20px"}}>
                  <CircularProgress sx={{height:'10px',width:"10px"}} size='25px'/>
                </Button>
                :    
                <Button variant='contained' onClick={logar} sx={{marginTop:"20px"}}>Logar</Button>  
              }
            </div>
          </div>
        </div>
    </div>
  )
}

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
    const [inputInvalided, setInputInvalided] = useState(false)
    const [msgInvalidInput, setmsgInvalidInput] = useState('')
    const navigate = useNavigate()

    const logar =async ()=>{
       setloadding(true)
       const req = await LoginRequest(username,password)
       setmsgInvalidInput(req)
       if (req) {
         setUserLocalStorage(req)
          navigate('/')
       }else{
        setmsgInvalidInput('usuario ou senha inválidos')
        setInputInvalided(true)
       }
       setloadding(false)
    }

   
  return (
    <div>
        <div className='cadastroContainer'>
          <div className='cadastroLeft'>
             <h1 className='cadastroTitle'>Olá! Seja bem vindo </h1>
             <div className='cadastroText'>
                <div className='cadastroTextItem'>
                  <div>Este é um sistema de transferência monetária </div>
                  <div>Você pode transferir, receber e consultar suas transações</div>
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
                    error={inputInvalided}
                    onChange={e=>setusername(e.target.value)}value={username}
                />
                
              </FormControl>
              <FormControl variant="standard" sx={{margin:"20px 0px"}}>
                <InputLabel htmlFor="component-simple">Senha</InputLabel>
                <Input id="component-simple"  
                  error={inputInvalided}
                  type={showPassword?'text':'password'}
                  onChange={e=>setpassword(e.target.value)}value={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=> setshowPassword(!showPassword)}
                      >
                        {showPassword ?
                          <VisibilityOff color={inputInvalided ? 'error' :'inherit'} />
                          : 
                          <Visibility color={inputInvalided ? 'error' :'inherit'} />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className='msgErro'>{msgInvalidInput}</div>
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

import { Button, FormControl, Input, InputLabel,CircularProgress } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateUser } from '../../Api'
import './Cadastro.css'
export default function Cadastro() {
  const [username, setusername] = useState('')  
  const [password, setpassword] = useState('')
  const [loadding, setloadding] = useState(false)
  const navigate = useNavigate()

  const createUser = async()=>{
    setloadding(true)
     const usecreated = await CreateUser(username,password)
     setloadding(false)
     alert(usecreated)
     //navigate('/login')
  }
  return (
    <div className='cadastroContainer'>
      <div className='cadastroLeft'>
         <h1 className='cadastroTitle'>Ola! Cadastre-se aqui</h1>
         <div className='cadastroText'>
                <div className='cadastroTextItem'>
                  <div>Primeiro faça seu cadastro </div>
                  <div>Depois entre com sua conta </div>
                  <div>E aproveite</div>
                </div>
             </div>
      </div>
      <div className='cadastroRight'>
       
        <div className=' cadastroBody'>
          <h2 className='cadastroBodyTitle'>Cadastre-se </h2>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Nome</InputLabel>
            <Input id="component-simple" 
                    onChange={(e:any)=>setusername(e.target.value)}value={username}
            />
          </FormControl>
          <FormControl variant="standard" sx={{margin:"20px 0px"}}>
            <InputLabel htmlFor="component-simple">Senha</InputLabel>
            <Input id="component-simple" 
                   type='password' 
                   onChange={e=>setpassword(e.target.value)}value={password}
                />
          </FormControl>
          {
              loadding ?
              <Button disabled variant='contained' sx={{color:'white',bgcolor:'',marginTop:"20px"}}  color='error'>
                <CircularProgress sx={{height:'10px',width:"10px"}} size='25px' color='error'/>
              </Button>
              :    
              <Button onClick={createUser} variant='contained' sx={{bgcolor:'#42a5f5'}}>Cadastrar</Button> 
          }
          <Button variant='outlined' onClick={()=>navigate('/')} sx={{color:'#42a5f5',marginTop:"20px"}}>Voltar </Button>
        </div>
      </div>
    </div>
  )
}


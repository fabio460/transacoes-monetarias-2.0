import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CashOut } from '../Api';
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { CircleNotifications } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

interface TypeProps{
    NameSelected:string,
    ValueSelected:string,
    setValueSelected:any
}
export default function PaymentBtnConfirm({NameSelected,ValueSelected,setValueSelected}:TypeProps) {
  const dispatch = useDispatch()
  const refreshLayout = useSelector((state:any)=>state.layoutUppdateInformations.update)
  const [open, setOpen] = React.useState(false);
  const [loadingButtonConfirm, setloadingButtonConfirm] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Depositar =async ()=>{
    let namberTrated = ValueSelected.replace(',','.')   
    setloadingButtonConfirm(true) 
    const response =await CashOut(namberTrated,NameSelected)
    dispatch({
      type:"updateLayoutInformations",
      payload:{update:!refreshLayout}
    })
    alert(response)
    setloadingButtonConfirm(false)
    setValueSelected('')
    handleClose()  
  }
  return (
    <div>
      {
        NameSelected === '' ? 
        <Button disabled variant='contained' sx={{width:'100%'}}>Depositar</Button>:
        ValueSelected === '' || ValueSelected === '0' ?
        <Button disabled variant='contained' sx={{width:'100%'}}>Depositar</Button>:
        <Button  variant='contained'  sx={{width:'100%'}} onClick={handleClickOpen}>Depositar</Button>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
           Enviando o valor de {ValueSelected} reais para {NameSelected}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Deseja realmente depositar este valor? Esta ação não pode ser revertida
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          { 
            loadingButtonConfirm?
            <Button  color='error' sx={{width:"100px"}}><CircularProgress color='error' sx={{height:'5px',width:"5px"}} size='25px'/></Button>
            :
            <Button color='error' onClick={Depositar}>Confirmar</Button>
          }
         
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

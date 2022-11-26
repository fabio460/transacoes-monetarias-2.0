

import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {es,pt} from 'date-fns/locale'
import {Stack, TextField} from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface setDateTipe{
  setDateSelected: any
}
export default function MyDatePicker({setDateSelected}:setDateTipe){
  const [value, setValue] = React.useState(new Date())
  const handleChange = (newValue:any) => {
    setValue(newValue)
    
  }
  setDateSelected(value)

  const inputStyle={ 
    m: 0,
    minWidth: 220,
    height:40,
   
    "@media (max-width:600px)":{
      minWidth:'95%',
      margin:"15px auto",
    }
   }
  return (
    <LocalizationProvider locale={pt} dateAdapter={AdapterDateFns} >
      <MobileDatePicker
        
        className='tableCalendario'
        label="Data da transação"
        inputFormat="dd-MM-yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} size='small' sx={inputStyle}/>}
      />
    </LocalizationProvider>

  )
}
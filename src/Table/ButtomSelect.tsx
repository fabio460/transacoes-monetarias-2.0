import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ButtonSelected({setSelected}:{setSelected:any}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  setSelected(age)
  const FormControlStyle={ 
    m: 0,
    minWidth: 220,
    height:40,
    "@media (max-width:600px)":{
      minWidth:'95%',
      margin:"auto"
    }
   }
  return (
    <FormControl sx={FormControlStyle}>
      <InputLabel htmlFor="grouped-native-select" size='small' sx={{background:'white',minWidth:60,paddingRight:0.5}}>Filtrar por ...</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        size='small'
        
      >
        <MenuItem value="">
          Tudo
        </MenuItem>
        <MenuItem value={'c'}>Entradas</MenuItem>
        <MenuItem value={'d'}>Saidas</MenuItem>
      </Select>
    </FormControl>
  );
}
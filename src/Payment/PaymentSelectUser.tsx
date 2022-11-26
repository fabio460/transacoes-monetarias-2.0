
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { UsersAllRequest } from '../Api';
import { getUserLocalStorage } from '../uteis';


function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function PaymentSelectUser({setNameSelected}:any) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly string[]>([]);
  const userAutenticated = getUserLocalStorage()
  const loading = open && options.length === 0;
  
  var usersList:string[] = [];

  const [inputValue, setInputValue] = React.useState('');
  setNameSelected(inputValue)
  async function getAllUsers() {
    const users = await UsersAllRequest()
    
     users.forEach((elem:{user:{username:string,id:string}},key:number)=>{
      if (elem.user.id !== userAutenticated.usuario) {
        usersList.push(elem.user.username)  
      }  
    })
  } 
 

  getAllUsers()
  React.useEffect(() => {
    
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...usersList]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);


  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const inputStyle={ 
    
   
    "@media (max-width:600px)":{
      minWidth:'95%',
      margin:"15px auto",
    }
   }
  return (
    <Autocomplete
      sx={{width:"100%"}}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="asynchronous-demo"
     
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
           sx={inputStyle}
          { ...params}
          label="Eviar para ..."
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top

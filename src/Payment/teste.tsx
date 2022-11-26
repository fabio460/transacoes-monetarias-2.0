
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { UserType } from '../Type';
import { UsersAllRequest } from '../Api';
import React,{useState,useEffect} from 'react'
interface Film {
  title: string;
  year: number;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function PaymentSelectUser() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly UserType[]>([]);
  const loading = open && options.length === 0;
  const [Users, setUsers] = useState<UserType[]>([])

  
  async function getAllUsers() {
    const users = await UsersAllRequest()
    setUsers(users)
  }  

  useEffect(()=>{
    getAllUsers()
  },[])

  
  const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
  ];
  

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...Users]);
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

  const [name,getName]=useState()
  console.log(name)
  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: "100%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.user.username === value.user.username}
      getOptionLabel={(option) => option.user.username}
      options={options}
      
      loading={loading}

      renderInput={(params) => (
        <TextField
          onClick={()=> console.log(Option)}
          onChange={e=>console.log('first')}
          {...params}
          label="Usuário a receber"
          InputProps={{
            
            ...params.InputProps,
            endAdornment: (
              
              <React.Fragment >
                 
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



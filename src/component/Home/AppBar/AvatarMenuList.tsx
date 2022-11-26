import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';


export default function AvatarMenuList({avatarName,sair}:{avatarName:string|undefined,sair:()=> void}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const navigate = useNavigate()
  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <IconButton onClick={handleClick} sx={{padding:'0px'}}>
        <Avatar sx={{bgcolor:'#1976d2'}}>
           {avatarName?.split('')[0]}
        </Avatar>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding  onClick={sair}>
                        <ListItemButton>
                           <ListItemText primary="Sair" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={()=>navigate('/cadastro')}>
                        <ListItemButton >
                        <ListItemText primary="Novo cadastro" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
      </Popover>
    </div>
  );
}


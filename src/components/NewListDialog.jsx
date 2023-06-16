import * as Icons from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  ToggleButton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';



export function NewListDialog( ) {
    const [dialogState, setdialogState] = useState(true)
    const [filteredIcons, setfilteredIcons] = useState(Object.entries(Icons));
    useEffect(() => {
      
    setfilteredIcons( Object.entries(Icons).filter(([name])=>!/Outlined$|TwoTone$|Rounded$|Sharp$/.test(name)))
     
    },[])
    
  
  let x = Object.entries(Icons).filter(([name])=>!/Outlined$|TwoTone$|Rounded$|Sharp$/.test(name));
  console.log(x)

  return (
    <Dialog open={dialogState} onClose={()=>{setdialogState(false)}}>
      <DialogTitle>Create New List</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new list</DialogContentText>
        <TextField
         
        
          autoFocus
          margin="dense"
          id="name"
          label="New List"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
         
          autoFocus
          margin="dense"
          id="name"
          label="Icon Search"
          type="text"
          fullWidth
          variant="standard"
        />
        <Card
          variant="outlined"
          sx={{ mt: 1, p: 1, display: 'flex', justifyContent: 'center' }}
        >
         {filteredIcons.map(([name,Icon])=>(
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                width: 40,
                mx: 1,
              }}
           key={name}
            >
             
              <Typography
                variant="caption"
                align="center"
                sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
              >
              <Icon/>
              </Typography>
            </Box>
))}
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{setdialogState(false)}}>Cancel</Button>
        <Button
         
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default NewListDialog;
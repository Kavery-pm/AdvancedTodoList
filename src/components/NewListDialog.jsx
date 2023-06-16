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
  
   console.log(Object.entries(Icons))

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
         
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                width: 40,
                mx: 1,
              }}
           
            >
             
              <Typography
                variant="caption"
                align="center"
                sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
              >
              
              </Typography>
            </Box>
        
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
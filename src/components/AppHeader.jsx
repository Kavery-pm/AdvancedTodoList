import { Add } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
const AppHeader = ()=>{
return (
    <AppBar position="fixed">
    <Toolbar>
    
      <Typography variant="h6" component="div" sx={{marginRight:150}}>
       My Lists
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
       
      >
        <Add />
      </IconButton>
    </Toolbar>
  </AppBar>
)
}
export default AppHeader;
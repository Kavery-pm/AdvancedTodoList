
import './App.css'
import { Box, CssBaseline } from '@mui/material';
import AppHeader from './components/AppHeader';
import NewListDialog from './components/NewListDialog';
function App() {


  return (
    <>
     <Box sx={{ display:'flex'}}>
      <CssBaseline/>
      <NewListDialog/>
     <AppHeader/>
      </Box> 
    </>
  )
}

export default App

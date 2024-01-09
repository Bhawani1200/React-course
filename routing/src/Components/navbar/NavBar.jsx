import { AppBar, Box, Container, InputBase, } from '@mui/material'
import Logo from '../layout/Logo'
import { Search, ShoppingCart } from '@mui/icons-material'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <AppBar  sx={{backgroundColor:'lightgrey'}}>
    <Container maxWidth='xl'>
      <Box display='flex' justifyContent='space-between' sx={{padding:'4px'}}>
           <Box display='flex' justifyContent='space-between' alignItems='center' width='70%'>
            <Logo/>
  <InputBase name='search' placeholder='search for product' endAdornment={<Search />} sx={{border: '1px solid black', borderRadius:'3px' ,padding:'4px',width:'70%'}}/>
          </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' gap='6px'> 
            <Link to="/cart"><Button variant="text"><ShoppingCart/>CART</Button></Link>
            <Link to="/landing"><Button variant="text">HOME</Button></Link>
             <Link to="/about"><Button variant="text">ABOUT</Button></Link>
            <Link to="/contact"><Button variant="text">CONTACT</Button></Link>
            <Link to ="/login"><Button variant="contained">ACCOUNT</Button>
            </Link>
           </Box>
           </Box> 
    </Container>
    </AppBar>
  </>
  )
}

export default NavBar

import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { Box } from "@mui/material";
import Footer from '../footer'

const MinimalLayout = () => {
  return (
   <>  
   <Box>
       <NavBar/>
   </Box>
<Box>
<Outlet/>  
</Box>

<Footer/>


</> 
  )
}

export default MinimalLayout;

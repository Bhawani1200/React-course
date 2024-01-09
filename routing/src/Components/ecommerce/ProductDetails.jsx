
import {  Paper , CardMedia, Typography, Grid } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import products from "../../constant/ProductConstant";
const ProductDetails = () => {
  const { id }=useParams();
  const ProductDetails =products.filter((e)=>e.id == id)
  return (
    <>

        <Paper sx={{height:'80vh',margin:'40px'}} >
          <Grid container>
          <CardMedia
          sx={{height: 200, width: 200}}
       image={ProductDetails[0].img}
        component={Link}
        to="/productdetails"
        title="product-image"
        
        
      />
        </Grid>
       <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {ProductDetails[0].rating}
        </Typography>
        <Typography variant="body2">
     {ProductDetails[0].description}
    </Typography>
        <Typography variant="body2">
            {ProductDetails[0].offerPrice}
            
    </Typography>
        
        </Paper>
    </>
  )
}

export default ProductDetails

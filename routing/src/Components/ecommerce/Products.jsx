import products from "../../constant/ProductConstant"
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <>
            <Grid container lg={12} xl={10}  margin={5} gap={2}>
                {products.map((e, i) => {
                    return (
            <Box key={e?.id} index={i} >
            <Card sx={{ border: '1px solid grey', width: "250px" ,height:"350px",}}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {e.name}
    </Typography>
    <CardMedia
        sx={{ height: 140 }}
        image={e.img}
        title="product image"
        component={Link}
        to={`/productdetails/${e.id}`}
        
      />
    
<Typography variant="h5" component="div">
    </Typography>
   
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {e.rating}
        </Typography>
        <Typography variant="body2">
     {e.description.length <= 40 ? e.description : e.description.substring(0, 40) + "..."}
    </Typography>
        <Typography variant="body2">
            {e.offerPrice}
            
    </Typography>

        </CardContent>
         <CardActions>
    <Button size="small" variant='contained'>Add to Cart</Button>
     </CardActions>
           
            </Card>
        </Box>)
                })}
            </Grid >
          
        </>
    )
}

export default Products
import { Box, Typography, Grid, IconButton, Card } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { products } from '../pages/cartlist'
import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

export default function ItemDetails(props) {
    const idDetails = useParams();
    const itemDetails = products.find(eachItem => eachItem.id === Number(idDetails.id)) || {};
    console.log(idDetails, products, itemDetails, 'hell')
  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h5" fontWeight="bold">Item Details</Typography>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>

        <Grid container spacing={3}>
          <Card style={{ padding: '24px' }}>
            <h3 style={{ margin: '0' }}>{itemDetails?.title}</h3>
            <img src={itemDetails?.thumbnail} loading="lazy" width='200' height='200' alt="Item-picture" />
            <p><b>Price: {itemDetails?.price}</b></p>
            <p><b>Total: {itemDetails.total}</b></p>
          </Card>
        </Grid>
      </Box>
    </Box>
  )
}

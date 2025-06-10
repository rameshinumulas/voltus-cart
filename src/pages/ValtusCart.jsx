import { Box, Typography, Grid, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { products } from './cartlist'
import { useNavigate } from "react-router-dom";


const VoltusCart = () => {
    console.log(products, 'list');
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h5" fontWeight="bold">Voltus Cart</Typography>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>

        <Grid container spacing={3}>
          {products.map((item, index) => (
            <Grid item xs={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}
              onClick={() =>  navigate(`/itemDetails/${item.id}`)}
            >
              <IconButton color="inherit" size="large">
                <img src={item.thumbnail} loading="lazy" width='200' height='200' alt="Product" />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default VoltusCart;

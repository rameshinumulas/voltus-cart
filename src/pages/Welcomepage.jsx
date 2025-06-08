import { Container, Typography, Box, Button, Grid } from "@mui/material";
// import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   IconButton,
//   InputAdornment,
//   Link,
//   Stack,
//   TextField,
// } from "@mui/material";
import Logo from "../components/Logo";
import { motion } from "framer-motion";


const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
  padding: '24px'
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
  boxShadow: "0px 1px 2px 2px #e3e2eb"
});


const Welcomepage = ({ setAuth, isGoogleForm }) => {
  const navigate = useNavigate();
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div}>
            <Typography variant="h5" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
              <p>WEL-COME </p>
              <p>TO</p>
              <p>VALTUS CART</p>
              <Logo />
            </Typography>
          </HeadingStyle>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <Grid item size={2}>
                <Button
                  fullWidth
                  variant="text"
                  type="submit"
                  size="small"
                  onClick={() => navigate('/signup')}
                >
                  Skip
                </Button>
              </Grid>
              <Grid item size={2}
                sx={isGoogleForm ? { my: 2 } : {}}
              >
                <Button
                  fullWidth
                  size="small"
                  type="submit"
                  variant="text"
                >
                  Next
                </Button>
              </Grid>
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Welcomepage;
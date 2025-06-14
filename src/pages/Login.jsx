import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import GoogleIcon from '@mui/icons-material/Google';
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { motion } from "framer-motion";


const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  boxShadow: "0px 1px 5px 5px #f5f5f5"
});

const HeadingStyle = styled(Box)({
    textAlign: 'center',
    paddingBottom: 10,
    height: '200px'
});

const ContentStyle = styled("div")(({ isGoogleForm }) => ({
  maxWidth: 480,
  padding: 25,
  paddingTop: isGoogleForm ? 10 : 25, 
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
  boxShadow: "0px 1px 2px 2px #e3e2eb"
}));


const Login = ({ setAuth, isGoogleForm }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (isGoogleForm) {
      navigate('/');
    } else {
      navigate('/googleLogin');
    }
  };
  const styObj = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} style={isGoogleForm ? styObj : {}}>
            {isGoogleForm ? (
              <Typography
                component={motion.p}
                variant="body2"
                align="center"
                sx={{ mt: 3 }}
                style={{ cursor: 'pointer', marginTop: '0px', fontWeight: 'bold' }}
              >
                Login with google{" "}
                <p style={{ margin: '0px' }}><GoogleIcon /></p>
              </Typography>
            ) : (
              <>
                <Logo />
                <Typography variant="h5" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Valtus Cart
                </Typography>
              </>
            )}
          </HeadingStyle>

          <LoginForm setAuth={setAuth} isGoogleForm={isGoogleForm} />
          
            <Typography
              component={motion.div}
              variant="body2"
              align="center"
              sx={{ mt: 3 }}
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={handleNavigate}
            >
              {!isGoogleForm ? (
              <>
                Login with google{" "}
                <p style={{ margin: '0px' }}><GoogleIcon /></p>
              </>
              ) : (
                <>
                  Login with email
                </>
              )}
            
                </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
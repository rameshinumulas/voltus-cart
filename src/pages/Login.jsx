import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
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
  textAlign: "center",
  paddingBottom: '10px'
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
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div}>
            {isGoogleForm ? (
              <Typography
                component={motion.p}
                variant="body2"
                align="center"
                sx={{ mt: 3 }}
                style={{ cursor: 'pointer', marginTop: '0px' }}
              >
                Login with google{" "}
                <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black', margin: '0px' }}>G</p>
              </Typography>
            ) : (
              <>
                <Logo />
                <Typography variant="h4" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Valtus Cart
                </Typography>
              </>
            )}
          </HeadingStyle>

          <LoginForm setAuth={setAuth} isGoogleForm={isGoogleForm} />
          
            <Typography
              component={motion.p}
              variant="body2"
              align="center"
              sx={{ mt: 3 }}
              style={{ cursor: 'pointer' }}
              onClick={handleNavigate}
            >
              {!isGoogleForm ? (
              <>
                Login with google{" "}
                <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black', margin: '0px' }}>G</p>
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
import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ForgetPasswordForm from "../components/ForgetPasswordForm";


const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  boxShadow: "0px 1px 5px 5px #f5f5f5"
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
  paddingBottom: '25px',
  height: 130,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
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


const ForgotPassword = ({ setAuth }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div}>
            <Typography variant="h5" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
              Forget Password
            </Typography>
          </HeadingStyle>

          <ForgetPasswordForm setAuth={setAuth} />

          <Typography
            component={motion.p}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
            style={{ cursor: 'pointer' }}
            onClick={handleNavigate}
          >
            Go to Login
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default ForgotPassword;
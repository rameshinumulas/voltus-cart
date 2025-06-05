import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
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
});


const Login = ({ setAuth }) => {
    return (
        <RootStyle>
            <Container maxWidth="sm">
                <ContentStyle>
                    <HeadingStyle component={motion.div}>
                        <Logo />
                        <Typography variant="h4" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Valtus Cart
                        </Typography>
                    </HeadingStyle>

                    <LoginForm setAuth={setAuth} />

                    <Typography
                        component={motion.p}
                        variant="body2"
                        align="center"
                        sx={{ mt: 3 }}
                        style={{ cursor: 'pointer' }}
                    >
                    Login with google{" "}
                    <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'red', margin: '0px' }}>G</p>
                    </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
};

export default Login;
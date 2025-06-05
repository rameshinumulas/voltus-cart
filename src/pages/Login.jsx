import { Container, Typography, Link, Box, Divider, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
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
                        <Typography sx={{ color: "text.secondary", mb: 5 }}>
                            Valtus Cart
                        </Typography>
                    </HeadingStyle>

                    <LoginForm setAuth={setAuth} />

                    <Typography
                        component={motion.p}
                        variant="body2"
                        align="center"
                        sx={{ mt: 3 }}
                    >
                        Login with google?{" "}
                        <IconButton
                        >
                            <span style={{ fontWeight: 'bold', fontSize: '24px' }}>G</span>
                        </IconButton>
                    </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
};

export default Login;
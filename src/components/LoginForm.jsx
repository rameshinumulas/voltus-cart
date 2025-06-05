import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import Grid from '@mui/material/Grid';
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.6,
        ease: easing,
        delay: 0.16,
    },
};

const LoginForm = ({ setAuth }) => {

    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = {};

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: true,
        },
        validationSchema: LoginSchema,
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
        formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Box
                    component={motion.div}
                    animate={{
                        transition: {
                            staggerChildren: 0.55,
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 40 }}
                        animate={animate}
                    >
                        <TextField
                            fullWidth
                            autoComplete="username"
                            type="email"
                            label="Email Address"
                            {...getFieldProps("email")}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">
                                        <IconButton
                                            onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                            <Icon icon="eva:email-fill" />
                                        </IconButton>
                                    </InputAdornment>,
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            autoComplete="current-password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            {...getFieldProps("password")}
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">
                                        <IconButton
                                            onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                            {showPassword ? (
                                                <Icon icon="eva:eye-fill" />
                                            ) : (
                                                <Icon icon="eva:eye-off-fill" />
                                            )}
                                        </IconButton>
                                    </InputAdornment>,
                                },
                            }}
                        />
                    </Box>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={animate}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ my: 2 }}
                        >

                            <Link
                                variant="subtitle2"
                                to="#"
                                underline="hover"
                            >
                                Forgot password?
                            </Link>
                        </Stack>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item size={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                        size="large"
                                    >
                                        SignUp
                                    </Button>
                                </Grid>
                                <Grid item size={6}>
                                    <Button
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        loading={isSubmitting}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Form>
        </FormikProvider>
    );
};

export default LoginForm;
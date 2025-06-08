import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
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
import { useNavigate } from "react-router-dom";
import SuccessMessage from "../helpers/SuccessMessage";
import { getInputAdornment } from "../helpers/getInputAdornment";

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

const LoginForm = ({ setAuth, isGoogleForm }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, handleMessage] = useState(false);

 const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      handleMessage(prv => !prv)
      setTimeout(() => {
        navigate('/welcomepage');
      }, 2000);
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      {successMessage && <SuccessMessage successMsg={'Login Successfully'} />}
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
              placeholder="EMAIL ID"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              slotProps={getInputAdornment("eva:email-fill")}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              slotProps={getInputAdornment(showPassword ? "eva:eye-fill": "eva:eye-off-fill", false, setShowPassword, showPassword)}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            {!isGoogleForm && (
              <>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >

                  <Link
                    variant="subtitle2"
                    underline="hover"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/forgotPassword')}
                  >
                    Forgot password?
                  </Link>
                </Stack>
              </>
            )}
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {!isGoogleForm && (
                  <Grid item size={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    size="large"
                    onClick={() => navigate('/signup')}
                  >
                    SignUp
                  </Button>
                </Grid>
                )}
                <Grid item size={isGoogleForm ? 12 : 6}
                  sx={ isGoogleForm ? { my: 2 } : {}}
                >
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
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import {
  Stack,
  Box,
  TextField
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";
import SuccessMessage from "../helpers/SuccessMessage";
import { getInputAdornment } from "../helpers/getInputAdornment";

/////////////////////////////////////////////////////////////
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

const SignupForm = ({ setAuth }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, handleMessage] = useState(false);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name required"),
    lastName: Yup.string()
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password')], "Passwords must match")
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ''
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      handleMessage(prv => !prv)
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      {successMessage && <SuccessMessage successMsg={'Signup successful — you can now log in.'} />}
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            // direction={{ xs: "column", sm: "row" }}
            spacing={3}
          >
            <TextField
              fullWidth
              placeholder="FIRST NAME"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              slotProps={getInputAdornment(false, <BadgeIcon/>)}
            />

            <TextField
              fullWidth
              placeholder="LAST NAME"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              slotProps={getInputAdornment(false, <BadgeIcon/>)}
            />
          </Stack>

          <Stack
            spacing={3}
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
              slotProps={getInputAdornment(false, <EmailIcon/>)}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
              {...getFieldProps("password")}
              slotProps={getInputAdornment(showPassword ? "eva:eye-fill": "eva:eye-off-fill", false, setShowPassword, showPassword)}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
            <TextField
              fullWidth
              autoComplete="current-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="CONFIRM PASSWORD"
              {...getFieldProps("confirmPassword")}
              slotProps={getInputAdornment(showConfirmPassword ? "eva:eye-fill": "eva:eye-off-fill", false, setShowConfirmPassword, showConfirmPassword)}
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Sign up
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
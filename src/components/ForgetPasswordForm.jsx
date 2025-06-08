import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
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

const ForgetPasswordForm = ({ setAuth }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, handleMessage] = useState(false);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    oldPassword: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password')], "Passwords must match")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      oldPassword: "",
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
      {successMessage && <SuccessMessage successMsg={'Your password has been reset. Please log in'} />}
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
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
              slotProps={getInputAdornment(false, <EmailIcon />)}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showOldPassword ? "text" : "password"}
              placeholder="OLD PASSWORD"
              {...getFieldProps("oldPassword")}
              slotProps={getInputAdornment(showOldPassword ? "eva:eye-fill": "eva:eye-off-fill", false, setShowOldPassword, showOldPassword)}
              error={Boolean(touched.oldPassword && errors.oldPassword)}
              helperText={touched.oldPassword && errors.oldPassword}
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
              update password
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default ForgetPasswordForm;
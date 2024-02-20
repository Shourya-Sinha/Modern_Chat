import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Get Started With Private Chat</Typography>
      <Stack direction={"row"} spacing={0.5}>
        <Typography variant="body2">Already have an Account?</Typography>
        <Link component={RouterLink} to={"/auth/login"} variant="subtitle2">
          Sign In
        </Link>
      </Stack>
      {/* Register Form */}
<RegisterForm />
      <Typography
        component={"div"}
        sx={{
          color: "text.secondary",
          mt: 3,
          typography: "caption",
          textAlign: "center",
        }}
      >
        {"By signining up, I agree to "}
        <Link underline="always" color={"text.primary"}>
          Terms of Service
        </Link>
        {" and "}
        <Link underline="always" color={"text.primary"}>
          Privacy Policy
        </Link>
        .
      </Typography>
      <AuthSocial />
    </Stack>
  );
};

export default Register;

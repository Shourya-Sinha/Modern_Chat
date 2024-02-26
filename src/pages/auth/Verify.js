import { Stack, Typography } from "@mui/material";
import React from "react";
import VerifyForm from "../../sections/auth/VerifyForm";

const Verify = () => {
  return (
    <>
 <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Please Verify Otp</Typography>
      <Stack direction={"row"} spacing={0.5}>
        <Typography variant="body2">Enter Otp We Have Just Sent to Your Email</Typography>
      </Stack>
    </Stack>
    {/* // Verify Form */}
    <VerifyForm />
    </>
   

  );
};

export default Verify;

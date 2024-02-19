import React, { lazy } from "react";
import Chats from "./Chats";
import { Stack, Box, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

//Dynamic Loading
//const Cat = lazy(() => import("../../components/Cat"))
const GeneralApp = () => {
const theme = useTheme();
const {sidebar} = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* <Suspense fallback="Loading...">
        <Cat />
      </Suspense> */}
      <Chats />
      <Box
        sx={{

          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" :  "calc(100vw - 420px)",
          backgroundColor:theme.palette.mode==="light"? "#F0F4FA" : theme.palette.background.paper,
        }}
      >
        {/* Conversastion */}
        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open &&  <Contact />}
     
    </Stack>
  );
};

export default GeneralApp;

import { Stack, Box } from "@mui/material";

import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../../components/scrollbar/ScrollBar.css"
const Conversation = () => {
  
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Header />
      {/* Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1 ,height:"100%",overflowY:"scroll"}}
      className="custom-scrollbar-container"
      >
        <Message menu={true} />
      </Box>

      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;

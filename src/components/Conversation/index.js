import { Stack, Box } from "@mui/material";

import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../../components/scrollbar/ScrollBar.css"
const Conversation = () => {
  const [hasFocus, setHasFocus] = useState(false);
  let timeoutId;

  const handleFocus = () => {
    setHasFocus(true);
    timeoutId = setTimeout(() => {
      document.querySelector('.custom-scrollbar-container').style.overflowY = 'scroll';
    }, 500);
  };

  const handleBlur = () => {
    setHasFocus(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Header />
      {/* Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1 ,height:"100%",overflowY:"scroll"}}
      className={`custom-scrollbar-container ${hasFocus ? 'focused' : ''}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
      >
        <Message />
      </Box>

      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;

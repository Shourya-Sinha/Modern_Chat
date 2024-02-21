import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MemberList } from "../../data";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
    const theme = useTheme();
  return (
   
   
<Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
      onClose={handleClose}

    >
      {/*  */}
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>

      <DialogContent>
        <Stack spacing={3} direction={"row"} alignItems={"center"} mb={2}>
          <Stack sx={{ width: "80%", }}>
            <Search sx={{backgroundColor:theme.palette.mode==="light" ? "#f8faff" : theme.palette.background.default}}>
              <SearchIconWrapper >
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..."  />
            </Search>
          </Stack>
          <IconButton onClick={handleClose}>
          <XCircle size={21} />
          </IconButton>

        </Stack>

        {/* Call list */}
        {MemberList.map((el) => (
          <CallElement {...el} />
        ))}
      </DialogContent>
    </Dialog>

    
  );
};

export default StartCall;

import { Divider, Stack,Box ,Typography, useTheme, Link, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import { MagnifyingGlass, Plus } from 'phosphor-react'

import "../../components/scrollbar/ScrollBar.css";
import { CallLogElement } from '../../components/CallElement';
import { CallLogs } from '../../data';
import StartCall from '../../sections/main/StartCall';

const Call = () => {
    const theme = useTheme();

    const [openDialog,setOpenDialog] = useState(false);
    const handleCloseDialog=()=>{
        setOpenDialog(false)
    }
  return (
    <>
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Left */}
      <Box
        sx={{
          height: "100vh",
          backgroundColor: (theme) =>
          theme.palette.mode ==="light" ? "#f8faff" : theme.palette.background.default,
          width: 320,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack>
            <Typography variant="h5">Call Logs</Typography>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="subtitle2" component={Link}>
              Start Conversation
            </Typography>
            <IconButton onClick={()=>{
              setOpenDialog(true);
            }}>
              <Plus style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            spacing={2}
            direction={"column"}
            sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
            className="custom-scrollbar-container"
          >
            <Stack spacing={2.5}>
              {/*  */}
              {/* Call Logs */}
{CallLogs.map((el) => <CallLogElement {...el} />)}


            </Stack>
            <Stack spacing={2.5}>
             
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {/* Right */}
      {/* //TODO => REUSE CONVERSATION COMPONENT */}
    </Stack>
   {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
   
  </>
  )
}

export default Call
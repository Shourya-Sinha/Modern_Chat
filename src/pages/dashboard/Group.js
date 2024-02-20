import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import "../../components/scrollbar/ScrollBar.css";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
const Group = () => {
  const theme = useTheme();
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
              <Typography variant="h5">Groups</Typography>
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
                Create New Group
              </Typography>
              <IconButton>
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
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
                 {/*  */}
                 <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Groups
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
              <Stack spacing={2.5}>
               
              </Stack>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
        {/* //TODO => REUSE CONVERSATION COMPONENT */}
      </Stack>
    </>
  );
};

export default Group;

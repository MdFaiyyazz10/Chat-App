import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { Fragment, lazy, useRef } from "react";
import { grayColor, orange } from "../components/constant/color";
import { sampleMessages } from "../components/constant/sampleData";
import AppLayout from "../components/layouts/AppLayout";
import MessageComponent from "../components/shared/MessageComponent";
import { InputBox } from "../components/styles/StyledComponent";


const FileMenu = lazy(() => import("../dialogs/FileMenu"));

const user = {
  _id: "asdfghj",
  name: "Mohammad Faiyyazz Sheikh"
}

const Chat = () => {
  const containerRef = useRef(null);
  
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Messages Render */}


      {
        sampleMessages.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))
      }









      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>

          <IconButton sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg",
          }} >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here..." />

          <IconButton type="submit" sx={{
            rotate: "-30deg",
            backgroundColor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            transition: "all ease 0.3s",

            "&:hover":{
              backgroundColor: "error.dark",
              rotate: "0deg",
            }
          }} >
            <SendIcon />
          </IconButton>

        </Stack>
      </form>

      {/* File Menu */}
      <FileMenu  />
    </Fragment>
  );
};

export default AppLayout()(Chat);

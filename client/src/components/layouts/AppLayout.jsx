import React, { lazy } from "react";
import Header from "./Header";
import Title from '../shared/Title';
import { Grid } from "@mui/material";
import { sampleChats } from "../constant/sampleData";
import { useParams } from "react-router-dom";



const Profile = lazy(() => import( "../specific/Profile"));
const ChatList = lazy(() => import( "../specific/ChatList"));

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    const params = useParams()
    const chatId = params.chatId;


    const handleDeleteChat = (e,_id,groupChat) => {
      e.preventDefault()
      console.log("Chat Deleted" , _id , groupChat)
    }


    return ( <>
    <Title title={"Chat App"} />
        <Header />


      <Grid container height={"calc(100vh - 4rem)"} >

      <Grid item sm={4} md={3} height={"100%"} sx={{display: {xs: 'none' , sm: "block"}}}  >
      <ChatList chats={sampleChats} chatId={chatId} newMessagesAlert={[{
        chatId: chatId,
        count: 4,
      }]} onlineUsers={["1" , "2"]} handleDeleteChat={handleDeleteChat} />
      </Grid>

      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}   >
         {/* //BG color */}
      <WrappedComponent {...props} />
      </Grid>


      <Grid item md={4} lg={3} height={"100%"} sx={{display: {xs: 'none' , md: "block"} , padding: "2rem" , bgcolor: "rgba(0,0,0,0.85)"}}  >
      <Profile />
      </Grid>
      </Grid>



    </>
    );
  };
};

export default AppLayout;

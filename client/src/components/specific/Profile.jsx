import { CalendarMonth as CalendarIcon, AlternateEmail as UserNameIcon, Face as FaceIcon } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard Icon={<FaceIcon />} heading={"Bio"} text={"This is Me Faiyyazz "} />
      <ProfileCard Icon={<UserNameIcon />} heading={"Username"} text={"__imfaiyyazzz___ "} />
      <ProfileCard Icon={<FaceIcon />} heading={"Name"} text={"Mohammad Faiyyazz Sheikh "} />
      <ProfileCard Icon={<CalendarIcon />} heading={"Joined"} text={moment('2001-10-23T00:00:00.000Z').fromNow()} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"grey"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

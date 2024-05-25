import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { lazy, useState } from "react";
import { sampleUsers } from ".././constant/sampleData";
import { useInputValidation } from "6pp";

const UserItem = lazy(() => import ('../shared/UserItem'))

const NewGroup = () => {

  const groupName = useInputValidation("")
  const [members , setMembers] = useState([]);
  const [selectedmembers , setSelectedMembers] = useState([]);


  const selectMemberHandler = (id) => {
    // setMembers(prev => prev.map(user._id === id ? {...user , isAdded: !user.isAdded} : user ))
    setSelectedMembers(prev => prev.includes(id) ? prev.filter((currentElement) => currentElement !==id ) : [...prev , id])
  };
  // console.log(selectedmembers)

  const submitHandler = () => {}

  const closeHandler = () => {

  }


  return (
    <Dialog open onClose={closeHandler} >
      <Stack p={{ xs: "1rem", sm: "2rem" }}   direction={"column"} spacing={"2rem"} width={"30rem"}>
        <DialogTitle alignItems={"center"} variant="h4">New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedmembers.includes(i._id)} />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"} >
          <Button variant="outlined" color="error" size="large" >Cancel</Button>
          <Button variant="contained" size="large" onClick={submitHandler} >Accept</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;

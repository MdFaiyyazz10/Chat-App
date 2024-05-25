import { Button, Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import React, { lazy, useState } from 'react'
import {sampleUsers} from '../components/constant/sampleData'

const UserItem = lazy(() => import ('../components/shared/UserItem'))

const AddMember = ({addMember , isLoadingAddMember , chatId}) => {

  const [members , setMembers] = useState(sampleUsers);
  const [selectedmembers , setSelectedMembers] = useState([]);


  const selectMemberHandler = (id) => {
    // setMembers(prev => prev.map(user._id === id ? {...user , isAdded: !user.isAdded} : user ))
    setSelectedMembers(prev => prev.includes(id) ? prev.filter((currentElement) => currentElement !==id ) : [...prev , id])
  };


  // const addFriendHandler = (id) => {console.log(id)}
  const addMemberSubmitHandler = () => {
    closeHandler()
  }
  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  }
  return <Dialog open onClose={closeHandler} >
    <Stack spacing={"2rem"} width={"20rem"} padding={"2rem"} >
      <DialogTitle textAlign={"center"} >Add Member</DialogTitle>

      <Stack spacing={"1rem"} >
      {
        members.length > 0 ? members.map((user) => (
          <UserItem user={user} key={user._id} isAdded={selectedmembers.includes(user._id)} handler={selectMemberHandler} />
        )) : <Typography textAlign={"center"}>No Friends</Typography>
      }
      </Stack>

      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"} >
      <Button color={"error"} onClick={closeHandler}>Cancel</Button>
      <Button variant='contained' disabled={isLoadingAddMember}  onClick={addMemberSubmitHandler} >Submit Changes</Button>
      </Stack>
    </Stack>
  </Dialog>
}

export default AddMember

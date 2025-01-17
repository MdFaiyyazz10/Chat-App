import { Dialog, DialogTitle, InputAdornment, List,  Stack, TextField } from '@mui/material'
import React, { lazy, useState } from 'react'
import {useInputValidation} from '6pp';
import { Search as SearchIcon } from '@mui/icons-material';


const UserItem = lazy(() => import('../shared/UserItem'));
import { sampleUsers } from '../constant/sampleData';


const Search = () => {
  const search = useInputValidation("")

  let isLoadingSendFriendRequest = false
  const addFriendHandler = (id) => {console.log(id)}

  const [users , setUsers] = useState(sampleUsers)

  return (
    <Dialog open >
      <Stack padding={"2rem"} direction={"column"}  width={"25rem"} >

        <DialogTitle alignItems={"center"}  >
        Find People
        </DialogTitle>

        <TextField label = "" value={search.value} onChange={search.changeHandler} variant='outlined' size='small' InputProps={{
          startAdornment: (
            <InputAdornment position='start' >
            <SearchIcon />
            </InputAdornment>
          )
        }} />

      <List>
        {
          users.map((i) => (
            <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
          ))
        }
      </List>

      </Stack>
    </Dialog>
  )
}

export default Search

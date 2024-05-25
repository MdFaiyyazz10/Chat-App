import { AppBar, Box, IconButton, Toolbar, Typography , Tooltip, Backdrop  } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { orange } from '../constant/color'
import { Menu as MenuIcon , Search as SearchIcon , Add as AddIcon , Group as GroupIcon , Logout as LogoutIcon , Notifications as NotificationIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SearchDialog = lazy(() => import('../specific/Search'))
const NotificationDialog = lazy(() => import('../specific/Notifications'))
const NewGroupDialog = lazy(() => import('../specific/NewGroup'))

const Header = () => {

  // const [mobile , setMobile] = useState(false)
  const [search , setSearch] = useState(false)
  const [newGroup , setNewGroup] = useState(false)
  const [notification , setNotification] = useState(false)

  const navigate = useNavigate()

  const handleMobile = () => {
    setMobile((prev) => !prev)
  }
  const openSearchDialog = () => {
    setSearch((prev) => !prev)
  }
  const openNewGroup = () => {
    setNewGroup((prev) => !prev)
  }
  const navigateToGroup = () => navigate('/groups')
  const logoutHandler = () => {}

  const openNotification = () => {
    setNotification((prev) => !prev)
  }
  return (
    <>
      <Box sx={{flexGrow: 1}} height={"4rem"}>
      <AppBar position='static' sx={{bgcolor: orange}} >
        <Toolbar >
          <Typography variant='h6' sx={{display: {xs: "none" , sm: "block"}}} >
            Chat App
          </Typography>

        <Box sx={{display: {xs: "block" , sm: "none"}}} >
          <IconButton color='inherit' onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{
          flexGrow: 1,
        }} />
        <Box>

          <IconBtn title={"Search Bar"} icon={<SearchIcon />} onClick={openSearchDialog} />

          <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />

          <IconBtn title={"Manage Group"} icon={<GroupIcon />} onClick={navigateToGroup} />

          <IconBtn title={"Notifications"} icon={<NotificationIcon />} onClick={openNotification} />

          <IconBtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler} />


        
        </Box>
        </Toolbar>
      </AppBar>
      </Box>

      {search && <Suspense fallback={<Backdrop open />}> <SearchDialog /> </Suspense>}

      {notification && <Suspense fallback={<Backdrop open />}> <NotificationDialog /> </Suspense>}

      {newGroup && <Suspense fallback={<Backdrop open />}> <NewGroupDialog /> </Suspense>}
      
    </>
  )
}


const IconBtn = ({title , icon , onClick}) => {
  return (
    <Tooltip title={title}>    

        <IconButton color='inherit' size='large' onClick={onClick} >
          {icon}
        </IconButton>

        </Tooltip>
  )
}

export default Header

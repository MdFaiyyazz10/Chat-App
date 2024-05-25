import React from 'react'
import AppLayout from '../components/layouts/AppLayout'
import { Box, Typography } from '@mui/material'
import { grayColor } from '../components/constant/color'

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"} >

    <Typography padding={"2rem"} variant='h5' textAlign={"center"} >Select a friend to chat</Typography>
    </Box>
  )
}

export default AppLayout()(Home)


// App LAyout is tarah rahega
// export default (props) => {
//   return (
//     <div>
//       <div>Navbar</div>
//       <Home {...props} />
//       <div>Footer</div>
//     </div>
//   )
// }

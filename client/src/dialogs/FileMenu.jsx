import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorE1}) => {
  return (
    <Menu  anchorEl={anchorE1} open={false} >
      <div style={{
        width: "10rem",
      }} >

      </div>
    </Menu>
  )
}

export default FileMenu

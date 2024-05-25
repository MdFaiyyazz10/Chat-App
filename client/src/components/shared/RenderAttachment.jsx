import React from 'react'
import { transformImage } from '../../lib/features';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';

const RenderAttachment = ({file , url}) => {

    switch (file) {
        case "video":
            return <video src={url} preload='none' width={"200px"} controls />
            
        case "audio":
            return <audio src={url} preload='none' controls />
            
        case "image":
            return <img src={transformImage(url , 200)} alt='Attachment' width={"200px"} height={"200px"} style={{objectFit: "contain"}}  />
            
    
        default:
            return <FileOpenIcon />;
    }
  return (
    <div>
      
    </div>
  )
}

export default RenderAttachment
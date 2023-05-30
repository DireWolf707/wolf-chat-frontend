import React from "react"
import { Stack, IconButton } from "@mui/material"
import SendButton from "../button/SendButton"
import ImageIcon from "@mui/icons-material/Image"
import AttachFileIcon from "@mui/icons-material/AttachFile"

const ChatSectionFooter = () => {
  return (
    <Stack flexDirection="row" gap={1}>
      <SendButton />

      <IconButton>
        <ImageIcon />
      </IconButton>

      <IconButton>
        <AttachFileIcon />
      </IconButton>
    </Stack>
  )
}

export default ChatSectionFooter

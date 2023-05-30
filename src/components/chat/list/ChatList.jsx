import { useEffect, useRef } from "react"
import { Box, Stack, Typography } from "@mui/material"

const myId = 0
const chats = [{ id: 0 }, { id: 1 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 1 }, { id: 0 }]

const ChatList = () => {
  const lastMessageRef = useRef(null)

  useEffect(() => {
    lastMessageRef.current.scrollIntoView()
  }, [])

  return (
    <Stack flexGrow={1} gap={1} overflow="auto" borderRadius="6px" bgcolor="rgba(255,255,255,0.15)" p="8px">
      {[...chats, ...chats].map((chat, idx) => (
        <Typography
          key={idx}
          alignSelf={chat.id === myId ? "end" : "start"}
          bgcolor="rgba(0,0,0)"
          borderRadius="12px"
          p="10px"
          sx={{
            maxWidth: {
              xs: "250px",
              md: "420px",
            },
          }}
        >
          heheheheheheehheh ehhehehehehhehehehehhehehehehehhe
        </Typography>
      ))}
      
      <Box ref={lastMessageRef} />
    </Stack>
  )
}

export default ChatList

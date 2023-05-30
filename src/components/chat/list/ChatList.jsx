import { useEffect, useRef } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { userApi, chatApi } from "../../../store"
import UserAvatar from "../../layout/UserAvatar"
import requestHandler from "../../../utils/requestHandler"

const ChatList = ({ chatRoom }) => {
  const lastMessageRef = useRef(null)
  const {
    data: { data: currentUser },
  } = userApi.useFetchProfileQuery()

  useEffect(() => {
    lastMessageRef.current.scrollIntoView()
  }, [])

  return (
    <Stack flexGrow={1} gap={1} overflow="auto" borderRadius="6px" bgcolor="rgba(255,255,255,0.15)" p="8px">
      {chatRoom?.chats ? (
        chatRoom.chats.map((chat) => (
          <Typography
            key={chat.id}
            alignSelf={chat.id === currentUser.id ? "end" : "start"}
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
        ))
      ) : (
        <></>
      )}

      <Box ref={lastMessageRef} />
    </Stack>
  )
}

export default ChatList

import { useState, useEffect } from "react"
import { Stack, Typography } from "@mui/material"
import { chatApi } from "../../../store"
import UserAvatar from "../../layout/UserAvatar"
import requestHandler from "../../../utils/requestHandler"
import ChatButton from "../button/ChatButton"

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useState([])
  const [getChatRooms] = chatApi.useLazyGetChatRoomsQuery()

  useEffect(() => {
    requestHandler(getChatRooms().unwrap(), "fetching chat rooms", "chat rooms fetched").then(({ data }) => setChatRooms(data))
  }, [])

  return (
    <Stack gap={0.3} overflow="auto" position="relative">
      {chatRooms.map((chatRoom) => (
        <Stack key={chatRoom.id} flexDirection="row" gap={1.5} bgcolor="rgba(255,255,255,0.15)" p="10px">
          {chatRoom.isGroup && <UserAvatar user={{ username: chatRoom.name }} />}
          {!chatRoom.isGroup && <UserAvatar user={chatRoom.members[0]} />}

          <Stack flexGrow={1}>
            <Stack flexGrow={1} flexDirection="row" justifyContent="space-between" alignItems="center">
              <Typography fontFamily="Righteous" fontSize="17px" noWrap={true}>
                {chatRoom.isGroup && chatRoom.name}
                {!chatRoom.isGroup && chatRoom.members[0].username}
              </Typography>

              <ChatButton chatRoomId={chatRoom.id} />
            </Stack>

            <Typography fontFamily="Alkatra" fontSize="12px" noWrap={true}>
              {chatRoom.lastChat?.type === "txt" && chatRoom.lastChat.content}
              {chatRoom.lastChat?.type === "img" && "Image"}
              {chatRoom.lastChat?.type === "vid" && "Video"}
              {!chatRoom.lastChat && "no message yet..."}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export default ChatRoomList

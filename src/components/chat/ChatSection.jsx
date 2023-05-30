import { useState, useEffect } from "react"
import { Stack } from "@mui/material"
import { chatApi } from "../../store"
import ChatSectionHeader from "./header/ChatSectionHeader"
import ChatList from "./list/ChatList"
import ChatSectionFooter from "./footer/ChatSectionFooter"
import { useParams } from "react-router-dom"
import requestHandler from "../../utils/requestHandler"

const ChatSection = () => {
  const { chatRoomId } = useParams()
  const [chatRoom, setChatRoom] = useState(null)
  const [getChatRoom] = chatApi.useLazyGetChatRoomQuery()

  useEffect(() => {
    if (chatRoomId)
      requestHandler(getChatRoom({ chatRoomId }).unwrap(), "fetching chats", "chats fetched").then(({ data }) => setChatRoom(data))
    else setChatRoom(null)
  }, [chatRoomId])

  return (
    <Stack flexGrow={1} gap={1}>
      <ChatSectionHeader chatRoom={chatRoom} />
      <ChatList chatRoom={chatRoom} />
      {chatRoom && <ChatSectionFooter chatRoomId={chatRoom.id} />}
    </Stack>
  )
}

export default ChatSection

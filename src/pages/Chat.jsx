import { useMediaQuery, Stack } from "@mui/material"
import Sidebar from "../components/chat/Sidebar"
import ChatSection from "../components/chat/ChatSection"
import { useParams } from "react-router-dom"

const Chat = () => {
  const { chatRoomId } = useParams()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"))

  if (isSmall)
    return (
      <Stack flexGrow={1} flexDirection="row" gap={2} overflow="auto" p="16px">
        {!chatRoomId && <Sidebar />}
        {chatRoomId && <ChatSection />}
      </Stack>
    )

  return (
    <Stack flexGrow={1} flexDirection="row" gap={2} overflow="auto" p="16px">
      <Sidebar />
      <ChatSection />
    </Stack>
  )
}

export default Chat

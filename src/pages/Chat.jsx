import { Stack } from "@mui/material"
import Sidebar from "../components/chat/Sidebar"
import ChatSection from "../components/chat/ChatSection"
import {} from "../store"

const Chat = () => {
  return (
    <Stack flexGrow={1} flexDirection="row" overflow="auto">
      <Sidebar />
      <ChatSection />
    </Stack>
  )
}

export default Chat

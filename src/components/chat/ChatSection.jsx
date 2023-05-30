import { Stack } from "@mui/material"
import ChatSectionHeader from "./header/ChatSectionHeader"
import ChatList from "./list/ChatList"
import ChatSectionFooter from "./footer/ChatSectionFooter"

const ChatSection = () => {
  return (
    <Stack flexGrow={1} gap={1}>
      <ChatSectionHeader />
      <ChatList />
      <ChatSectionFooter />
    </Stack>
  )
}

export default ChatSection

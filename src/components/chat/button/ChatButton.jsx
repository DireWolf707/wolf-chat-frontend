import { IconButton } from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat"
import { useNavigate } from "react-router-dom"

const ChatButton = ({ chatRoomId }) => {
  const navigate = useNavigate()

  return (
    <IconButton onClick={() => navigate(`/chat/${chatRoomId}`)}>
      <ChatIcon />
    </IconButton>
  )
}

export default ChatButton

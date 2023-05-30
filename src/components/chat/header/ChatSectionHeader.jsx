import { useMediaQuery, Stack, Typography, IconButton } from "@mui/material"
import UserAvatar from "../../layout/UserAvatar"
import { useNavigate } from "react-router-dom"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import LogoutIcon from "@mui/icons-material/Logout"

const ChatSectionHeader = () => {
  const navigate = useNavigate()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"))

  return (
    <Stack flexDirection="row" justifyContent="space-between" bgcolor="rgba(255,255,255,0.15)" py="12px">
      <Stack flexDirection="row" alignItems="center">
        <IconButton>
          <MoreVertIcon />
        </IconButton>

        <Stack flexDirection="row" alignItems="center" gap={1}>
          <UserAvatar user={{ username: "A" }} />

          <Typography>Username</Typography>
        </Stack>
      </Stack>

      {isSmall && (
        <IconButton onClick={() => navigate("/chat")}>
          <LogoutIcon />
        </IconButton>
      )}
    </Stack>
  )
}

export default ChatSectionHeader

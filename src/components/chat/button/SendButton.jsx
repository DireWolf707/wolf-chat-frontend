import { useRef } from "react"
import { Stack, Box } from "@mui/material"
import { ListType } from "../../../utils/constants"
import ToastContent from "../../layout/ToastContent"
import { toast } from "react-hot-toast"
import SendIcon from "@mui/icons-material/Send"

const SendButton = ({ chatRoomId }) => {
  const contentRef = useRef(null)

  const searchHandler = (e) => {
    e.preventDefault()

    const q = contentRef.current.value
    if (!q) return toast.error(ToastContent("please write something"))

    contentRef.current.value = ""
  }

  return (
    <Stack
      component="form"
      onSubmit={searchHandler}
      flexGrow={1}
      flexDirection="row"
      alignItems="center"
      gap={1}
      bgcolor="rgba(255,255,255,0.15)"
      borderRadius="24px"
      px="12px"
      py="10px"
    >
      <Box
        ref={contentRef}
        component="input"
        flexGrow={1}
        width="100%"
        placeholder="Send message..."
        fontSize="16px"
        bgcolor="transparent"
        pl="4px"
        sx={{ "::placeholder": { color: "rgb(180,180,180)" } }}
      />

      <SendIcon />
    </Stack>
  )
}

export default SendButton

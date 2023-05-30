import { IconButton } from "@mui/material"
import { chatApi } from "../../../store"
import requestHandler from "../../../utils/requestHandler"
import CancelIcon from "@mui/icons-material/Cancel"

const CancelRequestButton = ({ userId, setFriend }) => {
  const [cancelRequest] = chatApi.useCancelFriendRequestMutation()

  const cancelRequestHandler = () =>
    requestHandler(cancelRequest({ userId }).unwrap(), "canceling request", "request canceled").then(() => setFriend({}))

  return (
    <IconButton onClick={cancelRequestHandler}>
      <CancelIcon />
    </IconButton>
  )
}

export default CancelRequestButton

import { IconButton } from "@mui/material"
import { chatApi } from "../../../store"
import requestHandler from "../../../utils/requestHandler"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const AcceptRequestButton = ({ userId, setFriend }) => {
  const [acceptRequest] = chatApi.useAcceptFriendRequestMutation()

  const acceptRequestHandler = () =>
    requestHandler(acceptRequest({ userId }).unwrap(), "accepting request", "request accepted").then(() =>
      setFriend((pv) => ({ ...pv, isRequestAccepted: true }))
    )

  return (
    <IconButton onClick={acceptRequestHandler}>
      <CheckCircleIcon />
    </IconButton>
  )
}

export default AcceptRequestButton

import { IconButton } from "@mui/material"
import { chatApi } from "../../../store"
import requestHandler from "../../../utils/requestHandler"
import PersonAddIcon from "@mui/icons-material/PersonAdd"

const CreateRequestButton = ({ userId, setFriend }) => {
  const [createRequest] = chatApi.useCreateFriendRequestMutation()

  const createRequestHandler = () =>
    requestHandler(createRequest({ userId }).unwrap(), "creating request", "request created").then(() =>
      setFriend({ to: userId, from: currentUser.id, isRequestAccepted: false })
    )
  return (
    <IconButton onClick={createRequestHandler}>
      <PersonAddIcon />
    </IconButton>
  )
}

export default CreateRequestButton

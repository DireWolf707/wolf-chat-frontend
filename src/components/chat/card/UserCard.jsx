import { useState } from "react"
import { Stack, Typography } from "@mui/material"
import { userApi } from "../../../store"
import UserAvatar from "../../layout/UserAvatar"
import AcceptRequestButton from "../button/AcceptRequestButton"
import CreateRequestButton from "../button/CreateRequestButton"
import CancelRequestButton from "../button/CancelRequestButton"

const UserCard = ({ user, Friend }) => {
  const [friend, setFriend] = useState(Friend || {})
  const {
    data: { data: currentUser },
  } = userApi.useFetchProfileQuery()

  return (
    <Stack flexDirection="row" gap={1.5} bgcolor="rgba(255,255,255,0.15)" p="10px">
      <UserAvatar user={user} />

      <Stack flexGrow={1} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography flexGrow={1} fontFamily="Righteous" fontSize="17px" noWrap={true}>
          {user.username}
        </Typography>

        {!friend?.isRequestAccepted && friend?.to === currentUser.id ? (
          <AcceptRequestButton userId={user.id} setFriend={setFriend} />
        ) : !friend?.isRequestAccepted && friend?.from === currentUser.id ? (
          <CancelRequestButton userId={user.id} setFriend={setFriend} />
        ) : friend?.isRequestAccepted ? (
          <></>
        ) : (
          <CreateRequestButton userId={user.id} setFriend={setFriend} />
        )}
      </Stack>
    </Stack>
  )
}

export default UserCard

import { useState, useEffect } from "react"
import { Stack } from "@mui/material"
import { chatApi } from "../../../store"
import UserCard from "../card/UserCard"
import requestHandler from "../../../utils/requestHandler"

const FriendRequestList = () => {
  const [friendRequests, setFriendRequests] = useState([])
  const [getFriendRequests] = chatApi.useLazyGetFriendRequestsQuery()

  useEffect(() => {
    requestHandler(getFriendRequests().unwrap(), "fetching friend requests", "friend requests fetched").then(({ data }) =>
      setFriendRequests(data)
    )
  }, [])

  return (
    <Stack gap={0.3} overflow="auto">
      {friendRequests.map(({ user, Friend }) => {
        return <UserCard key={user.id} user={user} Friend={Friend} />
      })}
    </Stack>
  )
}

export default FriendRequestList

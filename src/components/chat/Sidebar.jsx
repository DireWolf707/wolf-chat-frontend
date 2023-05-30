import { useState } from "react"
import { Stack } from "@mui/material"
import SidebarHeader from "./header/SidebarHeader"
import ChatRoomList from "./list/ChatRoomList"
import SearchList from "./list/SearchList"
import FriendRequestList from "./list/FriendRequestList"
import { ListType } from "../../utils/constants"

const Sidebar = () => {
  const [selectedList, setSelectedList] = useState(ListType.chatRoom)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Stack gap={2} sx={{ width: { xs: "100%", sm: "300px" } }}>
      <SidebarHeader setSearchTerm={setSearchTerm} selectedList={selectedList} setSelectedList={setSelectedList} />

      {selectedList === ListType.chatRoom && <ChatRoomList />}
      {selectedList === ListType.search && <SearchList searchTerm={searchTerm} />}
      {selectedList === ListType.friendRequest && <FriendRequestList />}
    </Stack>
  )
}

export default Sidebar

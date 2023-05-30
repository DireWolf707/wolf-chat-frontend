import { Stack, Typography, IconButton } from "@mui/material"
import { ListType } from "../../../utils/constants"
import SearchButton from "../button/SearchButton"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import CloseIcon from "@mui/icons-material/Close"
import GroupAddIcon from "@mui/icons-material/GroupAdd"

const SidebarHeader = ({ setSearchTerm, selectedList, setSelectedList }) => {
  return (
    <Stack gap={2}>
      <Stack flexDirection="row" gap={0.5}>
        <SearchButton setSearchTerm={setSearchTerm} setSelectedList={setSelectedList} />

        {selectedList === ListType.chatRoom && (
          <IconButton onClick={() => setSelectedList(ListType.friendRequest)}>
            <PeopleAltIcon />
          </IconButton>
        )}

        {[ListType.friendRequest, ListType.search].includes(selectedList) && (
          <IconButton onClick={() => setSelectedList(ListType.chatRoom)}>
            <CloseIcon />
          </IconButton>
        )}
      </Stack>

      {selectedList === ListType.chatRoom && (
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" px="5px">
          <Typography fontFamily="Sedgwick Ave Display" fontSize="26px" textAlign="center">
            Chats
          </Typography>

          <IconButton sx={{ bgcolor: "gray" }}>
            <GroupAddIcon fontSize="small" />
          </IconButton>
        </Stack>
      )}

      {selectedList === ListType.search && (
        <Typography fontFamily="Sedgwick Ave Display" fontSize="26px" textAlign="center">
          Search
        </Typography>
      )}

      {selectedList === ListType.friendRequest && (
        <Typography fontFamily="Sedgwick Ave Display" fontSize="26px" textAlign="center">
          Friend Requests
        </Typography>
      )}
    </Stack>
  )
}

export default SidebarHeader

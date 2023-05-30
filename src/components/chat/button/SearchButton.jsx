import { useRef } from "react"
import { Stack, Box } from "@mui/material"
import { ListType } from "../../../utils/constants"
import ToastContent from "../../layout/ToastContent"
import { toast } from "react-hot-toast"
import SearchIcon from "@mui/icons-material/Search"

const SearchButton = ({ setSearchTerm, setSelectedList }) => {
  const searchRef = useRef(null)

  const searchHandler = (e) => {
    e.preventDefault()

    const q = searchRef.current.value
    if (!q) return toast.error(ToastContent("please write something"))

    setSearchTerm(searchRef.current.value)
    setSelectedList(ListType.search)
    searchRef.current.value = ""
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
      <SearchIcon />

      <Box
        ref={searchRef}
        component="input"
        flexGrow={1}
        width="100%"
        placeholder="Search username..."
        fontSize="14px"
        bgcolor="transparent"
        pr="4px"
        sx={{ "::placeholder": { color: "rgb(180,180,180)" } }}
      />
    </Stack>
  )
}

export default SearchButton

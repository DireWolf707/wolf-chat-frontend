import { useState, useEffect } from "react"
import { Stack } from "@mui/material"
import { chatApi } from "../../../store"
import UserCard from "../card/UserCard"
import requestHandler from "../../../utils/requestHandler"

const SearchList = ({ searchTerm }) => {
  const [searchResult, setSearchResult] = useState([])
  const [search] = chatApi.useLazySearchQuery()

  useEffect(() => {
    const searchParams = new URLSearchParams({ q: searchTerm })
    requestHandler(search({ q: searchParams.toString() }).unwrap(), "searching", "search complete").then(({ data }) =>
      setSearchResult(data)
    )
  }, [searchTerm])

  return (
    <Stack gap={0.3} overflow="auto">
      {searchResult.map(({ user, Friend }) => {
        return <UserCard key={user.id} user={user} Friend={Friend} />
      })}
    </Stack>
  )
}

export default SearchList

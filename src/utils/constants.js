import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import CommentIcon from "@mui/icons-material/Comment"

export const navHeight = "96px"

export const navType = {
  link: 0,
  button: 1,
}

export const publicNavLinks = []

export const privateNavLinks = [
  {
    title: "chat",
    type: navType.link,
    href: "/chat",
    Icon: CommentIcon,
  },
  {
    title: "profile",
    type: navType.link,
    href: "/profile",
    Icon: AccountCircleIcon,
  },
]

export const ListType = {
  chatRoom: 0,
  search: 1,
  friendRequest: 2,
}
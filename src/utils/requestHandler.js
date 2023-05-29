import toast from "react-hot-toast"
import ToastContent from "../components/layout/ToastContent"
import { capitalize } from "@mui/material"

const handleError400 = ({ message }, setFormErrors) => {
  if (message.indexOf(":") < 0) return message

  if (setFormErrors) {
    const formError = {}
    message.split(",").map((e) => {
      const [field, value] = e.split(":")
      formError[field] = capitalize(value)
    })
    setFormErrors(formError)
  }
  return "validation error"
}

export default (requestPromise, loadingMsg, successMsg, setFormErrors = null) => {
  return toast.promise(requestPromise, {
    loading: ToastContent(capitalize(loadingMsg) + "..."),
    success: () => {
      if (setFormErrors) setFormErrors({})
      return ToastContent(capitalize(successMsg) + "!")
    },
    error: (err) => {
      switch (err.status) {
        case 400:
          return ToastContent(capitalize(handleError400(err.data, setFormErrors)) + "!")

        case "FETCH_ERROR":
          return ToastContent("Server is unreachable at the moment!")

        default:
          console.log(err)
          return ToastContent("Something went wrong!")
      }
    },
  })
}

export const ERR_TOAST = () => toast.error(Toast("Something went wrong!"))

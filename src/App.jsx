import Navbar from "./components/layout/Navbar"
import Sidebar from "./components/layout/Sidebar"
import LoggedInRoute from "./components/wrapper/LoggedInRoute"
import SocketProvider from "./components/wrapper/SocketProvider"
import { Stack } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import { Home, Profile, Chat, Error404, Error500 } from "./pages"

const App = () => {
  return (
    <Stack height="100vh" width="100vw" overflow="auto" bgcolor="#551E19">
      <Navbar />

      <Sidebar />

      <Routes>
        {/* Public Routes */}

        {/* Socket Disabled Routes */}
        <Route path="/" element={<Home />} />

        {/* Socket Enabled Routes */}
        <Route element={<SocketProvider />}></Route>

        {/* LoggedIn Routes */}
        <Route element={<LoggedInRoute />}>
          {/* Socket Disabled Routes */}
          <Route path="/profile" element={<Profile />} />

          {/* Socket Enabled Routes */}
          <Route element={<SocketProvider />}>
            <Route path="/chat/:chatRoomId?" element={<Chat />} />
          </Route>
        </Route>

        {/* Server Error (500) */}
        <Route path="/500" element={<Error500 />} />

        {/* Unknown Routes (404) */}
        <Route path="*" element={<Error404 />} />
        {/* End */}
      </Routes>
    </Stack>
  )
}

export default App

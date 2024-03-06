import CreatePost from "./CreatePost"
import Home from "./Home"
import Notifications from "./Notifications"
import ProfileLink from "./ProfileLink"
import Reel from "./Reel"
import Search from "./Search"

const SidebarItems = () => {
  return (
    <>
    <Home/>
    <Search/>
    <Notifications/>
    <CreatePost/>
    <Reel/>
    <ProfileLink/>
    </>
  )
}

export default SidebarItems

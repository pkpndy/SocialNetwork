import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventIcon from "@mui/icons-material/Event";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../dummyData";
import Closefriends from "../Closefriends/Closefriends";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Diversity2Icon className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <BookmarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Saved</span>
          </li>
          <li className="leftbarListItem">
            <EventIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutlineIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Help</span>
          </li>
          <li className="leftbarListItem">
            <WorkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <SchoolIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        {Users.map((u) => (
          <Closefriends key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}

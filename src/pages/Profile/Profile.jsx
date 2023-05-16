import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/objects/snowmountain.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/people/8prk.jpg"
                alt=""
                className="profilePictureImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Prakash Pandey</h4>
              <span className="profileInfoDesc">Life is a journey!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

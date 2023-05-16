import "./rightbar.css";
import { Users } from "../../dummyData";
import OnlineFriends from "../Online/OnlineFriends";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayWrapper">
          <img src="/assets/gift-11389.png" className="giftImg" />
          <span className="birthdayText">
            <b> Kr$na Kaul </b> and <b> 3 other friends</b> have birthdays
            today...
          </span>
        </div>
        <img src="assets/objects/GaryVee.webp" className="adImage" />
        <h4 className="onlineFriendsTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Renusagar</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Profession:</span>
            <span className="rightbarInfoValue">Student</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/people/6Kr$naPhoto.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshit Kesri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/4Cr7onPitch.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshit Kesri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/7Kr$naPhoto.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshit Kesri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/3Cr7fromFIFA.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshit Kesri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/8prk.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshit Kesri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/5DollarSignPhotoShoot.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshit Kesri</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}

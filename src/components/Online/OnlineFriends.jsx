import "./online.css";

export default function OnlineFriends({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}

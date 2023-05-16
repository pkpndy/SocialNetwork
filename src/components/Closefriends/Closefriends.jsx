import "./closefriends.css";

export default function Closefriends({ user }) {
  return (
    <ul className="leftbarFriendList">
      <li className="leftbarFriend">
        <img className="leftbarFriendImg" src={user.profilePicture} alt="" />
        <span className="leftbarFriendName">{user.username}</span>
      </li>
    </ul>
  );
}

import "./share.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import MoodIcon from "@mui/icons-material/Mood";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/people/1Raa.jpg" className="shareProfileImg" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PhotoLibraryIcon htmlColor="purple" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MoodIcon htmlColor="yellow" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

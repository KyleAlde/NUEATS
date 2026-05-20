import "../styles/components/profile.css";

function Profile(props) {
  return (
    <div className="ProfileContainer">
      <div className="ProfileHeader">
        <button className="CloseButton" onClick={() => props.onClose(false)}>✕</button>
        <div className="ProfileTitle">
            <h1 id="profile-title">Profile</h1>
        </div>
      </div>
      <hr />
      <div className="NameContainer">
        <p id="name-label">{props.name}</p>
      </div>
      <hr />
      <div className="LogoutContainer">
        <button className="LogoutButton">Log out</button>
      </div>
    </div>
  )
}

export default Profile;
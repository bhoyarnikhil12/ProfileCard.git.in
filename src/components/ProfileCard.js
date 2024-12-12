const ProfileCard = ({ profile, onViewDetails }) => (
  <div className="profile-card">
    <img src={profile.photo} alt={profile.name} className="profile-photo" />
    <h3>{profile.name}</h3>
    <p>{profile.description}</p>
    <button onClick={() => onViewDetails(profile)}>View Details</button>
  </div>
);

export default ProfileCard;

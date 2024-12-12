import React from 'react';
import MapComponent from './Mapv';

const ProfileDetails = ({ profile }) => (
  <div className="profile-details">
    <h2>{profile.name}</h2>
    <p>{profile.description}</p>
    <h4>Location:</h4>
    <MapComponent location={profile.location} />
  </div>
);

export default ProfileDetails;

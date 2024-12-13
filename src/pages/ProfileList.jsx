import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapView from '../components/MapView';
import { getProfiles } from '../api/profiles';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    getProfiles().then(data => setProfiles(data));
  }, []);

  return (
    <div>
      <h1>Profile List</h1>
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onViewDetails={setSelectedProfile}
          />
        ))}
      </div>
      {selectedProfile && (
        <div>
          <h2>Map View</h2>
          <MapView address={selectedProfile.address} />
        </div>
      )}
    </div>
  );
};

export default ProfileList;

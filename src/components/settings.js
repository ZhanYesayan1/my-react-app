import React from 'react';
import { UserProfile } from '@clerk/clerk-react';
import '../styles/settings.css'; 

function Settings() {
  return (
    <div className="settings">
      <UserProfile className="user-profile" path="/setting" routing="path" />
    </div>
  );
}

export default Settings;
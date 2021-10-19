import React from "react";
import { Card } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

function Profile() {
  const { user } = useAuth();
  return (
    <div className='text-center my-5'>
      <Card className='w-md-50 p-3 profile-info mx-auto shadow'>
        <img
          src={user.photoURL}
          alt=''
          className='profile-info-img'
          onError={(e) => {
            e.target.onerror = false;
            e.target.src = "https://www.linkpicture.com/q/download_86.png";
          }}
        />
        <p className='regular-subtitle'>{user.displayName}</p>
      </Card>
    </div>
  );
}

export default Profile;

// components/ProfileComponent.js
import React, { useState } from "react";
import EditProfileForm from "./EditProfileForm";

const ProfileComponent = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <EditProfileForm user={user} onCancel={() => setIsEditing(false)} onSave={() => setIsEditing(false)} />;
    }

    return (
        <div className="profile-component">
            <div className="profile-header">
                <img src={user.avatar} alt={user.name} className="profile-avatar" />
                <div className="profile-info">
                    <h1>{user.name}</h1>
                    <p className="profile-bio">{user.bio}</p>
                    <div className="profile-stats">
                        <span>{user.projectsCount} projects</span>
                        <span>{user.followers} followers</span>
                        <span>{user.following} following</span>
                    </div>
                </div>
                <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                    Edit Profile
                </button>
            </div>
            
            <div className="profile-details">
                <div className="detail-section">
                    <h3>Basic Info</h3>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Birthday:</strong> {user.birthday}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Work:</strong> {user.work}</p>
                </div>
                
                <div className="detail-section">
                    <h3>Contact Info</h3>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
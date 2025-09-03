import React from "react";
import { Link } from "react-router-dom";

const ProfilePreview = ({ user }) => {
    return (
        <div className="profile-preview">
            <Link to={`/profile/${user.id}`} className="profile-link">
                <div className="profile-avatar">
                    <img
                        src={user.avatar || "/assets/images/default-avatar.png"}
                        alt={`${user.name}'s avatar`}
                    />
                </div>
                <div className="profile-info">
                    <h4 className="profile-name">{user.name}</h4>
                    <p className="profile-bio">{user.bio}</p>
                    <div className="profile-stats">
                        <span>{user.projectsCount} projects</span>
                        <span>{user.followers} followers</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProfilePreview;
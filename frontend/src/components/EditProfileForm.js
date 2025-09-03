// components/EditProfileForm.js
import React, { useState } from "react";

const EditProfileForm = ({ user, onSave, onCancel }) => {
    const [editedUser, setEditedUser] = useState({
        name: user.name || "",
        bio: user.bio || "",
        birthday: user.birthday || "",
        gender: user.gender || "",
        work: user.work || "",
        phone: user.phone || "",
        email: user.email || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedUser);
    };

    return (
        <div className="edit-profile-form">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={editedUser.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={editedUser.bio}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={editedUser.birthday}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={editedUser.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="work">Work</label>
                    <input
                        type="text"
                        id="work"
                        name="work"
                        value={editedUser.work}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={editedUser.phone}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-actions">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
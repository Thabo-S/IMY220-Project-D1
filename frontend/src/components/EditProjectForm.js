import React, { useState } from "react";

const EditProjectForm = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: project.name || "",
        description: project.description || "",
        hashtag: project.hashtag || "",
        isPublic: project.isPublic || true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProject = {
            ...project,
            ...formData,
            lastActivity: `User updated project at ${new Date().toLocaleString("en-US", { timeZone: "Africa/Johannesburg" })}`
        };
        onSave(updatedProject);
    };

    return (
        <div className="edit-project-form">
            <h2>Edit Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="projectName">Project Name</label>
                    <input
                        type="text"
                        id="projectName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="projectDescription">Description</label>
                    <textarea
                        id="projectDescription"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="projectHashtag">Hashtag</label>
                    <input
                        type="text"
                        id="projectHashtag"
                        name="hashtag"
                        value={formData.hashtag}
                        onChange={handleChange}
                        placeholder="#ProjectTag"
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            name="isPublic"
                            checked={formData.isPublic}
                            onChange={handleChange}
                        />
                        Public Project
                    </label>
                </div>

                <div className="form-actions">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditProjectForm;
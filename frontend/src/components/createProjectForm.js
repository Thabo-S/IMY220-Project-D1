import React, { useState } from "react";
import { currentUser } from "../data";

const CreateProjectForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    hashtag: "",
    isPublic: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(), 
      ...formData,
      creator: currentUser,
      createdAt: new Date().toISOString().split("T")[0],
      downloads: 0,
      image: "/assets/images/default-project.png",
      files: [],
      messages: [],
      lastActivity: `User created project at ${new Date().toLocaleString("en-US", { timeZone: "Africa/Johannesburg" })}`,
    };

    if (onSubmit) {
      onSubmit(newProject);
    }

    
    console.log("New project created:", newProject);

  
    setFormData({ name: "", description: "", hashtag: "", isPublic: true });
  };

  return (
    <div className="create-project-form">
      {/* <h3>Create New Project</h3> */}
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
            placeholder="Enter project name"
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
            placeholder="Describe your project"
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
          <label htmlFor="isPublic" className="checkbox-label">Public</label>
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Create Project</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectFiles from "../components/ProjectFiles";
import ProjectMessages from "../components/ProjectMessages";
import EditProjectForm from "../components/EditProjectForm";
import TeamMembers from "../components/TeamMembers"; // New component
import { projects, currentUser, users } from "../data";
import Navbar from "../components/Navbar";
import  Footer from "../components/Footer";
import PalmTree from "../components/PalmTree";

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(projects.find(p => p.id === parseInt(id)));
    const [isEditing, setIsEditing] = useState(false);

    // Handle case where project is not found
    if (!project) {
        return (
            <>
                <Navbar />
                <div className="project-page">
                    <div className="project-not-found">
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                    </div>
                </div>
            </>
        );
    }

    const handleEditProject = (updatedProject) => {
        setProject(updatedProject);
        setIsEditing(false);
        console.log("Project updated:", updatedProject);
    };

    const isCurrentUserCreator = project.creator.id === currentUser.id;

    if (isEditing) {
        return (
            <>
                <Navbar />
                <div className="project-page">
                    <EditProjectForm 
                        project={project} 
                        onSave={handleEditProject}
                        onCancel={() => setIsEditing(false)}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="project-page">
                <header className="project-header">
                    <div className="project-header-main">
                        <h1>{project.name}</h1>
                        <p className="project-description">{project.description}</p>
                        <div className="project-meta">
                            <span className="hashtag">{project.hashtag}</span>
                            <span className="creator">By {project.creator.name}</span>
                        </div>
                    </div>
                    
                    {/* Edit button - only show if current user is the creator */}
                    {isCurrentUserCreator && (
                        <div className="project-actions">
                            <button 
                                className="action-btn primary"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Project
                            </button>
                            <button className="action-btn secondary">
                                Add File
                            </button>
                        </div>
                    )}
                </header>

                <main className="project-content">
                    <TeamMembers project={project} />
                    <ProjectFiles files={project.files} />
                    <ProjectMessages messages={project.messages} />
                </main>
            </div>
            <PalmTree/>
            <Footer/>
        </>
    );
};

export default Project;
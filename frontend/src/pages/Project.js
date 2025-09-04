import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectFiles from "../components/ProjectFiles";
import ProjectMessages from "../components/ProjectMessages";
import EditProjectForm from "../components/EditProjectForm";
import TeamMembers from "../components/TeamMembers";
import { projects, users } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PalmTree from "../components/PalmTree";

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(projects.find(p => p.id === parseInt(id)));
    const [isEditing, setIsEditing] = useState(false);

    // Get current user from localStorage or use first user as default
    const getCurrentUser = () => {
        const storedUserData = localStorage.getItem('user'); 
        if (storedUserData) {
            try {
                const parsedData = JSON.parse(storedUserData);
                return parsedData; 
            } catch (error) {
                console.error('Error parsing user data:', error);
            }
        }
        // Return first user as default if no one is logged in
        return users.length > 0 ? users[0] : null;
    };

    const currentUser = getCurrentUser();

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

    const isCurrentUserCreator = currentUser && project.creator.id === currentUser.id;

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
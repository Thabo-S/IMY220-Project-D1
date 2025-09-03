import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { users, currentUser, projects, friends } from "../data";
import ProfileComponent from "../components/ProfileComponent";
import ProjectList from "../components/ProjectList";
import FriendList from "../components/FriendList";
import CreateProjectForm from "../components/CreateProjectForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PalmTree from "../components/PalmTree";

const Profile = () => {
  const { id } = useParams();
  const user = id ? users.find((u) => u.id === parseInt(id)) : currentUser;
  const [userProjects, setUserProjects] = useState(
    projects.filter(project => project.creator.id === user.id)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  const handleProjectCreate = (newProject) => {
    // Add the new project to the user's projects list
    setUserProjects(prev => [...prev, newProject]);
    console.log("Project created:", newProject);
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        {/* Profile Information */}
        <ProfileComponent user={user} />

        {/* Projects List */}
        <section className="profile-projects">
          <h2>{user.id === currentUser.id ? "My Projects" : `${user.name}'s Projects`}</h2>
          <ProjectList projects={userProjects} />
        </section>

        {/* Friends List */}
        {user.id === currentUser.id && (
          <section className="profile-friends">
            <div className="friend-heading">
              <h2>My Friends</h2>
            </div>
            <FriendList friends={friends} />
          </section>
        )}

        {/* Create Project Form */}
        {user.id === currentUser.id && (
          <section className="create-project">
            <h2>Create a New Project</h2>
            <CreateProjectForm onSubmit={handleProjectCreate} />
          </section>
        )}
      </div>
      <PalmTree/>
      <Footer/>
    </>
  );
};

export default Profile;
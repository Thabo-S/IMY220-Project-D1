import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { users, projects, friends } from "../data";
import ProfileComponent from "../components/ProfileComponent";
import ProjectList from "../components/ProjectList";
import FriendList from "../components/FriendList";
import CreateProjectForm from "../components/CreateProjectForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PalmTree from "../components/PalmTree";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [userProjects, setUserProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const storedUserData = localStorage.getItem('user');
        let storedUser = null;
        
        if (storedUserData) {
          try {
            storedUser = JSON.parse(storedUserData);
            console.log("Stored user from localStorage:", storedUser);
          } catch (error) {
            console.error('Error parsing user data:', error);
          }
        }
        
        setLoggedInUser(storedUser);

        let userId = id;
        
    
        if (!userId && storedUser) {
          userId = storedUser.id;
        }
        
        
        if (!userId && !storedUser) {
          const randomIndex = Math.floor(Math.random() * users.length);
          const randomUser = users[randomIndex];
          userId = randomUser.id;
        }

        console.log("User ID to display:", userId);

        if (!userId) {
          setIsLoading(false);
          return;
        }

        const userData = users.find(u => u.id === parseInt(userId));
        console.log("Found user data:", userData);

        if (userData) {
          setUser(userData);
         
          const userProjs = projects.filter(project => {
           
            const creatorId = project.creator.id || project.creator;
            console.log("Project creator ID:", creatorId, "User ID:", userData.id);
            return creatorId === userData.id;
          });
          console.log("Filtered projects:", userProjs);
          setUserProjects(userProjs);
        } else {
          console.error('User not found in local data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  const handleProjectCreate = (newProject) => {
    setUserProjects(prev => [...prev, newProject]);
    console.log("Project created:", newProject);
  };

  const isOwnProfile = loggedInUser && user.id === loggedInUser.id;

  return (
    <>
      <Navbar />
      <div className="profile-page">
        {/* Profile Information */}
        <ProfileComponent user={user} />

        {/* Projects List */}
        <section className="profile-projects">
          <h2>{isOwnProfile ? "My Projects" : `${user.name}'s Projects`}</h2>
          <ProjectList projects={userProjects} />
        </section>

        {/* Friends List - Show for all profiles, not just own profile */}
        <section className="profile-friends">
          <div className="friend-heading">
            <h2>{isOwnProfile ? "My Friends" : `${user.name}'s Friends`}</h2>
          </div>
          <FriendList friends={friends} />
        </section>

        {/* Create Project Form - Only show for the logged in user's own profile */}
        {isOwnProfile && (
          <section className="create-project">
            <h2>Create a New Project</h2>
            <CreateProjectForm onSubmit={handleProjectCreate} />
          </section>
        )}
      </div>
      <PalmTree />
      <Footer />
    </>
  );
};

export default Profile;
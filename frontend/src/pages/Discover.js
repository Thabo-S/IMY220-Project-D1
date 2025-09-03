import React, { useState } from "react";
import { projects } from "../data";
import ProjectList from "../components/ProjectList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filters from "../components/filters";
import SearchInput from "../components/SearchInput";

const Discover = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        timeCreated: "",
        visibility: "",
        hashtag: ""
    });

    // Filter to only show public projects
    let publicProjects = projects.filter(project => project.isPublic);

    // Apply search filter
    if (searchTerm) {
        publicProjects = publicProjects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.hashtag.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Apply additional filters
    if (filters.timeCreated === "newest") {
        publicProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filters.timeCreated === "oldest") {
        publicProjects.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (filters.hashtag) {
        publicProjects = publicProjects.filter(project =>
            project.hashtag.toLowerCase().includes(filters.hashtag.toLowerCase())
        );
    }

    return (
        <>
            <Navbar />
            <div className="discover-page">
                <div className="discover-header">
                    <h1>Discover Projects</h1>
                    <p>Explore amazing public projects from our community</p>
                </div>

                {/* Search and Filters */}
                <div className="discover-controls">
                    <SearchInput 
                        value={searchTerm} 
                        onChange={setSearchTerm} 
                        placeholder="Search projects..." 
                    />
                    <Filters />
                </div>
                
                <div className="discover-content">
                    {publicProjects.length > 0 ? (
                        <>
                            <div className="discover-count">
                                Found {publicProjects.length} public project(s)
                            </div>
                            <ProjectList projects={publicProjects} />
                        </>
                    ) : (
                        <div className="no-projects">
                            <p>No projects found.</p>
                            {searchTerm && <p>Try adjusting your search terms.</p>}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Discover;
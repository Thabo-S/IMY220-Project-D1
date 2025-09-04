import React from "react";

const TeamMembers = ({ project }) => {
    // Get the creator
    const creator = project.creator;
    
    // Sample team members (excluding the creator to avoid duplicates)
    const sampleMembers = [
        { id: 2, name: "Sarah Coder", avatar: "/assets/images/avatars/sarah.png" },
        { id: 3, name: "Mike Programmer", avatar: "/assets/images/avatars/mike.png" }
    ];
    
    // Filter out the creator from sample members if they exist there
    const filteredSampleMembers = sampleMembers.filter(member => member.id !== creator.id);
    
    // Combine creator with filtered sample members
    const allMembers = [creator, ...filteredSampleMembers];

    return (
        <section className="team-members">
            <h3>Team Members</h3>
            <div className="members-list">
                {allMembers.map(member => (
                    <div key={member.id} className="team-member">
                        <img 
                            src={member.avatar || "/assets/images/default-avatar.png"} 
                            alt={member.name}
                            className="member-avatar"
                        />
                        <span className="member-name">{member.name}</span>
                        {member.id === project.creator.id && (
                            <span className="member-role">Creator</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;
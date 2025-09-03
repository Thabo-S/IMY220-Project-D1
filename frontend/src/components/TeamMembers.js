import React from "react";

const TeamMembers = ({ project }) => {
    const teamMembers = [project.creator]; 
    
    const sampleMembers = [
        { id: 2, name: "Sarah Coder", avatar: "/assets/images/avatars/sarah.png" },
        { id: 3, name: "Mike Programmer", avatar: "/assets/images/avatars/mike.png" }
    ];
    
    const allMembers = [...teamMembers, ...sampleMembers];

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
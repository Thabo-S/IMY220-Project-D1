// import React from "react";
// import { Link } from "react-router-dom";

// const ProjectPreview = ({ project }) => {
//     return (
//         <article className="project-preview">
//             {/* <div className="project-image">
//                 <img src={project.image || "/assets/images/default-project.png"} alt={project.name} />
//             </div> */}
//             <div className="project-info">
//                 <h3>{project.name}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <div className="project-meta">
//                     <span className="hashtag">{project.hashtag}</span>
//                     <span className="last-activity">Last activity: {project.lastActivity}</span>
//                 </div>
//             </div>
//         </article>
//     );
// };

// export default ProjectPreview;

import React from "react";
import { Link } from "react-router-dom";

const ProjectPreview = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="project-link">
            <article className="project-preview">
                <div className="project-info">
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                        <span className="hashtag">{project.hashtag}</span>
                        <span className="last-activity">Last activity: {project.lastActivity}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default ProjectPreview;
import React from 'react';

const ProjectFiles = ({ files }) => {
    return (
        <section className="project-files">
            <h3>Files</h3>
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <span>{file.name}</span>
                        <small>Created: {file.created}</small>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectFiles;
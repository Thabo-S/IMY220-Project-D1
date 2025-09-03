import React from "react";
import ProjectPreview from "./ProjectPreview";
import ActivityItem from "./ActivityItem";

const Feed = ({ title, activities, type }) => {
    return (
        <section className="feed">
            <h2>{title}</h2>
            <div className="feed-content">
                {activities.map(activity => (
                    type === 'local' ? (
                        <ActivityItem key={activity.id} activity={activity} />
                    ) : (
                        <ProjectPreview key={activity.id} project={activity.project || activity} />
                    )
                ))}
            </div>
        </section>
    );
};

export default Feed;
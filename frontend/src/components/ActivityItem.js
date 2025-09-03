// import React from "react";

// const ActivityItem = ({ activity }) => {
//     const renderLabel = () => {
//         switch (activity.type) {
//             case "checkin":
//                 return "Check-in";
//             case "update":
//                 return "Update";
//             default:
//                 return "System";
//         }
//     };

//     return (
//         <div className="activity-item">
//             <div className="activity-icon">
//                 {renderLabel()}
//             </div>
//             <div className="activity-content">
//                 <p>
//                     <strong>{activity.user.name}</strong> {activity.type}{" "}
//                     {activity.project.name}
//                 </p>
//                 <small>{activity.time}</small>
//             </div>
//         </div>
//     );
// };

// export default ActivityItem;

import React from "react";
import { Link } from "react-router-dom";

const ActivityItem = ({ activity }) => {
    const renderLabel = () => {
        switch (activity.type) {
            case "checkin":
                return "Check-in";
            case "update":
                return "Update";
            default:
                return "System";
        }
    };

    return (
        <Link to={`/project/${activity.project.id}`} className="activity-link">
            <div className="activity-item">
                <div className="activity-icon">
                    {renderLabel()}
                </div>
                <div className="activity-content">
                    <p>
                        <strong>{activity.user.name}</strong> {activity.type}{" "}
                        {activity.project.name}
                    </p>
                    <small>{activity.time}</small>
                </div>
            </div>
        </Link>
    );
};

export default ActivityItem;


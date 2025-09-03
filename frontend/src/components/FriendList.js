import React from "react";
import { Link } from "react-router-dom";

// const FriendList = ({ friends }) => {
//     return (
//         <div className="friend-list">
//             {friends.map(friend => (
//                 <div key={friend.id} className="friend-item">
//                     <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
//                     <div className="friend-info">
//                         <Link to={`/profile/${friend.id}`} className="friend-name">
//                             {friend.name}
//                         </Link>
//                         <p className="friend-bio">{friend.bio}</p>
//                         <div className="friend-stats">
//                             <span>{friend.projectsCount} projects</span>
//                             <span>{friend.followers} followers</span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FriendList;

// Add to FriendList component
const FriendList = ({ friends }) => {
    const handleRemoveFriend = (friendId) => {
        console.log("Remove friend:", friendId);
    };

    const handleAddFriend = (friendId) => {
        console.log("Add friend:", friendId);
    };

    return (
        <div className="friend-list">
            {friends.map(friend => (
                <div key={friend.id} className="friend-item">
                    <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
                    <div className="friend-info">
                        <Link to={`/profile/${friend.id}`} className="friend-name">
                            {friend.name}
                        </Link>
                        <p className="friend-bio">{friend.bio}</p>
                        <div className="friend-stats">
                            <span>{friend.projectsCount} projects</span>
                            <span>{friend.followers} followers</span>
                        </div>
                    </div>
                    <div className="friend-actions">
                        <button 
                            className="friend-action-btn remove"
                            onClick={() => handleRemoveFriend(friend.id)}
                        >
                            Remove
                        </button>
                        <button 
                            className="friend-action-btn add"
                            onClick={() => handleAddFriend(friend.id)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendList;
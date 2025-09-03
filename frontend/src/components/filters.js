import React, { useState } from "react";

const Filters = () => {
  const [timeCreated, setTimeCreated] = useState("");
  const [visibility, setVisibility] = useState("");
  const [hashtag, setHashtag] = useState("");

  return (
    <div className="filter-options">
      {/* Time Created Dropdown */}
      <select value={timeCreated} onChange={(e) => setTimeCreated(e.target.value)}>
        <option value="">Sort by Time Created</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {/* Public / Private Dropdown */}
      <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
        <option value="">Filter by Visibility</option>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>

      {/* Hashtag Dropdown */}
      <select value={hashtag} onChange={(e) => setHashtag(e.target.value)}>
        <option value="">Filter by Hashtag</option>
        <option value="#react">#React</option>
        <option value="#javascript">#JavaScript</option>
        <option value="#webdev">#WebDev</option>
      </select>
    </div>
  );
};

export default Filters;

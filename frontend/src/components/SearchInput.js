import React from "react";

const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <div className="search-input">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            <button>Search</button>
        </div>
    );
};

export default SearchInput;
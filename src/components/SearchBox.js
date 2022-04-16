import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 b--yellow bg-light-yellow f4"
                type="search" 
                placeholder="Search Avator" 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
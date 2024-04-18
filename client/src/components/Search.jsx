import React, { useState, useEffect } from 'react';

function Search({ onSearch, searchQuery }) {
    const [localSearchQuery, setLocalSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearch(localSearchQuery);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [localSearchQuery]);

    const handleInputChange = (event) => {
        setLocalSearchQuery(event.target.value);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className="search-bar"
            />
        </div>
    );
}

export default Search;
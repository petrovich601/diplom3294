// SizeFilter.jsx
import React from 'react';

function SizeFilter({ onSelectSize }) {
    const handleSizeChange = (e) => {
        onSelectSize(e.target.value);
    };

    return (
        <select onChange={handleSizeChange}>
            <option value="S">S</option>
            <option value="XS">XS</option>
            <option value="M">M</option>
            <option value="L">L</option>
        </select>
    );
}

export default SizeFilter;

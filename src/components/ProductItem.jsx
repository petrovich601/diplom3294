import React from 'react';

const ProductItem = ({ name, description, price, size, image }) => {
    return (
        <div className="product-item">
            <img src={image} alt={name} />
            <div className="product-details">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Size: {size}</p>
            </div>
        </div>
    );
};

export default ProductItem;

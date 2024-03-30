import React from 'react';

const CartItem = ({ name, description, price, size, image }) => {
    return (
        <div className="cart-item">
            <img src={image} alt={name} />
            <div className="cart-details">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Size: {size}</p>
            </div>
        </div>
    );
};

export default CartItem;
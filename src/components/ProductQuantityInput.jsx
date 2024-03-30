import React, { useState } from 'react';

const ProductQuantityInput = ({ quantity, setQuantity }) => {

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <div>
            <span className="add-product__quantity">Quantity: </span>
            <input
                className="add-product__input"
                type="number"
                name="Quantity"
                value={quantity}
                onChange={handleQuantityChange}

            />
        </div>
    );

};

export default ProductQuantityInput;




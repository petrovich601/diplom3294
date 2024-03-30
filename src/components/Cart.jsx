import React from 'react';
import { useCart } from '../providers/CartProvider';

const Cart = () => {
    const { cartItems, updateQuantity, removeItem } = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, parseInt(newQuantity));
    };

    return (
        <div>
            <h3>Cart</h3>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))}
            <p>GRAND TOTAL: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </div>
    );
};

export default Cart;



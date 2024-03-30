import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };

    const updateQuantity = (productId, newQuantity) => {
        const updatedItems = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedItems);
    };

    const removeItem = (productId) => {
        const updatedItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
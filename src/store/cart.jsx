import React, { createContext, useState } from 'react';


export const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts] = useState([
        { name: 'ELLERY 3', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$30', size: 'L', image: '/productImage/product8.jpg' },
        { name: 'ELLERY 6', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$60', size: 'XS', image: '/productImage/product11.jpg' }
    ]);

    return (
        <cartContext.Provider value={carts}>
            {children}
        </cartContext.Provider>
    );
};
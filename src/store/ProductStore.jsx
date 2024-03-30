import React, { createContext, useState } from 'react';

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [products] = useState([
        { name: 'ELLERY 1', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$10', size: 'M', image: '/productImage/product1.jpg' },
        { name: 'ELLERY 2', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$20', size: 'S', image: '/productImage/product7.jpg' },
        { name: 'ELLERY 3', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$30', size: 'L', image: '/productImage/product8.jpg' },
        { name: 'ELLERY 4', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$40', size: 'XL', image: '/productImage/product9.jpg' },
        { name: 'ELLERY 5', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$50', size: 'L', image: '/productImage/product10.jpg' },
        { name: 'ELLERY 6', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$60', size: 'XS', image: '/productImage/product11.jpg' }
    ]);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};



// рабочая версия
// import React, { createContext, useState } from 'react';


// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//     const [products] = useState([
//         { name: 'ELLERY 1', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$10', size: 'M', image: '/productImage/product1.jpg' },
//         { name: 'ELLERY 2', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$20', size: 'S', image: '/productImage/product7.jpg' },
//         { name: 'ELLERY 3', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$30', size: 'L', image: '/productImage/product8.jpg' },
//         { name: 'ELLERY 4', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$40', size: 'XL', image: '/productImage/product9.jpg' },
//         { name: 'ELLERY 5', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$50', size: 'L', image: '/productImage/product10.jpg' },
//         { name: 'ELLERY 6', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter o cool. Kym Ellery teams up with Moda Operandi.', price: '$60', size: 'XS', image: '/productImage/product11.jpg' }
//     ]);
//     return (
//         <ProductContext.Provider value={products}>
//             {children}
//         </ProductContext.Provider>
//     );
// };



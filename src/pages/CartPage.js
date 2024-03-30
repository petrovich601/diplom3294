import React from 'react';
import Cart from '../components/Cart';
import { CartProvider } from '../providers/CartProvider';

const CartPage = () => {
    return (
        <CartProvider>
            <div>
                <h2>Cart</h2>
                <Cart />
            </div>
        </CartProvider>
    );
};

export default CartPage;


// import React from 'react';
// import Cart from '../components/Cart';

// const CartPage = () => {
//     return (
//         <div>
//             <h2>Cart</h2>
//             <Cart />
//         </div>
//     );
// };

// export default CartPage;
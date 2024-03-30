import React, { useContext } from 'react';
import CartItem from './CartItem';
import { СartContext } from '../store/cart';


const CartList = () => {
    const carts = useContext(СartContext);
    return (
        <div className="cart-list">
            {carts.map((cart, index) => (
                <CartItem
                    key={index}
                    name={cart.name}
                    description={cart.description}
                    price={cart.price}
                    size={cart.size}
                    image={cart.image}
                />
            ))}
        </div>
    );
};

export default CartList;
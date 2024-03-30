// CartPage.jsx
import React, { useState } from 'react';
import ProductCartPage from './ProductCartPage';
import { CartProvider } from '../store/cart';

function CartPage() {
    return (
        <>
            <section class="top-product center">
                <h2 class="top-product__heading">SHOPPING CART</h2>
            </section>

            <CartProvider class="product center">
                <div>
                    <ProductCartPage />
                </div>
            </CartProvider>




            <section class="frame center">
                <div class="frame__fon-filter"></div>
                <figure class="frame__sey-item">
                    <img src="/image/Intersect.png" alt="" />
                    <p class="frame__sey-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        <span class="frame__sey-italic">a pulvinar purus condimentum</span>“
                    </p>
                </figure>
                <form class="frame__form-blok">
                    <h3 class="frame__form-title">SUBSCRIBE</h3>
                    <p class="frame__form-text">FOR OUR NEWLETTER AND PROMOTION</p>
                    <div class="frame__input-email">
                        <input type="email" class="frame__email" placeholder="Enter Your Email" />
                        <button class="frame__button-form">Subscribe</button>
                    </div>
                </form>
            </section>

        </>

    );
}

export default CartPage;

























// function CartPage({ cartItems }) {
//     const [cart, setCart] = useState(cartItems);

//     // Функция для обновления количества товара в корзине
//     const handleQuantityChange = (itemId, newQuantity) => {
//         const updatedCart = cart.map(item => {
//             if (item.id === itemId) {
//                 return { ...item, quantity: newQuantity };
//             }
//             return item;
//         });
//         setCart(updatedCart);
//     };

//     // Вычисление общей суммы товаров в корзине
//     const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

//     return (
//         <div>
//             <h1>Корзина</h1>
//             <ul>
//                 {cart.map(item => (
//                     <li key={item.id}>
//                         <div>{item.name}</div>
//                         <div>
//                             <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//                             {item.quantity}
//                             <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//                         </div>
//                         <div>{item.price * item.quantity}</div>
//                     </li>
//                 ))}
//             </ul>
//             <div>GRAND TOTAL ${totalPrice}</div>
//         </div>
//     );
// }

// export default CartPage;

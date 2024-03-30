// import React, { useContext, useState, useEffect } from 'react';
// import { cartContext } from '../store/cart';
// import ProductQuantityInput from './ProductQuantityInput';

// const ProductCartPage = () => {
//     const [carts, setCarts] = useContext(cartContext);
//     const [total, setTotal] = useState(1);

//     const updateQuantity = (index, newQuantity) => {
//         const newCarts = [...carts];
//         newCarts[index].quantity = newQuantity;
//         setCarts(newCarts);
//     };
//     const updateTotal = () => {
//         let newTotal = 0;
//         if (Array.isArray(carts)) {
//             carts.forEach(cart => {
//                 newTotal += cart.price * cart.quantity;
//             });
//         }
//         setTotal(newTotal);
//     };


//     useEffect(() => {
//         updateTotal();
//     }, [carts]);

//     if (!Array.isArray(carts)) {
//         return <div>No items in the cart.</div>;
//     }

//     return (
//         <section class="add-products center">
//             <div class="add-products__products-list">

//                 {carts.map((cart, index) => {

//                     <div key={index}>

//                         <div class="add-product">
//                             <img class="add-product__image" src={cart.image} alt="image protuct" />
//                             <div class="add-product__info">
//                                 <svg class="add-product__close" width="18" height="18" viewBox="0 0 18 18" fill="none"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
//                                         fill="#575757" />
//                                 </svg>
//                                 <h2 class="add-product__name">{cart.name}<br />T-SHIRT
//                                 </h2>
//                                 <p class="add-product__price">Price: <span class="add-product__hig">{cart.price}</span></p>
//                                 <p class="add-product__color">Color: Red</p>
//                                 <p class="add-product__size">Size: {cart.size} </p>
//                                 <ProductQuantityInput
//                                     quantity={cart.quantity}
//                                     setQuantity={(newQuantity) => updateQuantity(index, newQuantity)}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                 })}

//                 < form class="add-product__button" action="#" />
//                 <button class="add-product__clear add-product__button-style" type="reset">CLEAR SHOPPING CART</button>
//                 <button class="add-product__submit add-product__button-style" type="reset">CONTINUE SHOPPING</button>
//             </div>

//             <div class="add-products__info">
//                 <div className="total">
//                     <div className="total__summ"></div>

//                     <div class="adress">
//                         <form class="adress__shipping" action="#">
//                             <p class="adress__head">SHIPPING ADRESS</p>
//                             <input class="adress__sity" type="text" placeholder="Bangladesh" />
//                             <input class="adress__state" type="text" placeholder="State" />
//                             <input class="adress__postcode" type="text" placeholder="Postcode / Zip" />
//                             <button class="adress__get-quote" type="submit">GET A QUOTE</button>
//                         </form>
//                     </div>
//                     <div class="total">
//                         <div class="total__summ">
//                             <p class="total__sub">SUB TOTAL<span class="total__sub-summ">$900</span></p>
//                             <p class="total__grand">GRAND TOTAL<span className="total__grand-summ">{total}</span></p>
//                         </div>
//                         <hr class="total__line" />
//                         <button class="total__checkout" type="submit">PROCEED TO CHECKOUT</button>
//                     </div>
//                 </div>
//             </div>

//         </section >





//     );
// };

// export default ProductCartPage;


import React, { useContext, useState } from 'react';
import CartItem from './CartItem';
import { cartContext } from '../store/cart';
import ProductQuantityInput from './ProductQuantityInput';

const ProductCartPage = () => {
    const carts = useContext(cartContext);
    let total = 0;
    return (
        <section class="add-products center">
            <div class="add-products__products-list">

                {carts.map((cart, index) => (

                    <div key={index}>

                        <div class="add-product">
                            <img class="add-product__image" src={cart.image} alt="image protuct" />
                            <div class="add-product__info">
                                <svg class="add-product__close" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                        fill="#575757" />
                                </svg>
                                <h2 class="add-product__name">{cart.name}<br />T-SHIRT
                                </h2>
                                <p class="add-product__price">Price: <span class="add-product__hig">{cart.price}</span></p>
                                <p class="add-product__color">Color: Red</p>
                                <p class="add-product__size">Size: {cart.size} </p>
                                <ProductQuantityInput />
                            </div>
                        </div>
                    </div>
                ))}
                < form class="add-product__button" action="#" />
                <button class="add-product__clear add-product__button-style" type="reset">CLEAR SHOPPING CART</button>
                <button class="add-product__submit add-product__button-style" type="reset">CONTINUE SHOPPING</button>
            </div>

            <div class="add-products__info">
                <div class="adress">
                    <form class="adress__shipping" action="#">
                        <p class="adress__head">SHIPPING ADRESS</p>
                        <input class="adress__sity" type="text" placeholder="Bangladesh" />
                        <input class="adress__state" type="text" placeholder="State" />
                        <input class="adress__postcode" type="text" placeholder="Postcode / Zip" />
                        <button class="adress__get-quote" type="submit">GET A QUOTE</button>
                    </form>
                </div>
                <div class="total">
                    <div class="total__summ">
                        <p class="total__sub">SUB TOTAL<span class="total__sub-summ">$900</span></p>
                        <p class="total__grand">GRAND TOTAL<span class="total__grand-summ">120</span></p>
                    </div>
                    <hr class="total__line" />
                    <button class="total__checkout" type="submit">PROCEED TO CHECKOUT</button>
                </div>

            </div>
        </section >





    );
};

export default ProductCartPage;
import React from 'react';


const ProductItemPage = ({ name, description, price, image }) => {
    return (
        <div className="product">

            <a href="#" class="product__image-hover">
                <div class="add-cart">
                    <img src={shop} alt="shop" />
                    <p class="text-add-cart">Add to Cart</p>
                </div>
                <img class="product__img" src={image} alt="image" />
            </a>
            <div class="product__content">
                <a href="/pages/product.html" class="product__name">{name}</a>
                <p class="product__text">{description}</p>
                <div class="product__price">{price}</div>
            </div>
        </div>
    );
};

export default ProductItemPage;
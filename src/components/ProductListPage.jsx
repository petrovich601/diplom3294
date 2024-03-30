
import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductContext } from '../store/ProductStore';
import SizeSort from './SizeSort';


const ProductListPage = () => {
    const products = useContext(ProductContext);
    return (
        <div className="product__box">
            {products.map((product, index) => (
                <div key={index}>
                    <div className="product">

                        <a href="#" class="product__image-hover">
                            <div class="add-cart">
                                <img src="{shop}" alt="shop" />
                                <p class="text-add-cart">Add to Cart</p>
                            </div>
                            <img class="product__img" src={product.image} alt="image" />
                        </a>
                        <div class="product__content">
                            <a link="/product" class="product__name">{product.name}</a>
                            <p class="product__text">{product.description}</p>
                            <div class="product__price">{product.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListPage;
import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductContext } from '../store/ProductStore';

const ProductList = () => {
    const products = useContext(ProductContext);
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    size={product.size}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductList;



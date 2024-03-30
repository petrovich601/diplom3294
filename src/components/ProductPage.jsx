import React from 'react';
import { ProductContext } from '../store/ProductStore';
import ProductItem from './ProductItem';

const ProductPage = () => {
    const products = React.useContext(ProductContext);

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

export default ProductPage;
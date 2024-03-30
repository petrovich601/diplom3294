import React, { createContext, useState, useContext } from 'react';
import { products } from '../data/products'; // Подставьте свои данные о товарах

const CatalogContext = createContext();

export const useCatalog = () => {
    return useContext(CatalogContext);
};

export const CatalogProvider = ({ children }) => {
    const [catalog, setCatalog] = useState(products); // Используем исходные данные о товарах

    const sortBySize = (size) => {
        const sortedCatalog = catalog.filter((product) => product.size === size);
        setCatalog(sortedCatalog);
    };

    return (
        <CatalogContext.Provider value={{ catalog, sortBySize }}>
            {children}
        </CatalogContext.Provider>
    );
};
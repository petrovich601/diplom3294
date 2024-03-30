import React from 'react';
import ProductList from '../components/ProductList';
import SortBySize from '../components/SortBySize';
import { CatalogProvider } from '../providers/CatalogProvider';

const CatalogPage = () => {
    return (
        <CatalogProvider>
            <div>
                <h2>Catalog</h2>
                <SortBySize />
                <ProductList />
            </div>
        </CatalogProvider>
    );
};

export default CatalogPage;


// import React from 'react';
// import ProductList from '../components/ProductList';
// import SortBySize from '../components/SortBySize';

// const CatalogPage = () => {
//     return (
//         <div>
//             <h2>Catalog</h2>
//             <SortBySize />
//             <ProductList />
//         </div>
//     );
// };

// export default CatalogPage;
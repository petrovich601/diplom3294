// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import CartPage from './components/CartPage';
import StartPage from './components/StartPage';
import ProductPage from './components/ProductPage';
import RegistrtionPage from './components/RegistrtionPage';
import AboutProductPage from './components/AboutProductPage';



function App() {
    return (
        <BrowserRouter>
            <>
                <Header />

                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/Catalog" element={<CatalogPage />} />
                    <Route path="/Product" element={<AboutProductPage />} />
                    <Route path="/Cart" element={<CartPage />} />
                    <Route path="/Registrtion" element={<RegistrtionPage />} />


                </Routes>
                <Footer />
            </>

        </BrowserRouter>
    );
};
export default App;




{/* <Route path="/components" element={<StartPage />} />
<Route path="/components" element={<CatalogPage />} />
<Route path="/components" element={<CartPage />} /> */}

{/* <StartPage /> */ }
{/* <CatalogPage /> */ }

{/* <ProductPage /> */ }

{/* <CartPage /> */ }
{/* <Switch>
                    <Route path="/catalog">
                        <CatalogPage products={products} />
                    </Route>
                    <Route path="/cart">
                        <StartPage cartItems={cartItems} />
                    </Route>
                </Switch> */}
// <Footer />
// </div>
// </Router>


// Предположим, что у вас есть данные о товарах и корзине
// const products = [...products];
// const cartItems = [...cartItems];

{/* <StartPage /> */ }
{/* <div>
                    <ul>
                        <li>
                            <Link to="/">StartPage</Link>
                        </li>
                        <li>
                            <Link to="/Catalog">CatalogPage</Link>
                        </li>
                        <li>
                            <Link to="/Cart">CartPage</Link>
                        </li>
                    </ul>
                </div> */}
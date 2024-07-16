import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import CarouselComponent from './components/carousel/CarouselComponent';
import ProductList from './components/products/ProductList';
import './App.css';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import AuthForm from './components/authentication/AuthForm';
import OrderPage from './components/order-page/OrderPage';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Menu />
      <ProductList />
      <Footer parametro1="Mi Aplicación" />
    </>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  console.log('location.pathname', location.pathname);
  const isAuthRoute = location.pathname === '/auth';
  
  let content;
  if (isAuthRoute) {
    content = <AuthForm />;
  } else {
    content = <MainContent />;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
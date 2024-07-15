import React from 'react';
import Header from './components/Header';
import CarouselComponent from './components/CarouselComponent';
import ProductList from './components/ProductList';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CarouselComponent />
      <Menu />
      <ProductList />
      <Footer parametro1="Mi Aplicación"/>
    </div>
  );
}

export default App;
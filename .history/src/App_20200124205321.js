import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Product/Products';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';
import Product from './components/Product/Product';
import Header from './ui/Header';
import Footer from './ui/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path ="/products" component={Products}/>
        <Route exact path ="/products/:id" component={Product}/>
        <Route exact path ="/add-product" component={AddProduct}/>
        <Route exact path ="/products/editar/:id" component={EditProduct}/>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;

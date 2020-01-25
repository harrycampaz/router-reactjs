import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Product/Products';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/products" component={Products}/>
        <Route exact path ="/products/:id" component={Produt}/>
        <Route exact path ="/add-product" component={AddProduct}/>
        <Route exact path ="/products/editar/:id" component={EditProduct}/>
      </Switch>
    </Router>

  );
}

export default App;

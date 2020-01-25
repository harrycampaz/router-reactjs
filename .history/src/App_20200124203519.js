import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Product/Products';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/add-product" component={AddProduct}/>
      </Switch>
    </Router>

  );
}

export default App;

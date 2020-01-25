import React, { useState, useEffect } from 'react';
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Product/Products';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';
import Product from './components/Product/Product';
import Header from './ui/Header';
import Footer from './ui/Footer';


function App() {

  const [products, setProducts]= useState([]);
  const [reloadProducts, setReloadProducts] = useState(true)


  useEffect(()=> {

    if(reloadProducts){
      fetchApi();
      setReloadProducts(false);
    }
    

  }, [reloadProducts])

  const fetchApi = async () => {
    const result = await axios.get('http://localhost:4000/store');

    console.log(result.data);

    setProducts(result.data);
    
  }


  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
        
          <Route exact path ="/products" render={() => (
            <Products products={products}/>
          )}/>
          <Route exact path ="/add-product" component={AddProduct}/>
          <Route exact path ="/products/:id" component={Product}/>
          <Route exact path ="/products/editar/:id" component={EditProduct}/>
        </Switch>
      </main>
      <Footer />
    </Router>

  );
}

export default App;

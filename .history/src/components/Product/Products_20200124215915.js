import React, { Fragment } from 'react';
import Product from './Product';

function Products({products}) {
    return (
        <Fragment>
  <h1 className="text-center">Product</h1>

  <ul className="list-group mt-5">
      {products.map(product => (
          <Product product={product}/>
      ))}
  </ul>
        </Fragment>
      
    );
}

export default Products;
import React from 'react';

function Product({product}) {
    return (
        
       <li className="list-group-item d-flex justify-content-between">
           <p data-categor>

{product.name} {' '}
    <span className="font-weight-bold">{product.precio}</span>
           </p>
           <div>

           </div>
       </li>
    );
}

export default Product;
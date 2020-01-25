import React from 'react';

function Product({product}) {
    return (
        
       <li className="list-group-item d-flex justify-content-between" data-category={product.category}>
           <p>

{product.name} {' '}
    <span className="font-weight-bold">{product.price}</span>
           </p>
           <div>

           </div>
       </li>
    );
}

export default Product;
import React from 'react';

function Product({product}) {
    return (
        
       <li className="list-group d-flex justify-content-between">
           <p>

{product.name}
    <span className="font-weght-bold">{product.price}</span>
           </p>
           <div>

           </div>
       </li>
    );
}

export default Product;
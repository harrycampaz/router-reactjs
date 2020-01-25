import React from 'react';

function Product({product}) {
    return (
        
        <h1 className="text-center">{product.name}</h1>
    );
}

export default Product;
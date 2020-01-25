import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
    return (

        <li className="list-group-item d-flex justify-content-between" data-category={product.category}>
            <p>

                {product.name} {' '}
                <span className="font-weight-bold">{product.price}</span>
            </p>
            <div>

                <Link to={`/products/${product.id}`} className="btn btn-success" >Editar</Link>

            </div>
        </li>
    );
}

export default Product;
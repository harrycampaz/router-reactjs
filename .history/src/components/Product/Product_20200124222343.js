import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
    return (

        <li data-category={product.category} className="list-group-item d-flex justify-content-between" >
            <p>

                {product.name} {' '}
                <span className="font-weight-bold">{product.price}</span>
            </p>
            <div>

                <Link to={`/products/editar/${product.id}`} className="btn btn-success mr-2" >Editar</Link>

            </div>
        </li>
    );
}

export default Product;
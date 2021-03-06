import React from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';
import Swal from 'sweetalert2';

function Product({ product }) {
    const deleteProduct = id => {

        console.log('Delete id: ', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

    }
    return (

        <li data-category={product.category} className="list-group-item d-flex justify-content-between" >
            <p>

                {product.name} {' '}
                <span className="font-weight-bold">{product.price}</span>
            </p>
            <div>
                <Link to={`/products/editar/${product.id}`} className="btn btn-success mr-2" >Edit</Link>


                <button onClick={() => deleteProduct(product.id)} type="submit" className="btn btn-danger">Delete</button>

            </div>
        </li>
    );
}

export default Product;
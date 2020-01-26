import React from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';
import Swal from 'sweetalert2';

function Product({ product }) {
    const deleteProduct =  id  => {

        console.log('Delete id: ', id);
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir este procesp!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: "Cancelar"
          }).then( async(result) => {
            if (result.value) {


                const url = `http://localhost:4000/store/${product.id}`;


                try {
                    const result = await Axios.put(url, data);
                    console.log(result);
        
                    if(result.status === 200){
                        Swal.fire(
                            'Productos Editado!',
                            'El  productos se edito satisfastoriamente!',
                            'success'
                          )
                    }else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Paso algo malo!',
                          })
                    }
        
         
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Paso algo malo!',
                      })   
                }  
              Swal.fire(
                'Eliminado!',
                'El producto fue eliminado.',
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
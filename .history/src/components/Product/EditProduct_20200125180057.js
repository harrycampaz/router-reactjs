import React, { useState, useRef } from 'react';
import Error from '../Error';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';


function EditProduct({product}) {

    const nameProductRef = useRef('');
    const priceProductRef = useRef('');
    const descriptionProductRef = useRef('');

    const [category, setCategory] = useState('');
    const [error, setError] = useState(false);

    const editProduct = async (e)  => {
        e.preventDefault();
        let categoryInit = (category === '')? product.category : category;

       

        const data = {
            name: nameProductRef.current.value,
            description:descriptionProductRef.current.value,
            price: priceProductRef.current.value,
            category: categoryInit
        }

        const url = `http://localhost:4000/store/${product.id}`;

        try {
            const result = await Axios.put(url, data);
            console.log(result);
            
 
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Paso algo malo!',
              })
            
            
        }
    
    }

    const readRadio =   (e) =>{
        setCategory(e.target.value)
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar Producto</h1>

            {(error) ? <Error msg="Todos los campos sin obligatorios" /> : null}

            <form
                className="mt-5"
                onSubmit={editProduct}
            >
                <div className="form-group">
                    <label>Nombre Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nombre Producto"
                        ref = {nameProductRef}
                        defaultValue ={product.name}
                    />
                </div>

                <div className="form-group">
                    <label>Descripcion del Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Description del Producto"
                        ref = {priceProductRef}
                        defaultValue={product.description}
                    />
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Precio del producto"
                        ref = {priceProductRef}
                        defaultValue={product.price}
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="tenis"
                            onChange={readRadio}
                            defaultChecked = {(product.category === 'tenis')}
                        />
                        <label className="form-check-label">
                            Tenis
                </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="ropa"
                            onChange={readRadio}
                            defaultChecked = {(product.category === 'ropa')}
                        />
                        <label className="form-check-label">
                            Ropa
                </label>
                    </div>

                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
            </form>
        </div>
    );
}

export default EditProduct;
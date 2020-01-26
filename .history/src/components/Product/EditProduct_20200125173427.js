import React, { useState, useRef } from 'react';
import Error from '../Error';



function EditProduct(props) {

    const nameProductRef = useRef('');
    const priceProductRef = useRef('');
    const descriptionProductRef = useRef('');

    const [category, setCategory] = useState('');
    const [description, setDecription] = useState('');
    const [error, setError] = useState(false);

    const editProduct = () => {

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
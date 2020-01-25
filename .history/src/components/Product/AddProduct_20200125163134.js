import React, { useState } from 'react';

function AddProduct(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');


    return (
        <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Agregar Nuevo Producto</h1>

        <form
            className="mt-5"
        >
            <div className="form-group">
                <label>Nombre Producto</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Nombre Producto"
                    onChange= {(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Precio</label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="price"
                    placeholder="Precio del producto"
                    onChange= {(e) => setName(e.target.value)}
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
                />
                <label className="form-check-label">
                    Ropa
                </label>
            </div>

            </div>

            <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
        </form>
    </div>
    );
}

export default AddProduct;
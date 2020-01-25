import React, { useState } from 'react';



function EditProduct(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
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
                    />
                </div>

                <div className="form-group">
                    <label>Descripcion del Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Description del Producto"
                    />
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Precio del producto"
                        onChange={(e) => setPrice(e.target.value)}
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
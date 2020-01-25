import React from 'react';

function AddProduct(props) {
    return (
        <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Agregar Nuevo Producto</h1>

        <form
            className="mt-5"
        >
            <div className="form-group">
                <label>Nombre Platillo</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="nombre" 
                    placeholder="Nombre Platillo"
                />
            </div>

            <div className="form-group">
                <label>Precio Platillo</label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="precio"
                    placeholder="Precio Platillo"
                />
            </div>

            <legend className="text-center">Categoría:</legend>
            <div className="text-center">
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categoria"
                    value="postre"
                />
                <label className="form-check-label">
                    Tenis
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categoria"
                    value="bebida"
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
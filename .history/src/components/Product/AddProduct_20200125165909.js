import React, { useState } from 'react';
import Error from '../Error';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';


function AddProduct({history}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDecription] = useState('');
    const [error, setError] = useState(false);


    const readRadio =   (e) =>{

        setCategory(e.target.value)
    }
    const saveProduct = async (e) =>{
        e.preventDefault();

        if(name === '' || price === '' || category === ''){
            setError(true);
            return;
        }
        setError(false);

        try {

            const result = await Axios.post('http://localhost:4000/store', {
                name,
                price,
                category,
                description
            });
 
            if(result.status === 201){
                Swal.fire(
                    'Productos Guardado!',
                    'El  productos de creo satisfastoriamente!',
                    'success'
                  )
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Paso algo malo!',
                  })
            }

        } catch (error){
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Paso algo malo!',
              })
            
        }

        history.push('/products');

    }


    return (
        <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Agregar Nuevo Producto</h1>

{(error) ? <Error msg ="Todos los campos sin obligatorios"/>: null}

        <form
            className="mt-5"
            onSubmit={saveProduct}
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
                <label>Descripcion del Producto</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="description" 
                    placeholder="Description del Producto"
                    onChange= {(e) => setDecription(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Precio</label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="price"
                    placeholder="Precio del producto"
                    onChange= {(e) => setPrice(e.target.value)}
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

            <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
        </form>
    </div>
    );
}

export default withRouter(AddProduct);
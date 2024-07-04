import React, { useEffect, useState } from 'react';
import api from '../api';
import Carrito from './Carrito';
//import { Spinner } from 'react-spinner';

const CamisetasInternacionales = () => {
    const [camisetas, setCamisetas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [carrito, setCarrito] = useState([]); // Estado del carrito de compras

    useEffect(() => {
        const fetchCamisetas = async () => {
            try {
                const response = await api.get('/camisetas/clubes-internacionales');
                setCamisetas(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchCamisetas();
    }, []);

    const agregarAlCarrito = (camiseta) => {
        // Agregar la camiseta al carrito de compras
        setCarrito([...carrito, camiseta]);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="camisetas-container">
            {camisetas.map((camiseta) => (
                <div key={camiseta.id} className="camiseta">
                    <img src={camiseta.Imagen} alt={camiseta.Nombre} />
                    <h2>{camiseta.Nombre}</h2>
                    <p>{camiseta.Descripción}</p>
                    <h2 className="precio">${camiseta.Precio} </h2>
                    <button className="btn-agregar" onClick={() => agregarAlCarrito(camiseta)}>Agregar al carrito</button>
                </div>
            ))}
            <Carrito carrito={carrito} />
        </div>
    );
};

export default CamisetasInternacionales;




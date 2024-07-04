import React, { useEffect, useState, useContext } from 'react';
import api from '../api';
import { CartContext } from '../core/CartContext';

const Home = () => {
    const [camisetas, setCamisetas] = useState([]);
    const [loading, setLoading] = useState  (true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchCamisetas = async () => {
            try {
                const response = await api.get('/camisetas');
                setCamisetas(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchCamisetas();
    }, []);

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
                    <button className="btn-agregar" onClick={() => addToCart(camiseta)}>Agregar al carrito</button>
                </div>
            ))}
        </div>
    );
};

export default Home;




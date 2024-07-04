import React, { useEffect, useState } from 'react';
import api from '../api';

const Talles = () => {
    const [talles, setTalles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTalles = async () => {
            try {
                const response = await api.get('/talles');
                setTalles(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchTalles();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='header-table'>
            <p>Las medidas incluidas son de referencia, pueden variar 1cm +/-</p>
            <h2>Camisetas:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Talle</th>
                        <th>Ancho</th>
                        <th>Altura</th>
                    </tr>
                </thead>
                <tbody>
                    {talles.map((talle) => (
                        <tr key={talle.id}>
                            <td>{talle.Talle}</td>
                            <td>{talle.Ancho}</td>
                            <td>{talle.Altura}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Talles;






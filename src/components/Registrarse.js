// src/components/Registrarse.js
import React, { useState, useContext } from 'react';
import logo from '../images/login.png';
import { register } from '../api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../core/AuthContext';

const Registrarse = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const { loginAuth } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            if(response.success){
                setSuccess(response.data.message);
                setError(null);
                // Autenticar al usuario después de registrarse
                loginAuth(response.data.token, response.data.user);
                // Redirigir al usuario a la página de inicio
                navigate('/', { replace: true });
            } else{
                setError(response.error);
                setSuccess(null);
            }   
        } catch (error) {
            setError(error.error);
            setSuccess(null);
        }
    };

    return (
        <div className="container-register">
            <div className="card">
                <div className="card-header">
                    <img src={logo} alt="Logo" className="logo-register" />
                </div>
                <h2 className="title">Registrarse</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="password_confirmation">Confirmar Contraseña</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    {success && (
                        <div className="success-message">
                            {success}
                        </div>
                    )}
                    <button type="submit" className="button">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Registrarse;

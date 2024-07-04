import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import casacasRetro1 from '../images/login.png';
import { login } from '../api';
import { AuthContext } from '../core/AuthContext';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            const response = await login(formData);
            if(response.success){
                setSuccess(response.data.message);
                setError(null);
                // Autenticar al usuario
                loginAuth(response.data.token, response.data.user);
                // Redirigir al usuario al inicio
                navigate('/', { replace: true });
            }else{
                setError(response.error);
                setSuccess(null);
            }
        } catch (error) {
            setError(error.error);
            setSuccess(null);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={casacasRetro1} alt="Logo" className="h-16" />
                </div>
                <h2 className="text-2xl mb-6 text-center">Iniciar Sesión</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    {success && (
                        <div className="success-message">
                            {success}
                        </div>
                    )}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Iniciar Sesión</button>
                </form>
                <div className="mt-4 text-center">
                    <p>¿No tienes una cuenta? <Link to="/registrarse" className="text-blue-500 hover:underline">Regístrate aquí</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

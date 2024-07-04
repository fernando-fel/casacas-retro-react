import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Talles from './components/Talles';
import CamisetasNacionales from './components/CamisetasNacionales';
import CamisetasInternacionales from './components/CamisetasInternacionales';
import Selecciones from './components/Selecciones';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Registrarse from './components/Registrarse';
import Login from './components/Login';
import Carrito from './components/Carrito';
import { AuthProvider } from './core/AuthContext';
import { CartProvider } from './core/CartContext';

//definir rutas de la aplicación
const AppRoutes = () => (
    <AuthProvider>
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrarse" element={<Registrarse />} />
                    <Route path="/camisetas/clubes-nacionales" element={<CamisetasNacionales />} />
                    <Route path="/camisetas/clubes-internacionales" element={<CamisetasInternacionales />} />
                    <Route path="/camisetas/selecciones" element={<Selecciones />} />
                    <Route path="/talles" element={<Talles />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </CartProvider>
    </AuthProvider>
);

export default AppRoutes;


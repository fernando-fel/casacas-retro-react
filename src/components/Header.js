import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logoInicio from '../images/casacasRetro1.png';
import { SlArrowDown } from "react-icons/sl";
import { GiShoppingCart } from "react-icons/gi";
import { FaUser } from "react-icons/fa"; //icono de perfil
import { AuthContext } from '../core/AuthContext';
import { CartContext } from '../core/CartContext';
import Carrito from './Carrito';

const Header = () => {
    const { userInfo, logoutAuth } = useContext(AuthContext);
    const [showCart, setShowCart] = useState(false);
    const { cart } = useContext(CartContext);

    const handleShowCart = () => {
        setShowCart(true);
    };

    const handleHideCart = () => {
        setShowCart(false);
    };

    return (
        <header className="header">
            <nav className='container'>
                <div className="logo">
                    <Link to="/"><img src={logoInicio} alt="Casacas" /></Link>
                </div>
                <div className="nav-links">
                    <Link exact to="/" activeClassName="active">
                        Inicio
                    </Link>
                    <div className="dropdown">
                        <Link to="/camisetas" activeClassName="active">
                            Camisetas <SlArrowDown />
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/camisetas/clubes-nacionales" activeClassName="active">Clubes Nacionales</Link>
                            </li>
                            <li>
                                <Link to="/camisetas/clubes-internacionales" activeClassName="active">Clubes Internacionales</Link>
                            </li>
                            <li>
                                <Link to="/camisetas/selecciones" activeClassName="active">Selecciones</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/talles" activeClassName="active">
                        Guía de Talles
                    </Link>
                </div>
                <div className="header-right">
                    {userInfo ? (
                        <>
                            <span className="username">{userInfo.name}</span>
                            <FaUser className="profile-icon" />
                            <Link to="/" onClick={logoutAuth
                                // Eliminar el token de acceso de localStorage
                                //localStorage.removeItem('auth_token');
                                // Actualizar el estado de userInfo en el contexto de autenticación
                                //setUserInfo(null);
                            }>Cerrar sesión</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/registrarse">Registrarse</Link>
                            <Link to="/login">Ingresar</Link>
                        </>
                    )}
                    <Link to="/carrito" title="Carrito" onClick={handleShowCart}><GiShoppingCart />
                        {cart.length > 0 && (
                            <span className="cart-count">{cart.length}</span>
                        )}
                    </Link>
                    {showCart && <Carrito onClose={handleHideCart} />}
                </div>
            </nav>
        </header>
    );
};

export default Header;


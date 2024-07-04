import React, { useContext } from 'react';
import { CartContext } from '../core/CartContext';

const Carrito = ({ onClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2>Carrito de compras</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <img src={product.Imagen} alt={product.Nombre} />
                        <h2>{product.Nombre}</h2>
                        <p>{product.Descripción}</p>
                        <h2 className="precio">${product.Precio}</h2>
                        <span>Cantidad: {product.Cantidad}</span>
                        <button className="btn-eliminar" onClick={() => removeFromCart(product)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${cart.reduce((acc, product) => acc + product.Precio * product.Cantidad, 0)}</p>
            <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Carrito;
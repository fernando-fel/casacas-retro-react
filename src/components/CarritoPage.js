import React from 'react';
import { CartProvider } from '../core/CartContext';
import Carrito from './Carrito';

const CarritoPage = () => {
    return (
        <CartProvider>
            <Carrito />
        </CartProvider>
    );
};

export default CarritoPage;
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('auth_token');
        const storedUserInfo = localStorage.getItem('user_info');
        if (storedToken && storedUserInfo) {
            setAuthToken(storedToken);
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, []);

    const loginAuth = (token, user) => {
        setAuthToken(token);
        setUserInfo(user);
        localStorage.setItem('auth_token', token);
        localStorage.setItem('user_info', JSON.stringify(user));
    };

    const logoutAuth = () => {
        setAuthToken(null);
        setUserInfo(null);
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_info');
    };

    return (
        <AuthContext.Provider value={{ userInfo, authToken, loginAuth, logoutAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
/*
Este contexto de autenticación tiene un estado userInfo que almacena el nombre del usuario logueado. 
El proveedor AuthProvider se encarga de proporcionar este estado a los componentes que lo necesiten.

*/
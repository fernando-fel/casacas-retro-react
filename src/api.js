import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register = async (formData) => {
    try {
        const response = await api.post('/register', formData);
        return { success: true, data: response.data };
    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.message;
        return { success: false, error: errorMessage || 'Error desconocido' };
    }
};
export const login = async (formData) => {
    try {
        const response = await api.post('/login', formData);
        return { success: true, data: response.data };
    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.message;
        return { success: false, error: errorMessage || 'Error desconocido' };
    }
};

//el parámetro categoria indica la ruta API que se debe llamar 
//(por ejemplo, clubes-nacionales, clubes-internacionales, etc.)
export const getCamisetasByCategoria = async (categoria) => {
    try {
        const response = await api.get(`/camisetas/${categoria}`);
        return { success: true, data: response.data };
    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.message;
        return { success: false, error: errorMessage || 'Error desconocido' };
    }
};

export default api;


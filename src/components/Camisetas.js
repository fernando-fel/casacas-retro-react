
const Camiseta = ({ camiseta, agregarAlCarrito }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAgregarAlCarrito = () => {
        setShowModal(true);
    };

    const handleAceptar = () => {
        agregarAlCarrito(camiseta);
        setShowModal(false);
    };

    const handleCancelar = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
            {showModal && (
                <Modal>
                    <h2>¿Seguro que deseas agregar al carrito?</h2>
                    <p>{camiseta.Nombre} - ${camiseta.Precio}</p>
                    <button onClick={handleAceptar}>Aceptar</button>
                    <button onClick={handleCancelar}>Cancelar</button>
                </Modal>
            )}
        </div>
    );
};
import { Button } from '@material-tailwind/react';

const Location: React.FC = () => {
    /**const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);*/

    return (
        <div className="relative"> 


        {/** 
            <button
                onClick={openPopup} 
                className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
            >
                Abrir Popup
            </button>
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-4">Buscar Ubicación</h2>
                        <input
                            type="text"
                            placeholder="Ingrese nombre de ubicación"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <button
                            onClick={closePopup}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
                */}
            <Button className='' variant='text' size='sm'><span className="material-symbols-rounded mr-2 text-primary_2">add_location_alt</span>Ubicación</Button>
        </div>
    );
};

export default Location;

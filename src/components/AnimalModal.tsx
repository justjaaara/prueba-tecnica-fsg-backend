import type { Animal } from '../types/Animal';

interface AnimalModalProps {
  animal: Animal | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: number) => void;
}

export const AnimalModal = ({ animal, isOpen, onClose, onDelete }: AnimalModalProps) => {
  if (!isOpen || !animal) return null;

  const handleDelete = () => {
    onDelete(animal.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">#{animal.id}: {animal.nombre}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-row gap-6 text-center justify-between items-center">
          <div className="md:w-1/2">
            <div className="mb-4">
              <h3 className="text-gray-300 font-semibold mb-1">Tipo de animal</h3>
              <p className="text-white">{animal.tipo}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-300 font-semibold mb-1">Descripción del animal</h3>
              <p className="text-white">{animal.descripcion}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-300 font-semibold mb-1">Enlace a Wikipedia</h3>
              <a 
                href={animal.wikipediaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Ver en Wikipedia
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h-72 rounded-lg overflow-hidden border border-gray-700">
              <img 
                src={animal.imagenUrl} 
                alt={animal.nombre} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button 
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors"
          >
            Eliminar animal
          </button>
         
        </div>
      </div>
    </div>
  );
};
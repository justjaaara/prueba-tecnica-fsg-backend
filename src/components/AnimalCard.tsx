import type { Animal } from "../types/Animal";

interface AnimalCardProps {
  animal: Animal;
  onClick: (animal: Animal) => void;
  onDelete: (id: number) => void;
}

export const AnimalCard = ({ animal, onClick, onDelete }: AnimalCardProps) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se abra el modal al hacer clic en el botón de eliminar
    onDelete(animal.id);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg cursor-pointer group"
      onClick={() => onClick(animal)}
    >
      <div className="absolute top-2 right-2 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
        #{animal.id}
      </div>
      
      {/* Botón de eliminar */}
      <div className="absolute top-2 left-2 ">
        <button 
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full"
          aria-label="Eliminar"
        >
          Eliminar
        </button>
      </div>
      
      <div className="h-48 overflow-hidden">
        <img 
          src={animal.imagenUrl} 
          alt={animal.nombre}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-white mb-1">{animal.nombre}</h3>
        <p className="text-gray-300 text-sm">{animal.tipo}</p>
      </div>
    </div>
  );
};

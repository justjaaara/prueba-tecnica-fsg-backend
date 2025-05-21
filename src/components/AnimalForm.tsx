import { useState, type FormEvent } from 'react';
import type { Animal, AnimalType } from '../types/Animal';

interface AnimalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (animal: Omit<Animal, 'id'>) => void;
}

export const AnimalForm = ({ isOpen, onClose, onSubmit }: AnimalFormProps) => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState<AnimalType>('MAMIFERO');
  const [descripcion, setDescripcion] = useState('');
  const [wikipediaUrl, setWikipediaUrl] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      nombre,
      tipo,
      descripcion,
      wikipediaUrl,
      imagenUrl,
    });
    resetForm();
  };

  const resetForm = () => {
    setNombre('');
    setTipo('MAMIFERO');
    setDescripcion('');
    setWikipediaUrl('');
    setImagenUrl('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Añadir nuevo animal</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Nombre del animal</label>
              <input
                id="name"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-gray-300 mb-1">Tipo de animal</label>
              <select
                id="type"
                value={tipo}
                onChange={(e) => setTipo(e.target.value as AnimalType)}
                required
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="AVE">Ave</option>
                <option value="MAMIFERO">Mamífero</option>
                <option value="ANFIBIO">Anfibio</option>
                <option value="REPTIL">Reptil</option>
                <option value="PEZ">Pez</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-gray-300 mb-1">Descripción</label>
              <textarea
                id="description"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
                rows={4}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="wikipediaUrl" className="block text-gray-300 mb-1">Enlace a Wikipedia</label>
              <input
                id="wikipediaUrl"
                type="url"
                value={wikipediaUrl}
                onChange={(e) => setWikipediaUrl(e.target.value)}
                required
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="imageUrl" className="block text-gray-300 mb-1">URL de la imagen</label>
              <input
                id="imageUrl"
                type="url"
                value={imagenUrl}
                onChange={(e) => setImagenUrl(e.target.value)}
                required
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-lg text-white transition-colors"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
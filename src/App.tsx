import { useState, useEffect } from "react";
import "./App.css";
import { AnimalCard } from "./components/AnimalCard";
import { AnimalModal } from "./components/AnimalModal";
import { AnimalForm } from "./components/AnimalForm";
import { AddAnimalButton } from "./components/AddAnimalButton";
import { SearchBar } from "./components/SearchBar";
import { animalService } from "./services/animalService";
import type { Animal } from "./types/Animal";

function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<Animal | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      setIsLoading(true);
      try {
        const data = await animalService.getAll();
        setAnimals(data);
        setError(null);
      } catch (err) {
        setError("Error al cargar los datos. Por favor, intenta de nuevo.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const handleAnimalClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  const handleFormSubmit = async (animalData: Omit<Animal, "id">) => {
    try {
      const newAnimal = await animalService.create(animalData);
      if (newAnimal) {
        setAnimals((prev) => [...prev, newAnimal]);
      }
      setIsFormOpen(false);
    } catch (err) {
      console.error("Error al crear el animal:", err);
    }
  };

  const handleDeleteAnimal = async (id: number) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este animal?")) {
      const success = await animalService.delete(id);
      if (success) {
        setAnimals((prev) => prev.filter((animal) => animal.id !== id));
        if (selectedAnimal?.id === id) {
          handleCloseModal();
        }
        // Si se eliminó el animal de la búsqueda, limpiar el resultado
        if (searchResult?.id === id) {
          setSearchResult(null);
        }
      }
    }
  };

  const handleSearch = async (id: number) => {
    try {
      setIsLoading(true);
      const animal = await animalService.getById(id);

      if (animal) {
        setSearchResult(animal);
        setError(null);
      } else {
        setSearchResult(null);
        setError(`No se encontró ningún animal con el ID: ${id}`);
      }
    } catch (err) {
      setSearchResult(null);
      setError("Error al buscar el animal. Por favor, intenta de nuevo.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Catálogo de Animales
        </h1>
      </header>

      <SearchBar onSearch={handleSearch} />

      {searchResult && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Resultado de la búsqueda</h2>
            <button
              onClick={handleClearSearch}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
            >
              Volver a todos los animales
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimalCard
              animal={searchResult}
              onClick={handleAnimalClick}
              onDelete={handleDeleteAnimal}
            />
          </div>
        </div>
      )}

      {!searchResult && (
        isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4 bg-red-100 bg-opacity-10 rounded-lg">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {animals.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onClick={handleAnimalClick}
                onDelete={handleDeleteAnimal}
              />
            ))}
          </div>
        )
      )}

      <AnimalModal
        animal={selectedAnimal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteAnimal}
      />

      <AnimalForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
      />

      <AddAnimalButton onClick={() => setIsFormOpen(true)} />
    </div>
  );
}

export default App;

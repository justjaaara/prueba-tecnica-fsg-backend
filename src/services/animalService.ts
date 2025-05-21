import type { Animal } from "../types/Animal";

const API_URL = import.meta.env.VITE_API_URL_BACKEND;

export const animalService = {
  //Método para obtener todos los animales
  getAll: async (): Promise<Animal[]> => {
    try {
      const response = await fetch(`${API_URL}/animals`);
      if (!response.ok) {
        throw new Error("Error al obtener los animales");
      }
      return await response.json();
    } catch (error) {
      console.error("Error obteniendo los animales:", error);
      throw error;
    }
  },

  // Método para obtener un animal por su id
  getById: async (id: number): Promise<Animal | null> => {
    try {
      const response = await fetch(`${API_URL}/animals/${id}`);
      if (!response.ok) {
        throw new Error(`Error al obtener el animal con id ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error obteniendo el animal con id ${id}:`, error);
      return null;
    }
  },

  // Método para crear un nuevo animal
  create: async (animal: Omit<Animal, "id">): Promise<Animal | null> => {
    try {
      const response = await fetch(`${API_URL}/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(animal),
      });
      if (!response.ok) {
        throw new Error("Error al crear el animal");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error creando el animal:`, error);
      return null;
    }
  },

  // Método para eliminar un animal por su id
  delete: async (id: number): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/animals/${id}`, {
        method: "DELETE",
      });
      return response.ok;
    } catch (error) {
      console.error(`Error eliminando el animal con id ${id}:`, error);
      return false;
    }
  },
};

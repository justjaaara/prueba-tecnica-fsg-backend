export type AnimalType = "AVE" | "MAMIFERO" | "REPTIL" | "ANFIBIO" | "PEZ";

export interface Animal {
  id: number;
  nombre: string;
  tipo: AnimalType;
  descripcion: string;
  wikipediaUrl: string;
  imagenUrl: string;
}

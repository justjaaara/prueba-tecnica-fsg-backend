export type AnimalType = "AVE" | "MAMIFERO" | "REPTIL" | "ANFIBIO" | "PEZ";

export interface Animal {
  id: number;
  name: string;
  type: AnimalType;
  description: string;
  wikipediaUrl: string;
  imagenUrl: string;
}

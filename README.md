# 🦁 Catálogo de Animales - Frontend

Aplicación web desarrollada con React, TypeScript y Tailwind CSS que permite gestionar un catálogo de animales mediante una interfaz moderna e intuitiva.

## 📋 Características principales

- **Visualización de animales**: Muestra los animales en tarjetas con imagen y detalles básicos
- **Búsqueda por ID**: Permite buscar animales específicos mediante su identificador único
- **Gestión CRUD**: Implementa operaciones de Crear, Leer y Eliminar (CRD) animales
- **Interfaz moderna**: Diseño intuitivo con tema oscuro y componentes con estilo
- **Modal de detalles**: Visualización completa de la información de cada animal
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 🛠️ Tecnologías utilizadas

- **React 19**: Biblioteca de interfaces de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Vite**: Herramienta de desarrollo rápida
- **Tailwind CSS 4**: Framework de utilidades CSS
- **Fetch API**: Para comunicación con el backend

## 📦 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AddAnimalButton.tsx
│   ├── AnimalCard.tsx
│   ├── AnimalForm.tsx
│   ├── AnimalModal.tsx
│   └── SearchBar.tsx
├── services/            # Servicios y comunicación con API
│   └── animalService.ts
├── types/               # Definiciones de tipos
│   └── Animal.ts
├── App.tsx              # Componente principal
└── main.tsx             # Punto de entrada
```

## 🚀 Instalación y uso

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd frontend
```

2. **Instalar dependencias**

```bash
pnpm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto con la URL del backend:

```
VITE_API_URL_BACKEND=http://localhost:3000
```

4. **Iniciar el servidor de desarrollo**

```bash
pnpm dev
```

5. **Generar build de producción**

```bash
pnpm build
```

## 💻 Funcionalidades detalladas

### Vista principal

- Listado de animales en cards con imagen, nombre y tipo
- Cada card muestra el ID del animal y ofrece opción de eliminación
- Al hacer clic en una card, se abre un modal con todos los detalles

### Búsqueda

- Barra de búsqueda para encontrar animales por ID
- Muestra resultados específicos o mensaje si no se encuentra el animal

### Modal de detalles

- Nombre y tipo del animal
- Descripción completa
- Enlace a Wikipedia para más información
- Imagen a mayor tamaño
- Opción para eliminar el animal

### Formulario de creación

- Campos validados para nombre, tipo, descripción, URL de Wikipedia e imagen
- Selector de tipo de animal (Aves, Mamíferos, Anfibios, Reptiles o Peces)
- Botones para cancelar o guardar

## 🔗 Conexión con el backend

La aplicación se comunica con un backend REST API a través del servicio `animalService.ts`, que implementa métodos para:

- Obtener todos los animales
- Obtener un animal por ID
- Crear un nuevo animal
- Eliminar un animal existente

## 📱 Responsive Design

La interfaz está optimizada para diferentes dispositivos:

- **Móviles**: Vista de 1 columna
- **Tablets**: Vista de 2-3 columnas
- **Escritorio**: Vista de 4-5 columnas

## 🎨 Tema y diseño

- Tema oscuro con gradientes elegantes
- Colores principales: azul, índigo y gris oscuro
- Interfaz moderna con transiciones y efectos hover
- Cards con sombras y bordes redondeados

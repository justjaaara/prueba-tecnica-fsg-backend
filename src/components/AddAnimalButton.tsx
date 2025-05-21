interface AddAnimalButtonProps {
  onClick: () => void;
}

export const AddAnimalButton = ({ onClick }: AddAnimalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Añadir animal"
    >
      Agregar Animal
    </button>
  );
};
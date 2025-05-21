import { useState, type FormEvent } from "react";

interface SearchBarProps {
  onSearch: (id: number) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchId, setSearchId] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = parseInt(searchId);
    if (!isNaN(id)) {
      onSearch(id);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar animal por ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="w-full px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-r-lg text-white"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};
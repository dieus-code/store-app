import React from "react";

interface SearchBarProps {
  searchItem: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchItem, onSearchChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchItem}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
      />
    </div>
  );
}
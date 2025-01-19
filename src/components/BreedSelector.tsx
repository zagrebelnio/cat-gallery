import React, { ChangeEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBreeds } from '../services/cats';
import type { CatBreed } from '../types/cats';

interface BreedSelectorProps {
  selectedBreed: string;
  onBreedChange: (breedId: string) => void;
}

const BreedSelector: React.FC<BreedSelectorProps> = ({
  selectedBreed,
  onBreedChange,
}) => {
  const {
    data: breeds,
    isLoading,
    isError,
  } = useQuery<CatBreed[], Error>({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  });

  if (isLoading) return <p>Loading breeds...</p>;
  if (isError) return <p>Failed to load breed data.</p>;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onBreedChange(e.target.value);
  };

  return (
    <select
      value={selectedBreed}
      onChange={handleChange}
      className="block min-w-64 text-black px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option value="">All Breeds</option>
      {breeds?.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default BreedSelector;

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchCats } from '../services/cats';
import type { CatImage } from '../types/cats';
import BreedSelector from '../components/BreedSelector';
import CatCard from '../components/CatCard';

const Home: React.FC = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');

  const {
    data: cats,
    isLoading,
    isError,
    error,
  } = useQuery<CatImage[], Error>({
    queryKey: ['cats', selectedBreed],
    queryFn: () => fetchCats(selectedBreed, 12),
  });

  const handleBreedChange = (breedId: string) => {
    setSelectedBreed(breedId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || 'Something went wrong'}</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Cat Gallery</h1>

      <div className="flex justify-center mb-4">
        <BreedSelector
          selectedBreed={selectedBreed}
          onBreedChange={handleBreedChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats?.map((cat) => (
          <CatCard
            key={cat.id}
            catId={cat.id}
            imageUrl={cat.url}
            breedName={cat.breeds[0]?.name}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

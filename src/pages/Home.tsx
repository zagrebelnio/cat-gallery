import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchCats } from '../services/cats';
import type { CatImage } from '../types/cats';
import BreedSelector from '../components/BreedSelector';
import CatCard from '../components/CatCard';
import Spinner from '../components/Spinner';

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
    return (
      <main className="container mx-auto p-4 flex justify-center items-center h-screen">
        <Spinner />
      </main>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-8 px-4 text-lg">
        Error: {error?.message || 'Something went wrong'}
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <BreedSelector
          selectedBreed={selectedBreed}
          onBreedChange={handleBreedChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats?.map((cat) => <CatCard key={cat.id} cat={cat} />)}
      </div>
    </main>
  );
};

export default Home;

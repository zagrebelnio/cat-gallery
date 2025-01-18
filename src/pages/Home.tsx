import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchCats } from '../services/cats';
import type { CatImage } from '../types/cats';

const Home: React.FC = () => {
  const {
    data: cats,
    isLoading,
    isError,
    error,
  } = useQuery<CatImage[], Error>({
    queryKey: ['cats', 12],
    queryFn: () => fetchCats(12),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || 'Something went wrong'}</div>;
  }

  return (
    <main className="container p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Cat Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats?.map((cat) => (
          <div
            key={cat.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={cat.url}
              alt={cat.breeds[0]?.name || 'Cute Cat'}
              className="w-full h-64 object-cover"
            />
            <div className="p-2">
              {cat.breeds.length > 0 ? (
                <p className="font-semibold text-center">
                  {cat.breeds[0].name}
                </p>
              ) : (
                <p className="font-light text-center">Unknown breed</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

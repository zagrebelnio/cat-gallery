import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useQueries } from '@tanstack/react-query';
import CatCard from '../components/CatCard';
import { fetchCatById } from '../services/cats';
import type { CatImage } from '../types/cats';

const Favorites: React.FC = () => {
  const { favoriteCatIds } = useFavorites();

  const queries = useQueries({
    queries: favoriteCatIds.map((catId) => {
      return {
        queryKey: ['catById', catId],
        queryFn: () => fetchCatById(catId),
      };
    }),
  });

  if (favoriteCatIds.length === 0) {
    return (
      <div className="text-center">
        No favorite cats yet. Go to the home page to add some!
      </div>
    );
  }

  const isLoading = queries.some((q) => q.isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const isError = queries.some((q) => q.isError);
  if (isError) {
    return <div>Error loading favorites</div>;
  }

  const cats = queries.map((q) => q.data).filter(Boolean) as CatImage[];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">My Favorite Cats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats.map((cat) => (
          <CatCard
            key={cat.id}
            catId={cat.id}
            imageUrl={cat.url}
            breedName={cat.breeds[0]?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

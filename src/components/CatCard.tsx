import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { CatImage } from '../types/cats';

interface CatCardProps {
  cat: CatImage;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    toggleFavorite(cat.id);
  };

  return (
    <div
      key={cat.id}
      className={`relative border border-2 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${isFavorite(cat.id) ? 'border-red-500' : 'border-gray-200'}`}
    >
      <img
        src={cat.url}
        alt={cat.breeds[0]?.name || 'Cute Cat'}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold text-center">
          {cat.breeds[0]?.name || 'Unknown Breed'}
        </p>
      </div>

      <button
        onClick={handleFavoriteClick}
        className="w-full py-2 bg-gray-800 text-white font-semibold hover:bg-gray-700 transition z-10 relative"
        style={{ fontSize: '1.5rem' }}
      >
        {isFavorite(cat.id) ? '❤️' : '🤍'}
      </button>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white flex flex-col items-center opacity-0 hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-center gap-2 mt-12 mb-4">
          <p className="text-lg font-bold">{cat.breeds[0]?.origin}</p>
          <img
            src={`https://flagsapi.com/${cat.breeds[0]?.country_code}/flat/64.png`}
            alt={cat.breeds[0]?.origin}
            className="h-8"
          />
        </div>
        <p className="text-sm text-center px-4">{cat.breeds[0]?.temperament}</p>
        <p className="text-sm text-center px-4">
          {cat.breeds[0]?.life_span} years
        </p>
      </div>
    </div>
  );
};

export default CatCard;

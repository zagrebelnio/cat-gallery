import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

interface CatCardProps {
  catId: string;
  imageUrl: string;
  breedName?: string;
}

const CatCard: React.FC<CatCardProps> = ({ catId, imageUrl, breedName }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    toggleFavorite(catId);
  };

  return (
    <div
      key={catId}
      className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${isFavorite(catId) ? 'border-red-500' : 'border-gray-200'}`}
    >
      <img
        src={imageUrl}
        alt={breedName || 'Cute Cat'}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold text-center">
          {breedName || 'Unknown Breed'}
        </p>
      </div>

      <button
        onClick={handleFavoriteClick}
        className="w-full py-2 bg-gray-800 text-white font-semibold"
        style={{ fontSize: '1.5rem' }}
      >
        {isFavorite(catId) ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default CatCard;

import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoritesContextValue {
  favoriteCatIds: string[];
  toggleFavorite: (catId: string) => void;
  isFavorite: (catId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favoriteCatIds, setFavoriteCatIds] = useState<string[]>(() => {
    const stored = localStorage.getItem('favoriteCats');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteCats', JSON.stringify(favoriteCatIds));
  }, [favoriteCatIds]);

  const toggleFavorite = (catId: string) => {
    setFavoriteCatIds((prev) => {
      if (prev.includes(catId)) {
        return prev.filter((id) => id !== catId);
      } else {
        return [...prev, catId];
      }
    });
  };

  const isFavorite = (catId: string) => favoriteCatIds.includes(catId);

  return (
    <FavoritesContext.Provider
      value={{ favoriteCatIds, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}

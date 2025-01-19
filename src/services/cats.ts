import type { CatImage, CatBreed } from '../types/cats';

const apiKey = import.meta.env.VITE_CAT_API_KEY;
const baseUrl = import.meta.env.VITE_CAT_API_BASE_URL;

export async function fetchCats(
  breedId: string,
  limit: number = 10,
): Promise<CatImage[]> {
  const response = await fetch(
    `${baseUrl}/images/search?limit=${limit}&has_breeds=true&breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch cat images');
  }

  const data: CatImage[] = await response.json();
  return data;
}

export async function fetchBreeds(): Promise<CatBreed[]> {
  const response = await fetch(`${baseUrl}/breeds`, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cat breeds');
  }

  const data: CatBreed[] = await response.json();
  return data;
}

export async function fetchCatById(id: string): Promise<CatImage> {
  const response = await fetch(`${baseUrl}/images/${id}`, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cat image');
  }

  const data: CatImage = await response.json();
  return data;
}

interface CatBreed {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
}

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: CatBreed[];
}

const apiKey = import.meta.env.VITE_CAT_API_KEY;
const baseUrl = import.meta.env.VITE_CAT_API_BASE_URL;

export async function fetchCats(limit: number = 10): Promise<CatImage[]> {  
  const response = await fetch(`${baseUrl}/images/search?limit=${limit}`, {
    headers: {
      'x-api-key': apiKey,
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cat images');
  }

  const data: CatImage[] = await response.json();
  return data;
};
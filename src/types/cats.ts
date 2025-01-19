export interface CatBreed {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  country_code: string;
  life_span: string;
}

export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: CatBreed[];
}

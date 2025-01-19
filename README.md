# **Cat Gallery**

A simple web application that displays a gallery of cat images fetched from [TheCatAPI](https://thecatapi.com/). Users can **filter** cats by breed, **favorite/unfavorite** them, and **view only** their favorites. This project is built with **React**, **TypeScript**, **React Query**, **Tailwind CSS**, and **Vite**.

---

## **Features**

1. **Cat Image Gallery**

   - Retrieves cat images and breed data from TheCatAPI.
   - Responsive grid layout using Tailwind CSS.
   - Shows breed name under each cat image.

2. **Breed Filtering**

   - Dropdown to select a breed.
   - Displays only cats matching the selected breed.

3. **Favoriting Cats**

   - “Favorite” button or icon on each cat card.
   - Persists favorite status in `localStorage`.
   - Visual difference for favorite vs. non-favorite cats.
   - Favorites page displays only favorited cats.

4. **React & State Management**

   - Functional components with TypeScript.
   - React Query for API data fetching & caching.
   - Favorites stored in Context for global access.

5. **Deployment**

   - TO DO

6. **Presentation**
   - TO DO

---

## **Getting Started**

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cat-gallery.git
cd cat-gallery
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

```
VITE_CAT_API_BASE_URL=https://api.thecatapi.com/v1
VITE_CAT_API_KEY=YOUR_CAT_API_KEY
```

### 4. Run in Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## **Usage**

1. **Filter by Breed**

   - Select a breed from the dropdown. The gallery updates automatically.

2. **Favorite a Cat**

   - Click the heart or favorite icon to toggle favorite status.
   - Favorites are stored in `localStorage`, persisting across reloads.

3. **View Only Favorites**
   - Go to the Favorites page to see only your starred cats.

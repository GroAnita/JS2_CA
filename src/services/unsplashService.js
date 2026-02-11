const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const FALLBACK_AVATAR_URL = new URL(
  '../images/storiesplaceholder.png',
  import.meta.url
).href;
if (!ACCESS_KEY) {
  console.warn(
    'Unsplash Access Key is not set. Please set VITE_UNSPLASH_ACCESS_KEY in your environment variables.'
  );
}
let cachedAvatar = null;
let cachedPostImage = new Map();

export async function getRandomAvatar() {
  if (cachedAvatar) return cachedAvatar;
  try {
    const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=portrait fantasy portrait face&orientation=squarish&content_filter=high&client_id=${key}`
    );
    if (!response.ok) throw new Error();
    const data = await response.json();
    cachedAvatar = data?.urls?.small || FALLBACK_AVATAR_URL;
    return cachedAvatar;
  } catch {
    return FALLBACK_AVATAR_URL;
  }
}

export async function getRandomPostImage(postId, query = 'fantasy') {
  if (cachedPostImage.has(postId)) {
    return cachedPostImage.get(postId);
  }
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
        query
      )}&orientation=landscape&content_filter=high&client_id=${ACCESS_KEY}`
    );
    if (!response.ok) throw new Error();
    const data = await response.json();
    const imageUrl = data?.urls?.regular || FALLBACK_AVATAR_URL;
    cachedPostImage.set(postId, imageUrl);
    return imageUrl;
  } catch {
    return FALLBACK_AVATAR_URL;
  }
}

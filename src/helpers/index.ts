export const fetcher = async (url: string) => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return {
      error: true
    };
  });
};

export function localStorageProvider() {
  if (typeof window === 'undefined') return new Map();

  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}

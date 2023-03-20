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

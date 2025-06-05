interface GifApiResponse {
  data: {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string;
      };
    };
  }[];
}

interface Gif {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=c6eHgTPmeEkQnH8WB85dNbaNIWZ0tWgZ&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data }: GifApiResponse = await resp.json();

  const gifs: Gif[] = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

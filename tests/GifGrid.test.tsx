import { render, screen } from '@testing-library/react';
import { GifGrid } from '../src/components/GifGrid';
import { useFetchGifs } from '../src/components/hooks/useFetchGifs';

jest.mock('../src/components/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {
  const category = 'One Punch';

  test('should show loading at first  ', () => {
    jest.mocked(useFetchGifs).mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    //evaluate initial state
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('should show items when the images are charging it useFetchGifs  ', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    jest.mocked(useFetchGifs).mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

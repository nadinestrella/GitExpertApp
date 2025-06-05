import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../src/components/hooks/useFetchGifs';

describe('Test in hook useFetchGifs', () => {
  test('should return a initial State', () => {
    //resultado del hook
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    //desestructurar el result
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array with images and isLoading as a false', async () => {
    //resultado del hook
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    await waitFor(
      //callback: wait till images >0
      () => expect(result.current.images.length).toBeGreaterThan(0)
      // {timeout:2000}
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

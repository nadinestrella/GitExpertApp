import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Test in <GifExpertApp />', () => {
  test('should math the snapshot', () => {
    const { container } = render(<GifExpertApp />);
  });

  test('should render the title', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('GitExpertApp'));
  });

  test('should add a new category when submitted', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'Saitama' } });

    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText('Saitama'));
  });

  test('should not add duplicate category', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'One Punch' } });

    fireEvent.submit(screen.getByRole('form'));

    const allHeading = screen.getAllByText('One Punch');
    expect(allHeading.length).toBe(1);
  });
});

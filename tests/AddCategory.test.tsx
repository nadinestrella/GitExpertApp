import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../src/components/AddCategory';

describe('Test in <AddCategory />', () => {
  test('should change input value', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
    // screen.debug();
  });
  test('should call to onNewCategory if input has a value', () => {
    const inputValue = 'Saitama';
    //mock, a testing
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    //references
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form');
    //event
    fireEvent.input(input, { target: { value: inputValue } });
    //submit
    fireEvent.submit(form);
    //empty string?
    expect(input.value).toBe('');
    //call the function
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    // screen.debug();
  });
  test('should not to call onNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});

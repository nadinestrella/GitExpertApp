import { useState } from 'react';

type AddCategoryProps = {
  onNewCategory: (category: string) => void;
};

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories: string) => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

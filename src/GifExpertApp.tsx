import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  //TODO: API KEY EN GIPHY API

  const [categories, setCategories] = useState<string[]>(['One Punch']);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory onNewCategory={(value: string) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

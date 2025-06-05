import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GifExpertApp } from './GifExpertApp.tsx';

import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);

{
  /* API KEY c6eHgTPmeEkQnH8WB85dNbaNIWZ0tWgZ  */
}

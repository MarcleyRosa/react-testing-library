import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se a página contém um heading h2 com texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const textNotFound = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });

    expect(textNotFound).toBeInTheDocument();
  });
  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);

    const imageNotFound = screen
      .getByRole('img',
        { name: /Pikachu crying because the page requested was not found/i });

    expect(imageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});

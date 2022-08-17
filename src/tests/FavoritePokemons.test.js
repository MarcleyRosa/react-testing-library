import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Test se é exibida na tela a mensagem No favorite pokemon found.', () => {
    renderWithRouter(<FavoritePokemons />);

    const notFound = screen.getByText('No favorite pokemon found');

    expect(notFound).toBeInTheDocument();
  });
  it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<FavoritePokemons />);
  });
});

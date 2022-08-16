import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('Teste o componente <About.js />.', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen
      .getByRole('heading', { name: /About Pokédex/i, level: 2 });

    expect(aboutTitle).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const textFirstP = screen.getByText(/see more details/i);

    expect(textFirstP).toBeInTheDocument();

    const textSecondP = screen.getByText(/encyclopedia containing all Pokémons/i);

    expect(textSecondP).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const imageAbout = screen.getByRole('img', { name: /pokédex/i });
    expect(imageAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

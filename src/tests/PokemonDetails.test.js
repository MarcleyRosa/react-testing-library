import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('As informações detalhadas do pokémon selecionado são mostradas na tela:', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });

    expect(linkDetails).toBeInTheDocument();

    userEvent.click(linkDetails);

    const textDeatils = screen
      .getByRole('heading', { name: 'Pikachu Details', level: 2 });
    const h2Text = screen.getByRole('heading', { name: /summary/i, level: 2 });
    const textSumary = /This intelligent Pokémon roasts hard berries with electricity/i;
    const textDetails = screen.getByText(textSumary);

    expect(textDetails).toBeInTheDocument();
    expect(h2Text).toBeInTheDocument();
    expect(linkDetails).not.toBeInTheDocument();
    expect(textDeatils).toBeInTheDocument();
  });
  it('existe na página uma seção com os mapas com as localizações do pokémon:', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });

    expect(linkDetails).toBeInTheDocument();

    userEvent.click(linkDetails);

    const h2Text = screen
      .getByRole('heading', { name: /game locations of pikachu/i, level: 2 });

    expect(h2Text).toBeInTheDocument();

    const imageLocation = screen.getAllByRole('img', { name: /pikachu location/i });

    expect(imageLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imageLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });

    expect(linkDetails).toBeInTheDocument();

    userEvent.click(linkDetails);

    const labelText = screen.getByLabelText('Pokémon favoritado?');

    expect(labelText).toBeInTheDocument();
  });
});

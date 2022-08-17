import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
// import App from '../App';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon:', () => {
    renderWithRouter(<App />);

    const buttonClick = screen.getByRole('button', { name: 'Normal' });

    userEvent.click(buttonClick);

    const namePokemon = screen.getAllByText('Snorlax');
    const typePokemon = screen.getAllByText('Normal');

    expect(namePokemon[0]).toBeInTheDocument();
    expect(typePokemon[1]).toBeInTheDocument();
  });
  it('Teste se card do pokémon na Pokédex contém um link para exibir detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });

    expect(linkDetails).toBeInTheDocument();

    userEvent.click(linkDetails);

    const textDeatils = screen.getByText('Pikachu Details');

    expect(history.location.pathname).toBe('/pokemons/25');
    expect(textDeatils).toBeInTheDocument();

    const imagePokemon = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(imagePokemon).toHaveAttribute('alt', 'Pikachu sprite');
  });
  it('O link deve possuir a URL /pokemons/<id>, onde <id> id do pokémon exibido', () => {
    renderWithRouter(<App />);

    const linkURL = screen.getByRole('link', { name: /more details/i });

    expect(linkURL).toHaveAttribute('href', '/pokemons/25');
  });
  it('Teste se existe um ícone de estrela nos pokémons favoritados:', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkDetails);

    const favoriteIcon = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });

    userEvent.click(favoriteIcon);

    const favoriteImage = screen
      .getByRole('img', { name: /pikachu is marked as favorite/i });

    expect(favoriteImage).toHaveAttribute('src', '/star-icon.svg');
    expect(favoriteImage).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
  test('A imagem do pokémon. Ela deve conter um atributo src com a URL da imagem', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkDetails);

    const imagePokemon = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(imagePokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Se é o próximo pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);

    const buttonClick = screen.getByRole('button', { name: 'Próximo pokémon' });

    userEvent.click(buttonClick);

    const textFirstPokemonClick = screen.getByText('Charmander');
    expect(textFirstPokemonClick).toBeInTheDocument();

    userEvent.click(buttonClick);

    const textSecondPokemonClick = screen.getByText('Caterpie');
    expect(textSecondPokemonClick).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const textFirstPokemon = screen.getByText('Pikachu');
    expect(textFirstPokemon).toBeInTheDocument();

    const textSecondPokemon = screen.getByTestId('pokemon-type');
    expect(textSecondPokemon).toBeInTheDocument();
  });
  it('botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo', () => {
    renderWithRouter(<App />);

    const typePsychic = screen.getByRole('button', { name: /psychic/i });
    const typeAll = screen.getByRole('button', { name: /all/i });

    userEvent.click(typePsychic);

    const firstPokemon = screen.getByText('Alakazam');
    expect(firstPokemon).toBeInTheDocument();
    expect(typeAll).toBeInTheDocument();

    const buttonClick = screen.getByRole('button', { name: 'Próximo pokémon' });

    userEvent.click(buttonClick);

    const secondPokemon = screen.getByText('Mew');
    expect(secondPokemon).toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const attr = 'data-testid';
    const text = 'pokemon-type-button';

    const typeAll = screen.getByRole('button', { name: /all/i });
    expect(typeAll).not.toHaveAttribute(attr, text);

    const typeEletric = screen.getByRole('button', { name: /electric/i });
    expect(typeEletric).toHaveAttribute(attr, text);

    const typeFire = screen.getByRole('button', { name: /fire/i });
    expect(typeFire).toHaveAttribute(attr, text);

    const typeBug = screen.getByRole('button', { name: /bug/i });
    expect(typeBug).toHaveAttribute(attr, text);

    const typePoison = screen.getByRole('button', { name: /poison/i });
    expect(typePoison).toHaveAttribute(attr, text);

    const typePsychic = screen.getByRole('button', { name: /psychic/i });
    expect(typePsychic).toHaveAttribute(attr, text);

    const typeNormal = screen.getByRole('button', { name: /normal/i });
    expect(typeNormal).toHaveAttribute(attr, text);

    const typeDragon = screen.getByRole('button', { name: /dragon/i });
    expect(typeDragon).toHaveAttribute(attr, text);
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    renderWithRouter(<App />);

    const buttonFilter = screen.getByRole('button', { name: /psychic/i });
    const buttonAll = screen.getByRole('button', { name: /all/i });

    expect(buttonFilter).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonFilter);

    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);

    const textFirstPokemon = screen.getByText('Pikachu');

    expect(textFirstPokemon).toBeInTheDocument();
  });
});

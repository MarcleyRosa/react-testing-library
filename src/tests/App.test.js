import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto de links de navegação', () => {
  it('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);

    const linkTextHome = screen.getByRole('link', { name: 'Home' });

    expect(linkTextHome).toBeInTheDocument();
  });
  it('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);

    const linkTextAbout = screen.getByRole('link', { name: 'About' });

    expect(linkTextAbout).toBeInTheDocument();
  });
  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const linkTextFavoritePokemons = screen
      .getByRole('link', { name: 'Favorite Pokémons' });

    expect(linkTextFavoritePokemons).toBeInTheDocument();
  });
  it('página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
    const linkTextHome = screen.getByRole('link', { name: 'Home' });

    userEvent.click(linkTextHome);

    const aboutTitle = screen
      .getByRole('heading', { name: 'Encountered pokémons', level: 2 });

    expect(aboutTitle).toBeInTheDocument();
  });
  it('página About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
    const linkTextAbout = screen.getByRole('link', { name: 'About' });

    userEvent.click(linkTextAbout);

    const aboutTitle = screen
      .getByRole('heading', { name: 'About Pokédex', level: 2 });

    expect(aboutTitle).toBeInTheDocument();
  });
  it('página About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
    const linkTextFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(linkTextFavorite);

    const aboutTitle = screen
      .getByRole('heading', { name: 'Favorite pokémons', level: 2 });

    expect(aboutTitle).toBeInTheDocument();
  });
});

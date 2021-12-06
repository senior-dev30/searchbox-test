import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import SearchContainer from '.';

export default {
  title: 'core/SearchContainer',
};

export const SearchContainerComponent: Story<ComponentProps<typeof SearchContainer>> = (args) => {
  return <SearchContainer {...args} />;
};

SearchContainerComponent.args = {
  result: {
    name: 'Jabba Desilijic Tiure',
    height: '175',
    mass: '1,358',
    hair_color: 'n/a',
    skin_color: 'green-tan, brown',
    eye_color: 'orange',
    birth_year: '600BBY',
    gender: 'hermaphrodite',
    homeworld: 'https://swapi.dev/api/planets/24/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
    ],
    species: ['https://swapi.dev/api/species/5/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T17:11:31.638000Z',
    edited: '2014-12-20T21:17:50.338000Z',
    url: 'https://swapi.dev/api/people/16/',
  },
};

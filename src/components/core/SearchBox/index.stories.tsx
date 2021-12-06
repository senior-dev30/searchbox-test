import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBox from '.';

export default {
  title: 'core/SearchBox',
};

export const SearchBoxComponent: Story<ComponentProps<typeof SearchBox>> = (args) => {
  return <SearchBox {...args} />;
};
SearchBoxComponent.args = {
  dropdownList: [
    {
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
    {
      name: 'Jar Jar Binks',
      height: '196',
      mass: '66',
      hair_color: 'none',
      skin_color: 'orange',
      eye_color: 'orange',
      birth_year: '52BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/8/',
      films: ['https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/'],
      species: ['https://swapi.dev/api/species/12/'],
      vehicles: [],
      starships: [],
      created: '2014-12-19T17:29:32.489000Z',
      edited: '2014-12-20T21:17:50.383000Z',
      url: 'https://swapi.dev/api/people/36/',
    },
  ],
  onSelect: action('Clicked'),
  onChange: action('Changed'),
  openDropdown: true,
};

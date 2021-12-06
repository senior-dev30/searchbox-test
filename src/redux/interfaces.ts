export interface InitialState {
  peopleData: PeopleState;
}

export interface PeopleState {
  searchDropdown?: (PeopleInterface | null)[];
  searching: boolean;
}

export interface PeopleInterface {
  name: string;
  height: string | null;
  mass: string | null;
  hair_color: string | null;
  skin_color: string | null;
  eye_color: string | null;
  birth_year: string | null;
  gender: string | null;
  homeworld: string | null;
  films: (string | null)[];
  species: (string | null)[];
  vehicles: (string | null)[];
  starships: (string | null)[];
  created: string | null;
  edited: string | null;
  url: string | null;
}

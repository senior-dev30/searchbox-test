import React from 'react';
import { SearchInput, Wrapper } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { PeopleInterface } from 'redux/interfaces';

type Props = {
  onSelect?: (value: PeopleInterface | null) => void;
  onChange: (value: string) => void;
  dropdownList?: (PeopleInterface | null)[];
  openDropdown: boolean;
};

const SearchBox = ({
  onSelect,
  dropdownList,
  openDropdown,
  onChange,
}: Props): React.ReactElement => {
  return (
    <Wrapper>
      <SearchInput
        placeholder="Search..."
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <SearchIcon />
      {openDropdown && dropdownList && dropdownList?.length > 0 && (
        <div className="dropdown">
          {dropdownList?.map((list, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => {
                onSelect && onSelect(list);
              }}
              onKeyDown={undefined}
              role="presentation"
            >
              {list?.name}
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default SearchBox;

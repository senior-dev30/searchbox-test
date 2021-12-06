import SearchBox from 'components/core/SearchBox';
import { PeopleInterface } from 'redux/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { actionSearch, reset } from 'redux/actions/people';
import { InitialState } from 'redux/interfaces';
import SearchContainer from 'components/core/SearchContainer';

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState<PeopleInterface | null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(true);
  const [searchKey, setSearchKey] = useState<string>('');
  const dispatch = useDispatch();
  const dropdownList = useSelector((state: InitialState) => state?.peopleData.searchDropdown);
  const searching = useSelector((state: InitialState) => state?.peopleData.searching);
  const onSelect = (value: PeopleInterface | null) => {
    setSelectedItem(value);
    setOpenDropdown(false);
  };

  const onChange = (value: string) => {
    setSearchKey(value);
    setOpenDropdown(true);
  };

  useEffect(() => {
    if (searchKey.length > 1) {
      dispatch(actionSearch(searchKey));
    } else {
      dispatch(reset());
    }
  }, [searchKey, dispatch]);

  return (
    <Wrapper>
      <div className="search-field">
        <SearchBox
          dropdownList={dropdownList}
          onSelect={onSelect}
          openDropdown={openDropdown && !searching}
          onChange={onChange}
        />
      </div>
      {selectedItem && <SearchContainer result={selectedItem} />}
    </Wrapper>
  );
};

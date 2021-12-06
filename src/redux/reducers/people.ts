import { AnyAction } from 'redux';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, RESET } from '../actions';
import { defaultState } from '../initialState';
import { PeopleState } from '../interfaces';

export default function reducer(state: PeopleState = defaultState?.peopleData, action: AnyAction) {
  switch (action.type) {
    case RESET:
      return {
        searching: false,
        searchDropdown: [],
      };
    case SEARCH_REQUEST:
      return {
        ...state,
        searching: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        searchDropdown: action?.data?.results,
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        searching: false,
      };

    default:
      return state;
  }
}

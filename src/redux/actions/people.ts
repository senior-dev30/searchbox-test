import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, RESET } from '../actions';

export const actionSearch = (searchKey: string) => {
  return {
    method: 'get',
    endpoint: `api/people/?search=${searchKey}`,
    types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
  };
};

export const reset = () => ({
  type: RESET,
});

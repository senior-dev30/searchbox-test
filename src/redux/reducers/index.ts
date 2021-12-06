import { combineReducers } from 'redux';
import { AnyAction } from 'redux';
import { InitialState } from '../interfaces';
import { defaultState } from '../initialState';

import peopleReducer from './people';

const appReducer = combineReducers({
  peopleData: peopleReducer,
});

const rootReducer = (state: InitialState = defaultState, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;

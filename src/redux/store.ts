import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../middlewares/api';
import rootReducer from './reducers';
import { defaultState } from './initialState';
import { InitialState } from './interfaces';

export default function configureStore(initialState?: InitialState) {
  const middlewares = [thunkMiddleware, api];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const predefinedState = initialState ? initialState : defaultState;

  const store = createStore(rootReducer, predefinedState, composedEnhancers);

  return store;
}

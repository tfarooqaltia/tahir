import { combineReducers } from 'redux';

import init from './init'

//Here we put all the reducers related to module Shared.
const rootReducerShared = combineReducers({
  init,
  
});

export default rootReducerShared;
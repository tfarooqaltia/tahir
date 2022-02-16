import { combineReducers } from 'redux';

import init from './init'
import demo from '../../demo/reducers';


const shared = combineReducers({
  init,
})

//Here we put all the reducers related to module Shared.
const rootReducerShared = combineReducers({
  demo ,
  shared
});

export default rootReducerShared;
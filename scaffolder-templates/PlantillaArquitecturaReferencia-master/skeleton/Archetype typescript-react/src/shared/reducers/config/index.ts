import { combineReducers } from 'redux';

import demo from '../../../demo/reducers';
import shared from '../'

//Here we combine reducers from different modules. This archetype includes two modules, so we have demo and shared :) 
const rootReducer = combineReducers({
    demo,
    shared,
  });
  
  export default rootReducer;
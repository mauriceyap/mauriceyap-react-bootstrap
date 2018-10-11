import { combineReducers } from 'redux';

import foo from '../foo/reducer';
import bar from '../bar/reducer';

const reducers = {
  foo,
  bar,
};

export default combineReducers(reducers);

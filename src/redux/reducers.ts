import {combineReducers} from 'redux';
import todosSlice from './todos/slice';

export const appReducer = combineReducers({
  [todosSlice.name]: todosSlice.reducer,
});

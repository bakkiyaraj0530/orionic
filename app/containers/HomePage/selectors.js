/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectMoviesname = () =>
  createSelector(
    selectHome,
    homeState => homeState.filtername,
  );
const makeSelectPageNumber = () =>
  createSelector(
    selectHome,
    homeState => homeState.pagenumber,
  );

const selectmovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.movieslist,
  );
  
export { selectHome, makeSelectMoviesname, selectmovies, makeSelectPageNumber };

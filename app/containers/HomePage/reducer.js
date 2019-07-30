/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE,
  LOAD_THEMES,
  LOAD_THEMES_SUCCESS,
  LOAD_THEMES_FAILURE,
  LOAD_PROPERTY_VALUE,
  LOAD_PROPERTY_VALUE_SUCCESS,
  LOAD_PROPERTY_VALUE_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  keyWord: '',
  moviesList: '',
  propertyvalue: '',
  category: '',
  themes: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case LOAD_MOVIES:
        draft.filtername = action.filterName;
        draft.pagenumber = action.pageN;
        break;
      case LOAD_MOVIES_SUCCESS:
        draft.movieslist = action.moviesList;
        break;
      case LOAD_MOVIES_FAILURE:
        draft.username = action.error;
        break;
      case LOAD_THEMES:
        draft.themes = action.themes;
        break;
      case LOAD_THEMES_SUCCESS:
        draft.themes = action.themes;
        break;
      case LOAD_THEMES_FAILURE:
        draft.username = action.errorthemes;
        break;
      case LOAD_PROPERTY_VALUE:
        draft.cid = action.cid;
        break;
      case LOAD_PROPERTY_VALUE_SUCCESS:
        draft.propertyvalue = action.propertyvalue;
        break;
      case LOAD_PROPERTY_VALUE_FAILURE:
        draft.propertyerror = action.propertyerror;
        break;
    }
  });

export default homeReducer;

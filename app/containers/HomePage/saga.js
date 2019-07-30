/**
 * Gets the movies list.
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectMoviesname, makeSelectPageNumber } from './selectors';

import { LOAD_MOVIES } from './constants';
import { moviesFetchSuccess, moviesFetchilure } from './actions';


export function* getMovieslist() {
  // Select username from store
  const moviesTitle = yield select(makeSelectMoviesname());
  const pageNumber = yield select(makeSelectPageNumber());
  
  const requestURL = `http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=${moviesTitle}&page=${pageNumber}`;
  try {
    // Call our request helper (see 'utils/request')
    const moviesData = yield call(request, requestURL);
    yield put(moviesFetchSuccess(moviesData));
  } catch (err) {
    yield put(moviesFetchilure(err));
  }
}

/*
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_MOVIES, getMovieslist);
}

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Pagination from 'react-js-pagination';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Header from 'components/Header';
import ShowMoviesList from 'components/ShowMoviesList';
import { loadMovies, loadPropertyvalue } from './actions';
import { selectmovies } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ movieList, getmoviesData }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [searchKey, updateKey] = useState('Gods');
  const [activePage, updateActivepage] = useState(1);


  useEffect(() => {
    // Display the initial record to have the UI experience better.
    movieList(searchKey, 1);
  }, []);

  // On Key press , api call to fetch the Movie based on user input.
  const getDataSet = value => {
    movieList(value, 1);
    updateKey(value);
  };

  let content = '';
  if (getmoviesData && getmoviesData.Response) {
    content = <ShowMoviesList movies={getmoviesData} />;
  }

  const handlePageChange = pageNumber => {
    updateActivepage(pageNumber);
    movieList(searchKey, pageNumber);
  }

  return (
    <div>
      <Header getData={getDataSet} />
      <section className="categories_area clearfix" id="about">
        <div className="container">
          <div className="row">
            {getmoviesData && getmoviesData.totalResults > 0 &&
              <div className="col-12 col-md-6 col-lg-12">
                <div className="single_catagory">
                  <b>{`You searched for: ${searchKey}, ${getmoviesData && getmoviesData.totalResults} results found`}</b>
                </div>
              </div>}
          </div>
          <div className="row">{content}</div>
        </div>
      </section>
      {getmoviesData && getmoviesData.totalResults > 0 && 
        <div className="pagination">
          <Pagination
            itemClassFirst="link"
            itemClassPrev="link"
            itemClassNext="link"
            itemClassLast="link"
            innerClass="page-number"
            itemClass="page-number"
            prevPageText="Prev"
            nextPageText="Next"
            firstPageText="First"
            lastPageText="Last"
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
          />
        </div>
      }
    </div>
  );
}

HomePage.propTypes = {
  getmoviesData: PropTypes.object,
  movieList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  getmoviesData: selectmovies(),
});

export function mapDispatchToProps(dispatch) {
  return {
    movieList: (keyWord, pageN) => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadMovies(keyWord, pageN));
    },
    loadProperty: id => {
      dispatch(loadPropertyvalue(id));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

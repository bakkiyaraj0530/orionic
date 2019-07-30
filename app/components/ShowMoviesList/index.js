import React from 'react';
import PropTypes from 'prop-types';
import dummy from '../../images/image_thumb.png';

// import List from 'components/List';
// import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';
// import RepoListItem from 'containers/RepoListItem';

function ShowMoviesList({ loading, error, movies, searchKey }) {
  // if (loading) {
  //   return <List component={LoadingIndicator} />;
  // }
  // console.log('sssssssssssssssssssssssss');
  const addDefaultSrc = evt => {
    evt.target.src = dummy;
  };
  console.log(loading, error, movies, searchKey);
  let content = '';
  if (movies !== undefined && movies.Response === 'True' && movies.Search) {
    content = movies &&
      movies.Response &&
      movies.Search &&
      movies.Search.map(item =>
        <div key={`item-${item.id}`} className="col-12 col-md-6 col-lg-3">
          <div className="single_catagory" >
            <img src={item.Poster} alt="s"className="list-section" onError={addDefaultSrc} />
          </div>
          <div className="movie_content">Name: {item.Title}</div>
          <div className="movie_content">Year: {item.Year}</div>
          <div className="movie_content">imdbID: {item.imdbID}</div>
          <div className="movie_content">Type: {item.Type}</div>
        </div>
      );
    return content;
  }
  // // if (error !== false) {
  // const ErrorComponent = () => (
  //   <ListItem item="Something went wrong, please try again!" />
  // );
  // return <List component={ErrorComponent} />;
  // // }

  // if (repos !== false) {
  //   return <List items={repos} component={RepoListItem} />;
  // }

  return <div className="col-12 col-md-6 col-lg-12">    
            <div className="single_catagory" >
                <b>No Results found</b>
            </div>
          </div>;
}

ShowMoviesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  movies: PropTypes.any,
  searchKey: PropTypes.string,
};

export default ShowMoviesList;

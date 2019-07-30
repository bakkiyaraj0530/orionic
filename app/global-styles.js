import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

body {
    font-family: 'Poppins', sans-serif;
    position: relative;
    z-index: auto;
}

/* --------------------
:: 2.0 Top Header Area CSS
-------------------- */

.top_header_area {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ebebeb;
}


.top_header_area .signup-search-area {
    height: 40px;
    position: relative;
    z-index: 3;
}

.top_header_area .signup-search-area a {
    font-size: 13px;
    color: #222;
}

.top_header_area .signup-search-area .login a {
    margin-right: 13px;
}
.searchmovie {
    width: 385px;
}
.top_header_area .signup-search-area .search_button {
    margin-left: 54px;
}

#searchBtn {
    position: relative;
    z-index: 8;
}

.search-hidden-form {
    position: absolute;
    width: 100%;
    z-index: 4;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    font-size: 12px;
}

.search-hidden-form.search-form-open {
    z-index: 18;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.search-hidden-form #search-anything {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd;
    top: 5px;
    position: relative;
    padding: 5px 10px;
}

.search-hidden-form span {
    line-height: 30px;
    width: 30px;
    height: 30px;
    position: absolute;
    display: block;
    text-align: center;
    top: 5px;
    right: 0;
    border: 1px solid #ddd;
    color: #888;
    cursor: pointer;
    z-index: 5;
    font-size: 13px;
    border-left: none;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}

.search-hidden-form span:hover {
    color: #000;
}


.navbar.navbar-expand-lg {
    padding: 0;
}

.navbar.navbar-expand-lg .navbar-nav .nav-link {
    padding: 25px 30px;
    color: #232d37;
    text-transform: uppercase;
    font-size: 14px;
}

.navbar.navbar-expand-lg .navbar-nav .nav-link:hover,
.navbar.navbar-expand-lg .navbar-nav .active .nav-link {
    color: #fc6c3f;
}

.dropdown-item {
    font-weight: 500;
    color: #232d37;
    font-size: 14px;
    text-transform: uppercase;
}

.dropdown-item:focus,
.dropdown-item:hover {
    color: #fc6c3f;
    text-decoration: none;
    background-color: #f8f9fa;
}


/* --------------------
:: 5.0 Top Feature Area CSS 
-------------------- */

.categories_area {
    // padding: 80px 0 50px 0;
}
#header {
  background-color: #045cb359;
}
.downarrow {
    background-color: #045cb359;
}
.single_catagory {
    position: relative;
    z-index: 1;
    margin: 15px;
}
.list-section {
    border: 10px solid slategrey;
    height: 300px;
}
.movie_content {
    font-size: 13px;
    padding: 0px 10px 0px 34px;
}
.page-number > li {
    display: inline;
    padding: 10px;
    // text-align: center;
}
.pagination  {
    display: inline;
    text-align: center;
 }

// .pagination .page-number.active a {
//     font-weight: bold;
//     font-size: 14px;
//   }


.catagory-title {
    width: 200px;
    height: 50px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    text-align: center;
    border-radius: 30px;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}

.single_catagory:hover .catagory-title {
    background-color: #fc6c3f;
}

.catagory-title a > h5 {
    margin-bottom: 0;
    line-height: 50px;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}

.single_catagory:hover .catagory-title a > h5 {
    color: #fff;
}



`;

export default GlobalStyle;

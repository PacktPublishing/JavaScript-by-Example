import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import routes from './routes';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import AuthorList from './Components/Author/AuthorList';
import AuthorPosts from './Components/Author/AuthorPosts';
import NewPost from './Components/NewPost/NewPost';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>{`The app goes here...`}</h1>
      </div>
    );
  }
}

export default App;

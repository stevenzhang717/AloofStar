import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from '../Shared/Navigation';
import Posts from '../Posts/Posts';
import Home from '../Home';
import EditPostForm from '../EditPostForm';
import reducers from '../../reducers';
import SignIn from '../SignIn/Signin';
import Signup from '../Signup/Signup';
import SessionInitializer from '../StateManagementComponent/SessionInitializer';
import './App.css';

const App = () => (
  <Provider
    store={createStore(
      combineReducers({ posts: reducers.posts, session: reducers.session }),
      applyMiddleware(thunk)
    )}
  >
    <Router>
      <div>
        <CssBaseline />
        <SessionInitializer />
        <Route path="/" component={Navigation} />
        <div className="page">
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/create" component={EditPostForm} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;

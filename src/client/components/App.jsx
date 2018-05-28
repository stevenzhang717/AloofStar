import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import Navigation from './Navigation';
import Header from './Header';
import Posts from './Posts';
import Home from './Home';
import EditPostForm from './EditPostForm';
import reducers from '../reducers';
import SignIn from './Signin';
import Signup from './Signup';

const App = () => (
  <Provider
    store={createStore(
      combineReducers({ posts: reducers.posts, session: reducers.session }),
      applyMiddleware(thunk)
    )}
  >
    <Router>
      <div>
        <Route path="/" component={Navigation} />
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/create" component={EditPostForm} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  </Provider>
);

export default App;

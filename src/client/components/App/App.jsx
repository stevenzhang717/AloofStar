import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from '../Shared/Navigation';
import reducers from '../../reducers';
import SessionInitializer from '../StateManagementComponent/SessionInitializer';
import './App.css';
import AsyncComponent from './AsyncComponent';

const Home = AsyncComponent(() => import('../Home').then(module => module.default));
const Posts = AsyncComponent(() => import('../Posts/Posts').then(module => module.default));
const EditPostForm = AsyncComponent(() => import('../EditPostForm').then(module => module.default));
const SignIn = AsyncComponent(() => import('../SignIn/Signin').then(module => module.default));
const Siginup = AsyncComponent(() => import('../Signup/Signup').then(module => module.default));

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
          <Route exact path="/signup" component={Siginup} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;

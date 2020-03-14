import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Toolbar from './components/toolbar/toolbar'
import Register from './components/auth/register'
import store from './redux/Store'
import Login from './components/auth/login'
import Posts from './components/posts/posts'
import Post from './components/posts/post'
import Profile from './components/user/profile'
import Nav from './components/nav/nav'
import PostCreate from './components/posts/create'

function App() {
  return (
    <Provider store={store}>
      <Router>      
        <Toolbar />
        <Nav />
        <Route path='/' exact component={ Posts } />
        <Route path='/post/create' exact component={ PostCreate } />
        <Route path='/post/show/:id' exact component={ Post } />
        <Route path='/register' component={ Register } />
        <Route path='/login' component={ Login } />
        <Route path='/profile' component={ Profile } />
      </Router>
    </Provider>
  )
}

export default App

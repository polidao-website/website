import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './assets/vendor/nucleo/css/nucleo.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/style/sass.scss'

import DefaultLayout from './layouts/Default'
import Landing from './pages/Landing'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={['/']}>
        <DefaultLayout>
          <Route path="/" exact component={Landing} />
        </DefaultLayout>
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>,
  document.getElementById('root'),
)
